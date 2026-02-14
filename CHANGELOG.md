# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [2026-02-14] - Hamburger Menu Refactor, search updates

### Changed

- Refactored `HamburgerMenu` component to use a `MENU_ITEMS` configuration array for easier maintenance and scalability
- Implemented clickable tags: clicking a tag now triggers a search for that tag
- synchronized search state with URL parameters (`?q=...`) to support shareable search links
- Added pagination for search results (top and bottom), synchronized with URL (`?page=...`)
- Updated text content on Home, About, Contact, Terms, and Privacy pages

---

## [2026-02-14] - Hamburger Menu Navigation, General Information Pages

### Added

- Hamburger menu navigation component (`app/components/HamburgerMenu.tsx`)
- New "About" page at `/about` route
- New "Contact" page at `/contact` route
- New "Privacy" page at `/privacy` route
- New "Terms" page at `/terms` route
- Route configuration updates in `app/routes.ts`

### Changed

- Updated `app/root.tsx` to include HamburgerMenu in the Layout component (appears on all pages)

---

## [2026-02-13] - Cleanup: plan.md deleted

### Deleted

- Deleted plan.md

### Changed

- Updated README.md, .ai/context.md, TODO.md

---

## [2026-02-12] - Cleanups and helping updates

### Added

- Added script to run all checks: `npm run check`

### Changed

- Updated context.md with the new structure
- changed AudioLibSearchElement definition to be more precise
- ran npm run check and fixed the issues

---

## [2026-02-08] - Data Model Refactoring (Talk Title & Topic Title)

### Changed

- Renamed `title` to `talkTitle` in `AudioLibSearchElement` type definition.
- Added optional `topicTitle` field to `AudioLibSearchElement`.
- did changes across the codebase to support the new fields.

---

## [2026-02-03] - Accessibility & Code Refactoring

### Added

- `ExternalLink` component (`app/components/ExternalLink.tsx`) for accessible external links
- Unit tests for `ExternalLink` with `jsdom` setup

### Changed

- ResultItem now uses `ExternalLink` for YouTube and Spotify links (adds visual icon & screen-reader warnings)
- Refactored imports to use `import type` across the codebase for better performance
- Configured Vitest setup with `@testing-library/react` and `jsdom`

---

## [2026-02-02] - AI Assistant helping updates

### Added

- Initial documentation structure (`.ai/context.md`, `DECISIONS.md`, `CHANGELOG.md`)
- AI instruction files for multiple AI assistants (`.cursorrules`, `.github/copilot-instructions.md`, etc.)

### Changed

- updated context.md to be the main source of truth for AI assistants

---

## [2026-01-25] - Hungarian Localization

### Changed

- Converted all UI text to Hungarian language
- Updated search button, result messages, and all labels

---

## [2026-01-20] - Phase 1-4 Implementation

### Added

- Data model and type definitions (`app/types/library.types.ts`)
- Sample data file (`data/dummy.library.ts`)
- Core search engine (`app/utils/searchEngine.ts`)
- Search engine unit tests (`app/utils/searchEngine.test.ts`)
- UI Components:
  - `SearchBar.tsx`
  - `ResultItem.tsx`
  - `ResultsList.tsx`
- Custom hook `useSearch.ts`
- Main application wiring in `app/routes/home.tsx`
- Blue-ish color scheme styling

### Completed Phases

- ✅ Phase 0: Project setup
- ✅ Phase 1: Data model & type definitions
- ✅ Phase 2: Core search engine
- ✅ Phase 3: Basic UI components
- ✅ Phase 4: Wire everything together

---

## [2026-01-19] - Project Initialization

### Added

- Vite + React Router v7 project setup
- TypeScript configuration
- Tailwind CSS integration
- Project folder structure
- Initial `plan.md` and `.ai/context.md`

---

## Template for Future Entries

```markdown
## [YYYY-MM-DD] - Brief Description

### Added

- New feature or file

### Changed

- Modified behavior or file

### Fixed

- Bug fix

### Removed

- Deleted feature or file

### Deprecated

- Soon-to-be removed feature
```
