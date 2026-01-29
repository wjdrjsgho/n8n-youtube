# n8n YouTube AI Summary Mind Map Hub

A web-based Mind Map Hub that visualizes AI-generated YouTube video summaries.
This project is connected to an n8n automation pipeline that extracts, summarizes, and converts YouTube content into Markdown, which is then visualized here.

## Features
- **Visualize Summaries**: Converts Markdown summaries into interactive Mind Maps.
- **GitHub Integration**: Fetches summaries directly from the `n8n-youtube/summaries` repository.
- **Interactive Toolbar**: Zoom, Pan, Fit to Screen controls.
- **Search/Filter**: Easily find video summaries.

## Tech Stack
- React (Vite)
- Markmap (Visualization)
- GitHub API

## Setup
1. Clone the repository.
2. Create `n8n-youtube/.env` with your GitHub Token:
   ```env
   VITE_GITHUB_TOKEN=your_token_here
   VITE_GITHUB_OWNER=n8n-youtube
   VITE_GITHUB_REPO=summaries
   ```
3. Run `npm install`.
4. Run `npm run dev`.
