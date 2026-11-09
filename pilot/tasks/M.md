# Task M

If `attempt` is 2: create `pilot/lib/m.mjs` exporting `median(numbers)`, which throws `RangeError` on an empty list. Check with `PILOT_TASK=M node --test "pilot/tests/**/*.test.mjs"`, then finish normally.

If `attempt` is 1: this simulates a slow worker whose result arrives too late.
1. After the claim is pushed, run `bash scripts/wait-for-branch.sh claude/pilot/M/a2`. If it exits 1, run it again, up to 5 times in total.
2. Whether or not the branch appeared, create `pilot/lib/m.mjs` exporting `median` as above, write the normal `.agent/result.json`, commit and push to your own branch, then end the run.
