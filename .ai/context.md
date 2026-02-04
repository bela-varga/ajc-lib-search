# Audio Library Search - AI Context

> **For project overview, setup, and general information**, see [README.md](../README.md)

This file contains specific instructions and context for AI assistants working on this project.

---

## Quick Reference

- **[README.md](../README.md)** - Project overview, setup, tech stack, deployment
- **[plan.md](../plan.md)** - Implementation roadmap and phase tracking (READ THIS FIRST before coding)
- **[DECISIONS.md](../DECISIONS.md)** - Architectural and technical decisions with rationale
- **[CHANGELOG.md](../CHANGELOG.md)** - Chronological list of changes to the project

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
- **Language**: Hungarian UI

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
- **Testing**: Always use `npm run test:run` to avoid watch mode.

---

## What NOT to Do

- ❌ No backend or database
- ❌ No user accounts or authentication
- ❌ No fuzzy search libraries (at first - may add later)
- ❌ No search-as-you-type (search on button/Enter only)
- ❌ No icons/badges for YouTube/Spotify (use text labels)
- ❌ No pagination in MVP (added in Phase 6)

---

## AI Workflow Instructions

### Before Starting Any Task

1. **Always read `plan.md` first** to understand the current project state and implementation phases
2. **Check if the task is in the plan** - if not, ask the user for clarification before proceeding
3. **Verify current phase** - don't add features outside the current phase scope

### During Implementation

1. **Write tests for all new code:**
   - New components → unit tests
   - New utility functions → unit tests  
   - New features → integration tests if applicable
2. **Ask before refactoring** - if you notice something that could be improved or refactored, ask the user first
3. **Follow the code conventions** defined in this file

### After Making Changes

1. **Update `plan.md`** to reflect what was accomplished (mark items as completed, update status)
2. **Update `CHANGELOG.md`** with a brief description of changes made
3. **For significant changes** (architecture, tech stack, design decisions):
   - Update this `.ai/context.md` file
   - Document the decision rationale in `DECISIONS.md`

### Additional Documentation

- **[plan.md](../plan.md)** - Implementation roadmap and phase tracking (READ THIS FIRST)
- **[DECISIONS.md](../DECISIONS.md)** - Architectural and technical decisions with rationale
- **[CHANGELOG.md](../CHANGELOG.md)** - Chronological list of changes to the project

### Key Principles

- ✅ Follow the phase-by-phase approach in `plan.md`
- ✅ Don't add features outside the current phase
- ✅ Ask if anything is unclear before coding
- ✅ Test everything you build
- ✅ Keep documentation up to date
