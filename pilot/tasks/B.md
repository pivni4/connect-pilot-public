# Task B

Your branch starts from the verified code of task A. Create `pilot/lib/b.mjs` exporting `slugPath(parts)`: apply `slugify` from `./a.mjs` to each part, drop empty results, join with `/`.

Check with `PILOT_TASK=B node --test "pilot/tests/**/*.test.mjs"`. Do not change anything under `pilot/tests/protected/`.
