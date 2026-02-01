# Upload ThinkMath to GitHub (few files, no node_modules)

Only these files get pushed. **node_modules** and **.env** are ignored (see `.gitignore`).

## Option A: Command line (recommended)

Run these in a terminal **from inside the `math-tutor-app` folder**:

```bash
cd /Users/dmukunthu/Documents/math-tutor-app

# 1. Init git here only (so we don’t upload your whole Documents folder)
git init

# 2. Stage only the files we want (~10 files)
git add .
git status
# You should see: index.html, app.js, server.js, content.js, styles.css, package.json, etc.
# You should NOT see: node_modules, .env

# 3. First commit
git commit -m "ThinkMath app - quiz and LLM tutor"

# 4. Create a new repo on GitHub (github.com → New repository, name e.g. thinkmath)
#    Do NOT add README or .gitignore (we already have them).

# 5. Add your repo as remote and push (replace YOUR_USERNAME and thinkmath with your repo)
git remote add origin https://github.com/YOUR_USERNAME/thinkmath.git
git branch -M main
git push -u origin main
```

After this, the repo only contains the app (no `node_modules`, no `.env`). Render can clone it and run `npm install` on their side.

---

## Option B: GitHub website upload

If you prefer to upload without the command line:

1. On GitHub, click **New repository**. Name it (e.g. `thinkmath`). Create it **empty** (no README, no .gitignore).
2. Open your **math-tutor-app** folder in Finder.
3. **Do not** drag the whole folder if it contains `node_modules`. Instead:
   - Select only: `index.html`, `app.js`, `content.js`, `server.js`, `styles.css`, `package.json`, `package-lock.json`, `README.md`, `render.yaml`, `.gitignore`.
   - Drag just those files into the GitHub “upload” area.
4. Add a commit message and commit.

Then in Render, connect this repo. Render will run `npm install` when building, so `node_modules` is not needed in the repo.

---

## Summary

| Include in repo     | Don’t include      |
|---------------------|---------------------|
| index.html, app.js, content.js, server.js, styles.css | node_modules (hundreds of files) |
| package.json, package-lock.json                       | .env (your API key)              |
| README.md, render.yaml, .gitignore                     | .DS_Store                        |

If you use **Option A** from inside `math-tutor-app`, `git add .` plus `.gitignore` already does this for you.
