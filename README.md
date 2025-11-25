# Philadelphia Melee

Community hub for the Philadelphia Super Smash Brothers Melee competitive scene.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Payload CMS 3.x (with Lexical rich text editor)
- **Database:** PostgreSQL 16
- **Styling:** Tailwind CSS v4
- **Animations:** anime.js
- **Linting:** Biome https://biomejs.dev/reference/configuration/

## Prerequisites

- Node.js 20+
- pnpm
- PostgreSQL 16

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up PostgreSQL

PostgreSQL should already be installed and running. If not:

```bash
# Install via Homebrew
brew install postgresql@16

# Start the service
pnpm db:start
# or: brew services start postgresql@16

# Create the database
/usr/local/opt/postgresql@16/bin/createdb philadelphia_melee_dev
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Database (PostgreSQL)
DATABASE_URI=postgresql://127.0.0.1:5432/philadelphia_melee_dev

# Payload CMS Secret (see below for how to generate)
PAYLOAD_SECRET=your-super-secret-key-at-least-32-characters-long

# Server URL (no trailing slash)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional (for future features)
PREVIEW_SECRET=your-preview-secret
CRON_SECRET=your-cron-secret
```

#### Environment Variables Explained

| Variable | Required | Purpose |
|----------|----------|---------|
| `DATABASE_URI` | Yes | PostgreSQL connection string |
| `PAYLOAD_SECRET` | Yes | Signs JWT tokens for authentication. **Generate with:** `openssl rand -hex 32` |
| `NEXT_PUBLIC_SERVER_URL` | Yes | Base URL for the site (used for links, CORS, etc.) |
| `PREVIEW_SECRET` | No | Validates draft/preview mode requests to protect unpublished content |
| `CRON_SECRET` | No | Authenticates scheduled tasks (e.g., Slippi data sync) |

### 4. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 5. Access Admin Panel

Go to [http://localhost:3000/admin](http://localhost:3000/admin) and create your first admin user.

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm db:start` | Start PostgreSQL service |
| `pnpm db:stop` | Stop PostgreSQL service |
| `pnpm db:status` | Check PostgreSQL status |
| `pnpm db:psql` | Open psql shell |
| `pnpm db:reset` | Drop and recreate database |
| `pnpm payload:generate` | Generate Payload types |

## Project Structure

```text
philadelphia-melee/
├── app/
│   ├── (payload)/          # Payload CMS admin routes
│   │   ├── admin/          # Admin panel pages
│   │   └── api/            # Payload API routes
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── plans/
│   ├── roadmap.md          # Project roadmap
│   ├── status.md           # Current progress
│   └── commands.md         # Command reference
├── public/                 # Static assets
├── payload.config.ts       # Payload CMS configuration
└── package.json
```

## Known Issues & Notes

### Peer Dependency Warnings

You may see warnings like:

```bash
✕ unmet peer next@^15.2.3: found 16.0.3
```

**This is expected and safe to ignore.** Payload CMS 3.64.0 hasn't officially tested against Next.js 16 yet, but the packages are compatible. These warnings will disappear once Payload updates their peer dependency ranges.

### Turbopack Compatibility

If you encounter issues with Turbopack (the `--turbopack` flag), you can temporarily disable it:

```bash
# In package.json, change:
"dev": "next dev --turbopack"
# To:
"dev": "next dev"
```

## Documentation

- [Commands Reference](./plans/commands.md) - All available commands
- [Roadmap](./plans/roadmap.md) - Project phases and features
- [Status](./plans/status.md) - Current progress

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Lexical Editor Docs](https://payloadcms.com/docs/rich-text/lexical)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
