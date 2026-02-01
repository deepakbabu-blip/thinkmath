# ThinkMath — Math Tutor App

A math tutor for middle and high school students that **never gives answers**. Two experiences: **Quiz** (scored practice) and **Ask the tutor** (LLM-powered Q&A that guides with hints).

## How it works

- **Quiz** — Pick a topic, answer multiple-choice or free-response questions, get scored. Hints available; tutor never gives the answer.
- **Ask the tutor** — Type any math question (e.g. “how to do 3+4?” or “solve 2x + 5 = 15”). The tutor understands what you asked and responds with hints and guiding questions—no direct answers.

## Run with LLM tutor (recommended)

The “Ask the tutor” experience uses an LLM on **GROQ** (open source model: Llama 3.1 8B by default) so it understands what students type.

1. **Install and set your API key**

   ```bash
   cd math-tutor-app
   npm install
   ```

   Create a `.env` file in the same folder:

   ```
   GROQ_API_KEY=gsk_your-groq-key-here
   ```

   Get a free key at [GROQ Console](https://console.groq.com).

   Optional: use a different model by setting `GROQ_MODEL` in `.env` (e.g. `llama-3.3-70b-versatile`).

2. **Start the server**

   ```bash
   npm start
   ```

   Open **http://localhost:3000**. Use “Ask the tutor” and type questions; the tutor will respond in context (e.g. “how to do 3+4?” gets guidance on addition, not “put the problem in your own words”).

## Deploy to Render

1. **Push your code to GitHub or GitLab**  
   If you have “too many files,” use **only the `math-tutor-app` folder** and see **[GITHUB_UPLOAD.md](GITHUB_UPLOAD.md)** so you don’t upload `node_modules` or your whole Documents folder.  
   The repo must contain `math-tutor-app` (or use the repo root if the app is at the root). If the app lives in a subfolder (e.g. `math-tutor-app/`), you’ll set **Root Directory** in Render to that folder.

2. **Create a Blueprint on Render**  
   - Go to [dashboard.render.com](https://dashboard.render.com) → **New** → **Blueprint**.  
   - Connect your Git provider and select the repo that has `render.yaml`.  
   - If the app is in a subfolder (e.g. `math-tutor-app`), set **Root Directory** to `math-tutor-app` for the web service (you can do this after the first deploy in the service’s **Settings**).

3. **Set the GROQ API key**  
   Render will prompt for **GROQ_API_KEY** when you connect the Blueprint (because it’s set to `sync: false`). Paste your key there.  
   Or after deploy: open the **thinkmath** service → **Environment** → **Add Environment Variable** → `GROQ_API_KEY` = your key.

4. **Deploy**  
   Render will run `npm install` and `npm start`. Your app will be live at `https://thinkmath.onrender.com` (or the URL shown).

**Optional:** To use a different GROQ model, add `GROQ_MODEL` in the service’s Environment (e.g. `llama-3.3-70b-versatile`).

## Run without LLM (Quiz only)

- **Option A:** Run the Node server without `GROQ_API_KEY`. Quiz works; “Ask the tutor” will show a message to set the key.
- **Option B:** Serve the folder as static files (e.g. `python3 -m http.server 8080`). Quiz works; “Ask the tutor” will not (no `/api/chat`).

## Files

- `index.html` — App shell and screens
- `styles.css` — Layout and theme
- `content.js` — Quiz topics and problems (hints only)
- `app.js` — Quiz flow, LLM chat for “Ask the tutor”
- `server.js` — Express server; serves app and `POST /api/chat` for the LLM (GROQ + Llama)
- `package.json` — Dependencies (express, groq-sdk, dotenv, cors)
