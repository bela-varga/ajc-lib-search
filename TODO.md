# TODO

Quick list of ideas, improvements, and tasks to consider for the project.

---

## Immediate Tasks

- [ ] **Add subtitle field to AudioLibSearchElement**
  - Update type definition in `app/types/library.types.ts`
  - Add `subtitle?: string` field
  - Rethink and redesign `ResultItem` component to accommodate subtitle
  - Consider layout: should subtitle be below title, or inline with smaller font?
  - Update sample data in `data/dummy.library.ts`

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
