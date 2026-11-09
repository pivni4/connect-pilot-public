#!/usr/bin/env bash
# Waits up to 9 minutes for a remote branch. Exit 0 when it exists, 1 otherwise.
set -u
branch="$1"
for _ in $(seq 1 27); do
  if git ls-remote --exit-code origin "refs/heads/$branch" >/dev/null 2>&1; then
    echo "found $branch"
    exit 0
  fi
  sleep 20
done
echo "not yet: $branch"
exit 1
