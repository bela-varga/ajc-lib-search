# Audio Library Search - Implementation Plan

## Project Overview

**One-sentence goal**: Build a simple, fast, client-side library search app that loads a static JSON file and lets the user search items by title and tags - and it should be Hungarian.

**Target user**: Single user, desktop-first but mobile-friendly, keyboard-driven usage preferred. Language is Hungarian.

**Tech Stack**: Vite + React Router v7 + TypeScript + Tailwind CSS

> See [DECISIONS.md](./DECISIONS.md) for architectural decisions and rationale.

---

## Project Structure

```
ajc-lib-search/
├── app/
│   ├── components/
│   │   ├── SearchBar.tsx         # Search input + button
│   │   ├── SearchFilters.tsx     # Phase 7: checkboxes for title/desc/tags
│   │   ├── ResultsList.tsx       # Display search results
│   │   ├── ResultItem.tsx        # Single result card
│   │   └── Pagination.tsx        # Phase 6: pagination component
│   ├── hooks/
│   │   └── useSearch.ts          # Search logic
│   ├── types/
│   │   └── library.types.ts      # AudioLibSearchElement type
│   ├── utils/
│   │   └── searchEngine.ts       # Core search algorithm
│   ├── routes/
│   │   └── home.tsx              # Main search page
│   ├── root.tsx                  # App root with Layout
│   ├── app.css                   # Global styles + Tailwind
│   └── routes.ts                 # Route configuration
├── data/
│   └── library.ts                # The actual library data
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── react-router.config.ts
```

---

## Implementation Phases

### **Phase 0: Project Setup**

**Goal**: Initialize the project with Vite + React + TypeScript.

#### Step 0.1: Create Vite Project

**Status:** ✅ COMPLETED

Used React Router v7 template which includes:

- Vite + React + TypeScript
- React Router v7 for routing
- Tailwind CSS for styling

**Commands:**

```bash
npm create vite@latest . -- --template react-ts
# Selected React Router v7 variant
npm install
```

#### Step 0.2: Clean Up Boilerplate

**Status:** ✅ COMPLETED

Cleaned up:

- Removed welcome components and logos
- Restored Tailwind CSS with blue-ish color theme
- Simplified `root.tsx` and `app/routes/home.tsx`
- Verified dev server runs

#### Step 0.3: Create Folder Structure

**Status:** ✅ COMPLETED

Created:

- `app/components/`
- `app/hooks/`
- `app/types/`
- `app/utils/`
- `data/` (at root level)

---

### **Phase 1: Data Model & Type Definitions**

**Goal**: Define types and create sample data.

#### Step 1.1: Create Type Definitions

**Status:** ✅ COMPLETED

**File**: `app/types/library.types.ts`

#### Step 1.2: Create Sample Data

**Status:** ✅ COMPLETED

**File**: `data/dummy.library.ts`

---

### **Phase 2: Core Search Engine**

**Goal**: Implement the search logic (no UI yet).

#### Step 2.1: Create Search Utility

#### Step 2.1: Create Search Utility

**Status:** ✅ COMPLETED

**File**: `app/utils/searchEngine.ts`
**Tests**: `app/utils/searchEngine.test.ts` (Vitest)

---

### **Phase 3: Basic UI Components**

**Goal**: Build the visual components without wiring them up yet.

#### Step 3.1: Create SearchBar Component

**Status:** ✅ COMPLETED

**File**: `app/components/SearchBar.tsx`

#### Step 3.2: Create ResultItem Component

**Status:** ✅ COMPLETED

**File**: `app/components/ResultItem.tsx`

#### Step 3.3: Create ResultsList Component

**Status:** ✅ COMPLETED

**File**: `app/components/ResultsList.tsx`

---

### **Phase 4: Wire Everything Together**

**Goal**: Connect components, data, and search logic in App.tsx.

#### Step 4.1: Create useSearch Hook

**Status:** ✅ COMPLETED

**File**: `app/hooks/useSearch.ts`

#### Step 4.2: Implement Main App

**Status:** ✅ COMPLETED

**File**: `app/routes/home.tsx`

#### Step 4.3: Polish Styles

**Prompt:**

```
You are implementing Phase 4 only: Wire Everything Together.
Update app/app.css with cohesive styling.

Requirements:
- Modern, clean design
- Blue-ish color scheme
- Desktop-first, mobile-friendly (responsive)
- Keyboard focus indicators
- Consistent spacing and colors
- Dark mode optional but nice-to-have

Do not add features outside this phase.
If something is unclear, ask before coding.
```

**Expected file**: `app/app.css`

---

### **Phase 5: Testing & Verification**

**Goal**: Manually test the app and fix bugs.

#### Step 5.1: Manual Testing

**Prompt:**

