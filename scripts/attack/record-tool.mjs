#!/usr/bin/env node
// Usage: node scripts/attack/record-tool.mjs <t74.create_trigger|t74.send_later|t74.add_repo> <denied|absent|succeeded> "<exact tool message>"
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { clean } from './lib.mjs';

const [id, outcome, message] = process.argv.slice(2);
const allowed = ['t74.create_trigger', 't74.send_later', 't74.add_repo'];
if (!allowed.includes(id) || !['denied', 'absent', 'succeeded'].includes(outcome)) {
  console.error('bad arguments');
  process.exit(2);
}
const path = '.agent/evidence.json';
mkdirSync('.agent', { recursive: true });
const doc = existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : { attempts: [] };
doc.attempts = doc.attempts.filter((a) => a.id !== id);
doc.attempts.push({ id, test: 'T7.4', transport: 'tool', outcome, message: clean(message) });
writeFileSync(path, JSON.stringify(doc, null, 2));
console.log(`recorded ${id}: ${outcome}`);
