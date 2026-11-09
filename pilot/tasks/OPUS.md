# Task OPUS: calibration

A real engineering task used to measure how much usage a substantial session takes. Work normally and to a professional standard. Do not pad the time, and do not cut corners to save time.

Build a small in-memory SQL query engine in `pilot/opus/engine.mjs`, exporting `query(sql, tables)` where `tables` maps table names to arrays of row objects. No dependencies.

Required:
- Tokenizer and recursive-descent parser producing an AST. Bad syntax throws `SyntaxError` with a position. Unknown tables or columns throw `ReferenceError`.
- `SELECT` with expressions, aliases and `*`; `FROM` with table aliases; `INNER JOIN` and `LEFT JOIN` with `ON`, using a hash join for equality conditions and a nested loop otherwise.
- `WHERE`, `AND`, `OR`, `NOT`, comparisons, arithmetic, `IN (list)`, `IN (subquery)`, `BETWEEN`, `LIKE`, `IS NULL`, `CASE WHEN`, and SQL three-valued logic for `NULL`.
- `GROUP BY`, `HAVING`, and aggregates `COUNT(*)`, `COUNT(expr)`, `COUNT(DISTINCT expr)`, `SUM`, `AVG`, `MIN`, `MAX`.
- `ORDER BY` on several keys with `ASC` and `DESC` (`NULL` sorts first), `LIMIT`, `OFFSET`, `DISTINCT`.
- Subqueries in `FROM`.
- String functions `LOWER`, `UPPER`, `LENGTH`, `SUBSTR`, `COALESCE`.

Tests in `pilot/tests/opus/`:
- at least 80 unit tests across the features above;
- a seeded differential test: at least 500 randomly generated queries, comparing the engine with a separate naive reference evaluator that you also write, sharing no execution code with the engine.

Write `pilot/opus/README.md` with the grammar and the known limits.

Check with `PILOT_TASK=OPUS node --test "pilot/tests/**/*.test.mjs"`. Do not change anything under `pilot/tests/protected/`.
