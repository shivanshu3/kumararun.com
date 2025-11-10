#!/usr/bin/env bash
set -euo pipefail

branch=${1:-publish}
remote=${2:-origin}
repo_root=$(git rev-parse --show-toplevel)
site_dir="$repo_root/_site"

if [ ! -d "$site_dir" ]; then
  echo "Error: _site directory is missing. Run 'npm run build' first."
  exit 1
fi

temp_dir=$(mktemp -d)
cleanup() {
  git worktree remove "$temp_dir" --force >/dev/null 2>&1 || true
  rm -rf "$temp_dir"
}
trap cleanup EXIT

git fetch "$remote" "$branch" >/dev/null 2>&1 || true

git worktree prune >/dev/null 2>&1 || true

while IFS= read -r existing_path; do
  [ -z "$existing_path" ] && continue
  [ "$existing_path" = "$repo_root" ] && continue
  git worktree remove "$existing_path" --force >/dev/null 2>&1 || true
done < <(git worktree list --porcelain | awk -v target="refs/heads/$branch" '
  /^worktree / {path=$2}
  /^branch / && $2 == target {print path}
')

if git show-ref --verify --quiet "refs/heads/$branch"; then
  git worktree add "$temp_dir" "$branch"
else
  if git show-ref --verify --quiet "refs/remotes/$remote/$branch"; then
    git worktree add "$temp_dir" -b "$branch" "refs/remotes/$remote/$branch"
  else
    git worktree add "$temp_dir" -b "$branch"
  fi
fi

rsync -a --delete --exclude '.git' "$site_dir"/ "$temp_dir"/

pushd "$temp_dir" >/dev/null
git add -A

if git diff --cached --quiet; then
  echo "No changes detected in _site; publish branch unchanged."
  exit 0
fi

git commit -m "Publish site snapshot $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
git push "$remote" "$branch"
popd >/dev/null
