# Hono + JSX + Vercel

Minimal setup template for deploying Hono with JSX to Vercel.

## Setup

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build
```

## Project Structure

```
├── src/
│   └── app.tsx      # Main app with JSX
├── api/
│   └── index.ts     # Vercel serverless entry
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## Key Points

1. Vite bundles `src/app.tsx` to `dist/app.js`
2. Vercel runs `api/index.ts` which imports the bundled app
3. All routes redirect to `/api` via `vercel.json`

## License

MIT
