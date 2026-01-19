# Audio Library Search - AI Context

## Project Overview

**One-sentence goal**: Build a simple, fast, client-side library search app that loads a static TypeScript file and lets users search audio library items by title, description, and tags.

**Target user**: Single user, desktop-first but mobile-friendly, keyboard-driven usage preferred.

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
├── plan.md                       # Detailed implementation plan
└── .ai/                          # AI context (this folder)
```

---

## Data Model

**Type**: `AudioLibSearchElement`

```typescript
{
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

## Design Conventions

### Styling
- **Color scheme**: Blue-ish (primary colors defined in `app.css` as `--color-primary-*`)
- **Layout**: Card-style for results with subtle shadows
- **Responsive**: Desktop-first, mobile-friendly

### UI Behavior
- **Search trigger**: Button click or Enter key (not search-as-you-type)
- **Empty search**: Do not search, show nothing
- **Results display**:
  - Show "X results found" at top
  - Display title, tags, and source links
  - Text labels for YouTube/Spotify (no icons/badges)
  - Clicking link opens in new tab with timestamp appended if exists

### Code Preferences
- Use Tailwind utility classes for styling
- Components in `app/components/`
- Types in `app/types/`
- Keep search logic in `app/utils/searchEngine.ts`
- Use React Router for URL-based search params (shareable URLs)

---

## Implementation Phases

See **[plan.md](../plan.md)** for detailed phase-by-phase implementation guide with copy-paste prompts.

### Current Status
- ✅ **Phase 0**: Project setup complete
- ⏳ **Phase 1**: Data model & type definitions (next)
- ⏳ **Phase 2**: Core search engine
- ⏳ **Phase 3**: Basic UI components
- ⏳ **Phase 4**: Wire everything together
- ⏳ **Phase 5**: Testing & verification
- ⏳ **Phase 6**: Pagination
- ⏳ **Phase 7**: Advanced features (filters + copy link)

**Track progress**: See `.gemini/antigravity/brain/[conversation-id]/task.md`

---

## Common Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:5173

# Build
npm run build            # Build for production

# Testing
npm run typecheck        # Check TypeScript types
```

---

## Key Files Reference

- **[plan.md](../plan.md)** - Complete implementation plan with prompts for each phase
- **[data/library.ts](../data/library.ts)** - Audio library data (will be created in Phase 1)
- **[app/types/library.types.ts](../app/types/library.types.ts)** - Type definitions (will be created in Phase 1)

---

## What NOT to Do

- ❌ No backend or database
- ❌ No user accounts or authentication
- ❌ No fuzzy search libraries (at first - may add later)
- ❌ No search-as-you-type (search on button/Enter only)
- ❌ No icons/badges for YouTube/Spotify (use text labels)
- ❌ No pagination in MVP (added in Phase 6)

---

## Notes for AI Assistants

- Follow the phase-by-phase approach in `plan.md`
- Each phase has a specific prompt - use it to stay focused
- Don't add features outside the current phase
- Reference existing folder structure and types
- Ask if anything is unclear before coding
- Updates to data happen via PR to the repository
