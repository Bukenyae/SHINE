# AGENTS.md — SHINE (A.E Reborn) Codex Rules

## Goal
You (Codex) are operating on this repo to make safe, reviewable changes and keep `main` deployable.

## Repo assumptions
- Default branch: `main`
- Package manager: prefer `pnpm` if `pnpm-lock.yaml` exists; else use `npm`/`yarn` based on lockfile.
- Runtime: Node.js project (React/Vite likely). If uncertain, inspect `package.json`.

## Guardrails (must-follow)
1. **Never commit secrets**
   - Do NOT commit `.env`, `*.env*`, API keys, tokens, credentials, certificates.
   - If secrets exist locally, ensure they are gitignored and mention it in output.

2. **Small, atomic commits**
   - Each task = minimal set of changes.
   - Prefer multiple commits over one huge commit.

3. **Commit message format**
   - Use Conventional Commits:
     - `feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`, `refactor: ...`, `test: ...`
   - First push / initial sync: `chore: initial commit (AE Reborn)`

4. **Branching**
   - For non-trivial work: create a branch `codex/<short-task-name>` and open a PR (if PR flow is available).
   - For the initial push only: push directly to `main`.

5. **Pre-push checks**
   - Run the most relevant checks that exist:
     - `pnpm lint` / `npm run lint` if defined
     - `pnpm test` / `npm test` if defined
     - `pnpm build` / `npm run build` if defined
   - If a command fails, stop and fix; do not push broken builds unless explicitly instructed.

## Git automation playbook (what to do when asked to “push to GitHub”)
When the user asks you to push the local project to the GitHub repo:

1. Confirm you are in the correct directory (repo root).
2. If not a git repo:
   - `git init`
3. Ensure a `.gitignore` exists and includes:
   - `node_modules/`
   - `.env*`
   - `dist/` (if Vite/React build output)
   - `.DS_Store`
4. Stage and commit:
   - `git add -A`
   - `git commit -m "chore: initial commit (AE Reborn)"`
5. Ensure `origin` remote matches:
   - `https://github.com/<USER>/SHINE.git` (or SSH equivalent)
6. Ensure branch is `main`:
   - `git branch -M main`
7. Push:
   - `git push -u origin main`

### If remote already has commits (README/license)
If `git push` is rejected due to unrelated history:
- `git pull origin main --allow-unrelated-histories`
- Resolve conflicts if any
- Re-run checks
- Push again

## Output requirements (what to show the user)
After completing a task, summarize:
- What changed (files touched)
- Commands run (and whether they passed)
- Git status (`git status -sb`)
- The commit hash(es) created
