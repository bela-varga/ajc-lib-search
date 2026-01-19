# Audio Library Search - Implementation Plan

## Project Overview

**One-sentence goal**: Build a simple, fast, client-side library search app that loads a static JSON file and lets the user search items by title and tags.

**Target user**: Single user, desktop-first but mobile-friendly, keyboard-driven usage preferred.

---

## Tech Stack Debate

### Recommended: **Vite + React + TypeScript**

**Pros:**
- Fast development with hot module replacement
- TypeScript support out of the box
- Simple build process for static hosting
- React provides clean component structure without being overkill
- Easy to deploy (just `npm run build` → host the `dist` folder)
- Great DX with minimal configuration

**Alternatives considered:**

1. **Vanilla HTML/CSS/TypeScript**
   - ✅ Simplest, no framework overhead
   - ❌ More boilerplate for state management
   - ❌ Less structured for future growth

2. **Next.js**
   - ✅ Great DX, built-in routing
   - ❌ Overkill for this project (no SSR needed, no backend)
   - ❌ Heavier build

**Decision**: Vite + React + TypeScript - strikes the best balance between simplicity and structure.

---

## Data Format Debate: JSON vs TypeScript File

### **Option A: TypeScript file (`data/library.ts`)**

```typescript
export const audioLibraryList: AudioLibSearchElement[] = [...];
```

**Pros:**
- ✅ Type-safe at compile time
- ✅ Direct import, no fetch needed
- ✅ Better DX in the repository
- ✅ Can include comments in the data
- ✅ IDE autocomplete when editing data

**Cons:**
- ❌ Requires rebuild to update data
- ❌ Non-technical contributors need to understand TypeScript basics

### **Option B: JSON file (`data/library.json`)**

```json
[
  {
    "id": "001",
    "title": "...",
    ...
  }
]
```

**Pros:**
- ✅ Standard format, universally understood
- ✅ Can be edited without technical knowledge
- ✅ Could be swapped at runtime (future: config option)

**Cons:**
- ❌ No compile-time type safety
- ❌ Needs runtime validation
- ❌ Requires fetch (minimal overhead)
- ❌ No comments support

### **Recommendation: TypeScript file**

**Rationale**: Since updates happen via PR anyway, contributors will be familiar with the repo structure. The type safety and DX benefits outweigh the small learning curve. If needed later, we can easily migrate to JSON.

---

## Project Structure

```
ajc-lib-search/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx         # Search input + button
│   │   ├── SearchFilters.tsx     # Phase 2: checkboxes for title/desc/tags
│   │   ├── ResultsList.tsx       # Display search results
│   │   └── ResultItem.tsx        # Single result card
│   ├── hooks/
│   │   └── useSearch.ts          # Search logic
│   ├── types/
│   │   └── library.types.ts      # AudioLibSearchElement type
│   ├── utils/
│   │   └── searchEngine.ts       # Core search algorithm
│   ├── data/
│   │   └── library.ts            # The actual library data
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Implementation Phases

### **Phase 0: Project Setup**

**Goal**: Initialize the project with Vite + React + TypeScript.

#### Step 0.1: Create Vite Project

**Prompt:**
```
You are setting up Phase 0: Project Setup.
Initialize a new Vite project with React and TypeScript in the current directory.
Use the template 'react-ts'.
Install dependencies automatically.
Do not add any features yet.
```

**Commands:**
```bash
npm create vite@latest . -- --template react-ts
npm install
```

#### Step 0.2: Clean Up Boilerplate

**Prompt:**
```
You are completing Phase 0: Project Setup.
Clean up the Vite boilerplate:
- Remove default Vite logos and sample components
- Clear App.tsx and App.css
- Keep only the essential structure
- Verify the dev server runs with `npm run dev`
Do not add any features yet.
```

#### Step 0.3: Create Folder Structure

**Prompt:**
```
You are completing Phase 0: Project Setup.
Create the folder structure as defined in plan.md:
- src/components/
- src/hooks/
- src/types/
- src/utils/
- src/data/

