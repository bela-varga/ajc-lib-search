# Architectural Decisions

This document records the significant technical and architectural decisions made for this project, along with the rationale behind them.

---

## Tech Stack: Vite + React Router v7 + TypeScript + Tailwind CSS

**Date:** Project initialization  
**Status:** ✅ Adopted

### Context

Needed a simple, fast framework for a client-side search application with shareable URLs.

### Decision

Use Vite + React Router v7 + TypeScript + Tailwind CSS

### Rationale

**Pros:**

- Fast development with hot module replacement
- TypeScript support out of the box
- React Router v7 provides routing infrastructure for shareable URLs with search parameters
- Tailwind CSS for rapid, modern styling
- Simple build process for static hosting
- Great DX with file-based routing

**Alternatives Considered:**

1. **Vanilla HTML/CSS/TypeScript**
   - ✅ Simplest, no framework overhead
   - ❌ More boilerplate for state management
   - ❌ Less structured for future growth

2. **Next.js**
   - ✅ Great DX, built-in routing
   - ❌ Overkill for this project (no SSR needed, no backend)
   - ❌ Heavier build

---

## Data Format: TypeScript File vs JSON

**Date:** Project initialization  
**Status:** ✅ TypeScript file adopted

### Context

Needed to decide how to store the audio library data: as a TypeScript file or a JSON file.

### Decision

Use TypeScript file (`data/library.ts`) with exported array

### Rationale

**TypeScript file benefits:**

- ✅ Type-safe at compile time
- ✅ Direct import, no fetch needed
- ✅ Better DX in the repository
- ✅ Can include comments in the data
- ✅ IDE autocomplete when editing data

**JSON file drawbacks:**

- ❌ No compile-time type safety
- ❌ Needs runtime validation
- ❌ No comments support

**Note:** Since updates happen via PR anyway, contributors will be familiar with the repo structure. The type safety and DX benefits outweigh the small learning curve. If needed later, we can easily migrate to JSON.

---

## Language: Hungarian

**Date:** Phase 4  
**Status:** ✅ Implemented

### Context

Primary user is Hungarian-speaking, application is for personal use.

### Decision

Use Hungarian language throughout the UI (button labels, messages, etc.)

### Rationale

Better user experience for the target user. Since this is a single-user application, localization isn't needed.

---

## Search Behavior: Button Click vs Search-as-you-type

**Date:** Project planning  
**Status:** ✅ Button click adopted

### Context

Needed to decide when to trigger the search.

### Decision

Search triggers only on button click or Enter key press, not on every keystroke.

### Rationale

- Simpler implementation for MVP
- Better performance with potentially large datasets
- More intentional user interaction
- Can be changed to search-as-you-type later if desired

---

## Data Structure: Flat Array vs. Hierarchical

**Date:** 2026-02-16  
**Status:** ✅ Adopted

### Context

As the dataset grows, there was a consideration to move from a flat array of elements to a hierarchical structure (e.g., Talks containing an array of Topics) to avoid data duplication (like `youtubeLink` or `talkTitle`).

### Decision

Maintain the flat `AudioLibSearchElement[]` structure.

### Rationale

**Pros:**

- **Search Performance:** Flat filtering is the most efficient and straightforward approach in JavaScript.
- **Implementation Simplicity:** Search results are inherently linear. A flat structure avoids the complexity of nested loops or runtime "flattening" to display results.
- **Memory & Compression:** Modern JS engines use string interning to minimize duplication overhead in RAM. For transfer, GZIP/Brotli compression handles repeating strings extremely effectively.
- **Compatibility:** Works seamlessly with standard pagination, sorting, and UI virtualization patterns.

**Cons:**

- Slightly higher memory usage in development before compression.
- More manual editing if fields like URLs change frequently (mitigated by bulk find-and-replace).

**Alternatives Considered:**

- **Hierarchical JSON:** Rejected due to increased search complexity and the fact that search results would need to be flattened anyway to be usable in a list-based UI.

---

## Template for Future Decisions

When adding a new decision, use this template:

```markdown
## [Decision Title]

**Date:** YYYY-MM-DD  
**Status:** ✅ Adopted / ⏳ Proposed / ❌ Rejected / 🔄 Superseded

### Context

[What problem needed solving? What constraints existed?]

### Decision

[What was decided?]

### Rationale

[Why this decision? What are the tradeoffs?]

**Pros:**

- [Benefit 1]
- [Benefit 2]

**Cons:**

- [Drawback 1]
- [Drawback 2]

**Alternatives Considered:**

- [Alternative 1 and why it wasn't chosen]
- [Alternative 2 and why it wasn't chosen]
```