```
You are implementing Phase 5 only: Testing & Verification.
Run the app with `npm run dev` and test:
- Search works (case-insensitive)
- Empty search shows nothing
- No results message appears correctly
- Links open in new tab
- Timestamp appends to YouTube links
- Tags display correctly
- Keyboard navigation works (Tab, Enter)

Document any issues found.
Do not add features outside this phase.
If something is unclear, ask before coding.
```

#### Step 5.2: Bug Fixes

**Prompt:**

```
You are implementing Phase 5 only: Testing & Verification.
Fix any bugs discovered during testing.
List all changes made.
Do not add features outside this phase.
```

---

### **Phase 6: Pagination**

**Goal**: Add pagination to handle large result sets efficiently.

#### Step 6.1: Create Pagination Component

**Prompt:**

```
You are implementing Phase 6 only: Pagination.
Create app/components/Pagination.tsx.

Requirements:
- Props: currentPage, totalPages, onPageChange
- Show page numbers with Previous/Next buttons
- Highlight current page
- Keyboard accessible
- Show first, last, and pages around current (e.g., 1 ... 4 5 6 ... 10)

Add clean styling consistent with the app.
Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

#### Step 6.2: Update ResultsList with Pagination

**Prompt:**

```
You are implementing Phase 6 only: Pagination.
Update app/components/ResultsList.tsx to include pagination.

Requirements:
- Add itemsPerPage state (default: 20)
- Calculate totalPages based on results.length
- Show only current page's items
- Include Pagination component at bottom
- Keep "X results found" message showing total results

Do not add features outside this phase.
Follow the existing types exactly.
If something is unclear, ask before coding.
```

---

### **Phase 7: Advanced Features**

**Goal**: Add search filters and copy link functionality.

#### Step 7.1: Create SearchFilters Component

**Prompt:**

```
You are implementing Phase 7 only: Advanced Features.
Create app/components/SearchFilters.tsx.

Requirements:
- Three checkboxes: Search in Title, Search in Description, Search in Tags
- All checked by default
- OnChange callback: (filters: { title: boolean, description: boolean, tags: boolean }) => void

Add to UI near SearchBar.
Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

#### Step 7.2: Update Search Engine for Filters

**Prompt:**

```
You are implementing Phase 7 only: Advanced Features.
Update app/utils/searchEngine.ts to accept filters parameter.

New signature: searchLibrary(library, query, filters)
Respect the filter flags when searching.
Do not add features outside this phase.
Follow the existing types exactly.
If something is unclear, ask before coding.
```

#### Step 7.3: Add Copy Link Button

**Prompt:**

```
You are implementing Phase 7 only: Advanced Features.
Update app/components/ResultItem.tsx to add copy link button.

Requirements:
- Add "Copy Link" button for each source link (YouTube/Spotify)
- On click, copy the full URL (with timestamp if applicable) to clipboard
- Show brief "Copied!" feedback
- Keyboard accessible

Do not add features outside this phase.
Follow the existing types exactly.
If something is unclear, ask before coding.
```

---

## Probable Future Upgrades (Beyond Phase 7)

1. **Highlight Matching Terms**
   - Visually highlight the search query in results
   - Example: searching "jazz" highlights it in yellow in title/description

2. **Tag Filtering**
   - Click a tag to filter by that tag instantly
   - Combine with text search for powerful filtering
   - Show active tag filters with remove buttons

3. **Fuzzy Search**
   - Integrate library like Fuse.js
   - Handle typos and partial matches

4. **Sorting Options**
   - Sort by: relevance, title (A-Z), date added
   - Toggle ascending/descending

5. **Favorites / Bookmarks**
   - LocalStorage to save favorites
   - "Star" icon on each item

6. **Export Search Results**
   - Download results as JSON or CSV

7. **Keyboard Shortcuts**
   - `/` to focus search
   - Arrow keys to navigate results
   - `Enter` to open selected result

8. **Dark Mode Toggle**
   - User preference saved to localStorage

9. **Search History**
   - Show recent searches as suggestions

10. **Virtual Scrolling**
    - For very large libraries (1000+ items)
    - Render only visible items for performance

---

## Deployment Guide

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with static files.

### Hosting Options

1. **GitHub Pages**
   - Push to `gh-pages` branch
   - Enable in repo settings

2. **Netlify**
   - Drag & drop the `dist` folder
   - Or connect to GitHub for auto-deploy

3. **Vercel**
   - Connect GitHub repo
   - Auto-deploy on push

4. **Any static host**
   - Upload `dist/` folder contents

---

## Notes

- Each phase builds on the previous one
- Phases 0-5 create the MVP
- Phase 6+ are enhancements
- Stick to the prompts to maintain focus
- Each prompt includes the constraint: "Do not add features outside this phase"
