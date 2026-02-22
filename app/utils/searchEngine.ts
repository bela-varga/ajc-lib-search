import type { AudioLibSearchElement } from '../types/library.types';

/**
 * Searches the audio library for items matching the given query.
 * The search is case-insensitive and checks the title, description, and tags.
 * There can be multiple search queries, we narrow down the results with each query.
 *
 * @param library - The array of audio library items to search through.
 * @param queries - The search strings, an array of strings.
 * @returns An array of items that match the query in title, description, or tags.
 *          Returns an empty array if the queries are empty or only whitespace.
 */
export function searchLibrary(
  library: AudioLibSearchElement[],
  queries: string[],
): AudioLibSearchElement[] {
  const normalizedQueries = queries.reduce((acc, q) => {
    const normalizedQ = q.trim().toLowerCase();
    if (normalizedQ) {
      acc.push(normalizedQ);
    }
    return acc;
  }, [] as string[]);

  if (!normalizedQueries.length) {
    return [];
  }

  return normalizedQueries.reduce((acc, query) => {
    return filterLibraryByQuery(acc, query);
  }, library);
}

function filterLibraryByQuery(library: AudioLibSearchElement[], query: string) {
  return library.filter((item) => {
    const talkTitleMatch = item.talkTitle?.toLowerCase().includes(query);
    const topicTitleMatch = item.topicTitle?.toLowerCase().includes(query);
    const descriptionMatch = item.description?.toLowerCase().includes(query);
    const tagMatch = item.tags?.some((tag) =>
      tag.toLowerCase().includes(query),
    );

    return talkTitleMatch || topicTitleMatch || descriptionMatch || tagMatch;
  });
}
