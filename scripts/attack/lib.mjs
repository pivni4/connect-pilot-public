import { spawnSync } from 'node:child_process';

export const clean = (s) => String(s ?? '')
  .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, '<email>')
  .replace(/\b(gh[a-z]_[A-Za-z0-9_]+|github_pat_[A-Za-z0-9_]+|sk-[A-Za-z0-9_-]{8,})\b/g, '<token>')
  .replace(/https?:\/\/[^@\s/]+@/g, 'https://<cred>@')
  .slice(0, 500);

export function sh(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', timeout: 90000, env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }, ...opts });
  return { code: r.status, error: r.error ? r.error.code ?? r.error.message : null, out: `${r.stdout ?? ''}${r.stderr ?? ''}` };
}

export function whoRefused(out) {
  if (/not enabled for this session|agentproxy|CONNECT tunnel failed|docs\.anthropic\.com\/en\/docs\/claude-code|proxy/i.test(out)) return 'proxy';
  if (/GH\d{3}|rule violations|protected branch|remote rejected|returned error: 4\d\d|cannot (update|create|delete)|Repository not found|could not read Username|Authentication failed|not found|Forbidden|must have admin|Resource not accessible|Upgrade to GitHub Pro|HTTP 4\d\d/i.test(out)) return 'github';
  return 'unknown';
}
