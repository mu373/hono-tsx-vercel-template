import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hono + Vercel</title>
        <style>{`
          body {
            font-family: sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            line-height: 1.6;
          }
          h1 {
            color: #333;
          }
        `}</style>
      </head>
      <body>
        <h1>Hello from Hono + JSX on Vercel!</h1>
        <p>This works! 🎉</p>

        <ul>
          <li>Framework: <a href="https://hono.dev/docs/">Hono</a></li>
          <li>Template: <a href="https://hono.dev/docs/guides/jsx">JSX</a></li>
          <li>Language: TypeScript</li>
          <li>Build Tool: <a href="https://vite.dev/guide/">Vite</a></li>
          <li>Hosting: Vercel</li>
        </ul>
      </body>
    </html>
  )
})

export default app
