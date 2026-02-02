# Audio Library Search

A fast, client-side search application for browsing and searching an audio library. Built with Vite, React Router v7, and TypeScript.

**One-sentence goal**: Build a simple, fast, client-side library search app that loads a static TypeScript file and lets users search audio library items by title, description, and tags.

---

## Features

- 🔍 **Fast client-side search** - Search by title, description, and tags
- 🎯 **Keyboard-driven** - Search on Enter or button click
- 🔗 **Shareable URLs** - Search parameters in the URL for easy sharing
- 🇭🇺 **Hungarian UI** - Fully localized for Hungarian users
- 📱 **Responsive** - Desktop-first, mobile-friendly design
- 🎨 **Modern styling** - Blue-ish color scheme with Tailwind CSS

---

## Tech Stack

- **Framework**: Vite + React Router v7
- **Language**: TypeScript
- **Styling**: Tailwind CSS (blue-ish color scheme)
- **Deployment**: Static site (GitHub Pages, Netlify, or Vercel)

---

## Project Structure

```
ajc-lib-search/
├── app/                          # React Router v7 app directory
│   ├── components/               # React components
│   ├── hooks/                    # Custom React hooks
│   ├── types/                    # TypeScript type definitions
│   ├── utils/                    # Utility functions (search engine)
│   ├── routes/                   # Route components
│   ├── root.tsx                  # App root with Layout
│   └── app.css                   # Global styles + Tailwind config
├── data/                         # Static data (library items)
│   └── library.ts                # AudioLibSearchElement[] export
├── .ai/                          # AI assistant context
│   └── context.md                # Instructions for AI assistants
├── plan.md                       # Detailed implementation plan
├── DECISIONS.md                  # Architectural decisions
└── CHANGELOG.md                  # Project changelog
```

---

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with static files ready for deployment.

### Testing

```bash
npm run typecheck        # Check TypeScript types
npm test                 # Run unit tests (Vitest)
```

---

## Data Model

The library uses a TypeScript file for data storage with the following structure:

```typescript
interface AudioLibSearchElement {
  id: string;
  youtubeLink?: string;    // Optional but at least one link required
  spotifyLink?: string;    // Optional but at least one link required
  timestamp: number;       // For YouTube &t= parameter
  title: string;
  description: string;
  tags: string[];
}
```

**Data location**: `data/library.ts` (TypeScript file, not JSON)

---

## Deployment

The app generates static files that can be deployed to any static hosting service:

### GitHub Pages

1. Build the project: `npm run build`
2. Push the `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Netlify

- Drag & drop the `dist` folder to Netlify
- Or connect to GitHub for auto-deploy

### Vercel

- Connect your GitHub repository
- Auto-deploy on push

### Any Static Host

- Upload the contents of the `dist/` folder

---

## Documentation

- **[plan.md](./plan.md)** - Complete implementation plan with phase-by-phase guide
- **[DECISIONS.md](./DECISIONS.md)** - Architectural and technical decisions
- **[CHANGELOG.md](./CHANGELOG.md)** - Project changelog
- **[.ai/context.md](./.ai/context.md)** - AI assistant instructions and context

---

## Current Implementation Status

- ✅ **Phase 0**: Project setup
- ✅ **Phase 1**: Data model & type definitions
- ✅ **Phase 2**: Core search engine
- ✅ **Phase 3**: Basic UI components
- ✅ **Phase 4**: Wire everything together
- ⏳ **Phase 5**: Testing & verification
- ⏳ **Phase 6**: Pagination
- ⏳ **Phase 7**: Advanced features (filters + copy link)

See [plan.md](./plan.md) for detailed progress tracking.

---

## Contributing

Updates to the library data happen via PR to the repository. When adding new entries:

1. Edit `data/library.ts`
2. Follow the existing type structure
3. Submit a PR

---

## License

[Add your license here]

---

## AI Assistant Instructions

If you're an AI assistant helping with this project, **please read [.ai/context.md](./.ai/context.md) first** for important context, conventions, and workflow guidelines.
