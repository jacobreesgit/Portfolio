# Jacob Rees Portfolio

My personal portfolio site showcasing projects and experience.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- MDX for project content
- Framer Motion for animations

## Running Locally

```bash
npm install
npm run dev
```

Runs on port 9000 by default.

## Project Structure

```
src/
├── app/              # Next.js pages
├── components/       # React components
├── content/          # MDX project files
└── lib/             # Utilities
```

## Building

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run check` - Run all checks (format, type-check, lint, build)
- `npm run format` - Format with Prettier
