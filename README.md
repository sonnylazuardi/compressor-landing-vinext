# Compressor landing page

Static marketing site for Compressor, a native image compression app for macOS
and Windows. Built with Vite + React + TypeScript and deployed on
[Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Deploy to Cloudflare Pages

Build output is `dist/` (`pages_build_output_dir` in `wrangler.jsonc`).

### CLI

```bash
npx wrangler login
npm run ship
```

### Git / dashboard build settings

In the Pages project → **Settings → Builds**, use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Deploy command | `npx wrangler pages deploy dist --project-name=compressor-landing` |
| Node version | `22` |

Do **not** use `npx wrangler deploy` — that is for Workers and will fail on this Pages project.

### Custom domain (DNS can stay on Rumahweb)

1. Pages project → **Custom domains** → add `compressor.sonnylab.com`
2. On Rumahweb, create a **CNAME**:
   - Name: `compressor`
   - Target: `compressor-landing.pages.dev` (use the host Cloudflare shows)
3. Wait for DNS + SSL

### Clean up the old Worker

Per [Cloudflare’s migration guide](https://developers.cloudflare.com/pages/migrations/migrating-from-workers/):

1. Remove `compressor.sonnylab.com` from the old Worker (Domains & Routes)
2. Delete the old Worker (`compressor-landing-vinext`) once Pages is live
3. Point the custom domain at the Pages project only

## Production checks

```bash
npm test
```
