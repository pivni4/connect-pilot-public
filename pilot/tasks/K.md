# Task K

If `attempt` is 1: after the claim is pushed, end the run at once. Do not write a result. This simulates a worker that disappears.

If `attempt` is 2: create `pilot/lib/k.mjs` exporting `clamp(x, min, max)`. Check with `PILOT_TASK=K node --test "pilot/tests/**/*.test.mjs"`, then finish normally.
