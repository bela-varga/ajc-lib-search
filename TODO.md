# TODO

List of ideas, improvements, and tasks to consider for the project.

Note that the content of this file is more of a list of ideas, improvements, and tasks to consider for this project.
Any item here may or may not be implemented.

---

## Possible Future Enhancements

- [x] Add toggle for search order (for now order by video id: asc, desc)
- [ ] When we click on a talk title, it should open that talk in a new tab
- [x] Add "search in search in search" (e.g. search for "halál" in the search results)
  - [x] discover options to do this on multiple levels
  - [x] implement SearchEngine to support this
  - [x] implement UI to support this
- [ ] Home page upgrades
  - [ ] add "Legutóbbi videók" section with 10 latest videos (teljes videó)
  - [ ] add "Véletlenszerá ajánló" section - or change Start Here part to show 5-6 random tag from 15-20 tags (note: always show "teljes videó" tag)
- [ ] Update AJC audio library with more data
- [ ] Ask AI to go through all audio library elements (maybe in batch) and if there is only 'teljes videó' tag, add more tags based on topic title
- [ ] Check all tags and make them consistent (like 'gyerekek', 'gyermek' -> 'gyerek' and check for each other tag)
  - [ ] grep and list all the tags from the json
  - [ ] check what changes should be made
  - [ ] make the changes and document them in chatGPT_prompt_base.md so the same mistake would not be repeated in future changes
  - [ ] or... write a script that checks for the changes that should be changed and fix them automagically?
- [ ] Give the whole json to an AI and ask to reconsider the tags to be better
- [ ] Add search filters
  - [ ] Add title search
  - [ ] Add description search
  - [ ] Add tags search
- [ ] Add copy link functionality
  - [x] Add search query to URL
  - [ ] Add filters to URL
  - [x] Add pagination to URL
  - [x] Add sorting (newest/oldest first)URL
  - [ ] Add 'Copy link' button
- [ ] Fuzzy search integration (Fuse.js)
- [ ] Favorites/bookmarks (localStorage)
- [ ] Keyboard shortcuts (/ to focus, arrows to navigate)
- [ ] Dark mode toggle
- [ ] Search history
- [ ] Virtual scrolling for large libraries
- [ ] dynamic import of library data

---

## Possible User Experience Improvements

- [ ] **Enhance Empty State**
  - Show suggestions or a "clear search" option when no results are found.
- [ ] **Search Interaction**
  - Evaluate debounced "search-as-you-type" for better responsiveness (vs current "Enter" only).
- [ ] **Search Filtering**
  - Add the ability to filter results by tags. (click tag to filter)
- [ ] **Search Sorting**
  - Add the ability to sort results by relevance, title A-Z, or date.
- [ ] **Search Highlighting**
  - Add the ability to highlight matching search terms in results.
- [ ] **Search Suggestions**
  - Add the ability to show search suggestions - based on previous searches or based on the library data.

---

## Notes

- Use `[ ]` for incomplete tasks
- Use `[x]` for completed tasks
- Keep this file lightweight and focused on actionable items
- Move completed items to CHANGELOG.md when done
