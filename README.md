# BackendPrep — Senior Backend (40–50 LPA) Roadmap Tracker

Local-only Next.js app. No database — progress & code snippets live in your browser's localStorage.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub → import on Vercel. Zero config needed. Note: localStorage is per-browser/per-device.

## Structure

- `data/topics.js` — the full syllabus (add/remove topics here; keep ids stable)
- `lib/store.js` — localStorage persistence (fails loudly on corruption)
- `hooks/usePrepStore.js` — state + persistence hook
- `components/` — Header, ProgressBar, SearchBar, CategoryCard, TopicRow, CodeModal, SnippetVault, Tracker