Do not create any files yet, just the folders.
```

---

### **Phase 1: Data Model & Type Definitions**

**Goal**: Define types and create sample data.

#### Step 1.1: Create Type Definitions

**Prompt:**
```
You are implementing Phase 1 only: Data Model & Type Definitions.
Create src/types/library.types.ts with the AudioLibSearchElement type exactly as specified in plan.md.
Add JSDoc comments explaining each field.
Do not add features outside this phase.
```

**Expected file**: `src/types/library.types.ts`

#### Step 1.2: Create Sample Data

**Prompt:**
```
You are implementing Phase 1 only: Data Model & Type Definitions.
Create src/data/library.ts with the sample data from plan.md.
Export audioLibraryList as AudioLibSearchElement[].
Add at least 10 diverse sample items for testing:
- Mix of YouTube-only, Spotify-only, and both
- Various tags
- Different timestamps
Follow the existing types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/data/library.ts`

---

### **Phase 2: Core Search Engine**

**Goal**: Implement the search logic (no UI yet).

#### Step 2.1: Create Search Utility

**Prompt:**
```
You are implementing Phase 2 only: Core Search Engine.
Create src/utils/searchEngine.ts with a searchLibrary function.

Requirements:
- Function signature: searchLibrary(library: AudioLibSearchElement[], query: string): AudioLibSearchElement[]
- Case-insensitive search
- Search in: title, description, and tags (all fields)
- Return items that match the query in ANY of these fields
- Empty query returns empty array

Add unit test examples in comments.
Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/utils/searchEngine.ts`

---

### **Phase 3: Basic UI Components**

**Goal**: Build the visual components without wiring them up yet.

#### Step 3.1: Create SearchBar Component

**Prompt:**
```
You are implementing Phase 3 only: Basic UI Components.
Create src/components/SearchBar.tsx.

Requirements:
- Single text input
- Search button
- OnSearch callback prop: (query: string) => void
- Enter key triggers search
- Accessible (labels, ARIA)
- Keyboard-friendly

Add basic styling for desktop-first, mobile-friendly layout.
Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/components/SearchBar.tsx`

#### Step 3.2: Create ResultItem Component

**Prompt:**
```
You are implementing Phase 3 only: Basic UI Components.
Create src/components/ResultItem.tsx.

Requirements:
- Props: AudioLibSearchElement
- Card-style layout
- Display: title, tags, source link(s)
- Show text labels for links ("YouTube" / "Spotify") - no icons/badges
- Clicking a link opens in new tab (_blank)
- If timestamp exists, append &t={timestamp}s to YouTube link
- Tags displayed as pills/chips

Add clean, modern card styling with subtle shadows.
Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/components/ResultItem.tsx`

#### Step 3.3: Create ResultsList Component

**Prompt:**
```
You are implementing Phase 3 only: Basic UI Components.
Create src/components/ResultsList.tsx.

Requirements:
- Props: results: AudioLibSearchElement[], hasSearched: boolean
- If !hasSearched → render nothing
- If hasSearched && results.length === 0 → show "No results found"
- If hasSearched && results.length > 0:
  - Show "X results found" message at the top
  - Render list of ResultItem components

Add appropriate spacing and layout.
Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/components/ResultsList.tsx`

---

### **Phase 4: Wire Everything Together**

**Goal**: Connect components, data, and search logic in App.tsx.

#### Step 4.1: Create useSearch Hook

**Prompt:**
```
You are implementing Phase 4 only: Wire Everything Together.
Create src/hooks/useSearch.ts.

Requirements:
- Load library data (import from src/data/library.ts)
- State: searchQuery, results, hasSearched
- Function: handleSearch(query: string)
- Use searchEngine from utils
- Return: { results, hasSearched, handleSearch }

Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/hooks/useSearch.ts`

#### Step 4.2: Implement Main App

**Prompt:**
```
You are implementing Phase 4 only: Wire Everything Together.
Update src/App.tsx to use all components and the useSearch hook.

Requirements:
- Import SearchBar, ResultsList, useSearch
- Pass handleSearch to SearchBar
- Pass results and hasSearched to ResultsList
- Add header with app title
- Add basic layout and styling

Do not add features outside this phase.
Follow the existing folder structure and types exactly.
If something is unclear, ask before coding.
```

**Expected file**: `src/App.tsx`

#### Step 4.3: Polish Styles

**Prompt:**
```
You are implementing Phase 4 only: Wire Everything Together.
Update src/App.css with cohesive styling.

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

**Expected file**: `src/App.css`

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
Create src/components/Pagination.tsx.

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
Update src/components/ResultsList.tsx to include pagination.

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
Create src/components/SearchFilters.tsx.

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
Update src/utils/searchEngine.ts to accept filters parameter.

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
Update src/components/ResultItem.tsx to add copy link button.

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
