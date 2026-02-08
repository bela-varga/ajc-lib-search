# TODO

Quick list of ideas, improvements, and tasks to consider for the project.

---

## Immediate Tasks

- [ ] **Refactor AudioLibSearchElement: rename `title` → `talkTitle` and add `topicTitle`**
  
  **Goal**: Reflect that content is structured as "előadások" (talks/lectures) with main titles and optional topic sections
  
  - [x] **Phase 1: Type Definition** (`app/types/library.types.ts`)
    - [x] Rename `title: string` to `talkTitle: string`
    - [x] Add `topicTitle?: string` field
    - [x] Update JSDoc comments if needed, to clarify the semantic meaning
  
  - [x] **Phase 2: Sample Data** (`data/dummy.library.ts`)
    - [x] Rename all `title` fields to `talkTitle` in the data array
    - [x] Consider adding `topicTitle` to 2-3 entries as examples
  
  - [x] **Phase 3: real Data** (`app/data/AJCaudioLibraryList.ts`)
    - [x] Update all test mock objects to use `talkTitle` instead of `title`
    - [x] Add optional `topicTitle` examples for thorough testing
    - [x] human to check the data and correct any errors
  
  - [x] **Phase 4: Search Engine** (`app/utils/searchEngine.ts`)
    - [x] Update line 31: `item.title` → `item.talkTitle`
    - [x] Update JSDoc comments (lines 5, 9, 13) to reference `talkTitle`
    - [x] Add `topicTitle` to search logic similar to `title`
  
  - [x] **Phase 5: UI Components**
    - [x] `app/components/ResultItem.tsx`
      - [x] Update destructured prop from `title` to `talkTitle` (line 5)
      - [x] Update display to show `{talkTitle}` (line 30)
      - [x] **Design Decision**: How to display `topicTitle`?
        - Option A: Below talkTitle in smaller, muted text
        - Option B: Inline with separator (e.g., "Talk Title | Topic Title")
        - Option C: Only show if present, as a badge/chip
      - [ ] Implement chosen design
    - [ ] `app/components/ResultsList.tsx`
      - [ ] Verify it passes correct props to `ResultItem`
  
  - [ ] **Phase 6: Test Files**
    - [ ] `app/utils/searchEngine.test.ts`
      - [ ] Update all mock objects: `title` → `talkTitle` (lines 8, 15, 22, 29, 36)
      - [ ] Update test name if needed (line 52: "should match title")
      - [ ] Add test for `topicTitle` search if implemented
    - [ ] `app/components/ResultItem.test.tsx`
      - [ ] Update mock data: `title` → `talkTitle` (line 8)
      - [ ] Update test description if needed (line 17)
      - [ ] Add test case for `topicTitle` rendering
    - [ ] `app/components/ResultsList.test.tsx`
      - [ ] Update mock implementation (line 7)
      - [ ] Update mock data objects (lines 13, 20)
    - [ ] `app/hooks/useSearch.test.ts`
      - [ ] Update mock results (line 29)
    - [ ] `app/routes/home.test.tsx`
      - [ ] Update mock result (line 45)
  
  - [ ] **Phase 7: Verification**
    - [ ] Run all tests: `npm test`
    - [ ] Visual check: Run dev server and verify UI displays correctly
    - [ ] Search functionality: Test that search still works with `talkTitle`
    - [ ] Test `topicTitle` display (if added to sample data)

---

## Meta / Documentation

- [ ] **Define relationship between TODO.md and plan.md**
  - Consider: Should TODO.md be for quick ideas/future improvements?
  - Consider: Should plan.md remain the structured implementation roadmap?
  - Decide: How should AI assistants handle both files?
  - Options:
    - TODO.md = unstructured ideas, backlog, nice-to-haves
    - plan.md = structured phases, current implementation focus
    - OR consolidate into one file?
  - Document the decision in DECISIONS.md once settled

---

## Future Enhancements

(Ideas from plan.md "Probable Future Upgrades" section - consider moving them here)

- [ ] Highlight matching search terms in results
- [ ] Tag filtering (click tag to filter)
- [ ] Fuzzy search integration (Fuse.js)
- [ ] Sorting options (relevance, title A-Z, date)
- [ ] Favorites/bookmarks (localStorage)
- [ ] Export search results (JSON/CSV)
- [ ] Keyboard shortcuts (/ to focus, arrows to navigate)
- [ ] Dark mode toggle
- [ ] Search history
- [ ] Virtual scrolling for large libraries
- [ ] dynamic import of library data


---

## Accessibility Improvements

- [x] **Link Accessibility**
  - Add screen reader warnings or visual indicators for links opening in new tabs (`target="_blank"`).
  - Implemented via `ExternalLink` component.
- [ ] **Color Contrast**
  - Verify contrast for blue text elements in both light and dark modes.

## Testing & Reliability

- [ ] **Expand Test Coverage**
  - Add edge case tests to `searchEngine.test.ts` (empty queries, special chars).
  - Add unit tests for `ResultItem` to verify timestamp URL generation.

## User Experience

- [ ] **Enhance Empty State**
  - Show suggestions or a "clear search" option when no results are found.
- [ ] **Search Interaction**
  - Evaluate debounced "search-as-you-type" for better responsiveness (vs current "Enter" only).

---

## Notes

- Use `[ ]` for incomplete tasks
- Use `[x]` for completed tasks
- Keep this file lightweight and focused on actionable items
- Move completed items to CHANGELOG.md when done
