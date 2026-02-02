# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
- Initial documentation structure (`.ai/context.md`, `DECISIONS.md`, `CHANGELOG.md`)
- AI instruction files for multiple AI assistants (`.cursorrules`, `.github/copilot-instructions.md`, etc.)

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
