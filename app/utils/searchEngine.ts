import type { AudioLibSearchElement } from '../types/library.types';

/**
 * Searches the audio library for items matching the given query.
 * The search is case-insensitive and checks the title, description, and tags.
 *
 * @param library - The array of audio library items to search through.
 * @param query - The search string.
 * @returns An array of items that match the query in title, description, or tags.
 *          Returns an empty array if the query is empty or only whitespace.
 *
 * @example
 * // Returns items with "jazz" in title, description, or tags
 * searchLibrary(library, "jazz");
 *
 * @example
 * // Case-insensitive: returns same as above
 * searchLibrary(library, "JAZZ");
 */
export function searchLibrary(
  library: AudioLibSearchElement[],
  query: string,
): AudioLibSearchElement[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return library.filter((item) => {
    const talkTitleMatch = item.talkTitle.toLowerCase().includes(normalizedQuery);
    const topicTitleMatch = item.topicTitle
      ?.toLowerCase()
      .includes(normalizedQuery);
    const descriptionMatch = item.description
      .toLowerCase()
      .includes(normalizedQuery);
    const tagMatch = item.tags.some((tag) =>
      tag.toLowerCase().includes(normalizedQuery),
    );

    return (
      talkTitleMatch || topicTitleMatch || descriptionMatch || tagMatch
    );
  });
}
