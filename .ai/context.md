# Audio Library Search - AI Context

> **For project overview, setup, and general information**, see [README.md](../README.md)

This file contains specific instructions and context for AI assistants working on this project.

---

## Quick Reference

- **[README.md](../README.md)** - Project overview, setup, tech stack, deployment
- **[DECISIONS.md](../DECISIONS.md)** - Architectural and technical decisions with rationale
- **[CHANGELOG.md](../CHANGELOG.md)** - Chronological list of changes to the project
- **[TODO.md](../TODO.md)** - List of ideas, improvements, and tasks to consider for the project.

---

## Data Model

**Type**: `AudioLibSearchElement`

```typescript
{
  id: string;
  youtubeLink?: string;    // Optional but at least one link required
  spotifyLink?: string;    // Optional but at least one link required
  timestamp: number;       // For YouTube &t= parameter
  talkTitle: string;       // The talk/video title
  topicTitle?: string;     // Optional topic/segment title within the talk
  description: string;
  tags: string[];
}
```

**Data location**: `data/AJCaudioLibraryList.ts` (TypeScript file, not JSON)

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

---

## AI Workflow Instructions

### Before Starting Any Task

**Check if the task is in TODO.md** - if yes, check if there are subtasks or notes for it

### During Implementation

1. **Write tests for all new code:**
   - New components → unit tests
   - New utility functions → unit tests
   - New features → integration tests if applicable
2. **Ask before refactoring** - if you notice something that could be improved or refactored, ask the user first
3. **Follow the code conventions** defined in this file

### After Making Changes

1. **Run quality checks**: `npm run check` (runs typecheck, lint:fix, and format)
2. **Update `TODO.md`** to reflect what was accomplished (update items - if they have been implemented and will be marked in CHANGELOG.md then delete them from TODO.md)
3. **Update `CHANGELOG.md`** with a brief description of changes made
4. **For significant changes** (architecture, tech stack, design decisions):
   - Update this `.ai/context.md` file
   - Document the decision rationale in `DECISIONS.md`

### Additional Documentation

- **[DECISIONS.md](../DECISIONS.md)** - Architectural and technical decisions with rationale
- **[CHANGELOG.md](../CHANGELOG.md)** - Chronological list of changes to the project

### Key Principles

- ✅ Ask if anything is unclear before coding
- ✅ Test everything you build
- ✅ Keep TODO.md and CHANGELOG.md up to date
