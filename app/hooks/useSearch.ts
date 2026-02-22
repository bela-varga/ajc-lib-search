import { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import type { AudioLibSearchElement } from '../types/library.types';
import { searchLibrary } from '../utils/searchEngine';
import { audioLibraryList } from '../../data/AJCaudioLibraryList';

export const ITEMS_PER_PAGE = 10;

interface UseSearchResult {
  results: AudioLibSearchElement[];
  hasSearched: boolean;
  handleSearch: (query: string) => void;
  removeQuery: (query: string) => void;
  searchQueries: string[];
  currentPage: number;
  totalPages: number;
  paginatedResults: AudioLibSearchElement[];
  setPage: (page: number) => void;
  itemsPerPage: number;
  totalResults: number;
}

export function useSearch(): UseSearchResult {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQueries = searchParams.getAll('q');
  const pageParam = searchParams.get('page');

  // Derived state - no need for useEffect
  const results = searchQueries.length
    ? searchLibrary(audioLibraryList, searchQueries)
    : [];
  const hasSearched = searchQueries.length > 0;
  const totalResults = results.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const page = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;

  // Clamp page to valid range
  const validPage = Math.max(1, Math.min(page, totalPages || 1));

  const paginatedResults = results.slice(
    (validPage - 1) * ITEMS_PER_PAGE,
    validPage * ITEMS_PER_PAGE,
  );

  const handleSearch = useCallback(
    (newQuery: string) => {
      const trimmed = newQuery.trim();
      if (!trimmed) return;
      setSearchParams((prev) => {
        const existing = prev.getAll('q');
        // Deduplicate: do not add if already present (case-sensitive match)
        if (existing.includes(trimmed)) return prev;
        prev.append('q', trimmed);
        prev.delete('page'); // Reset to page 1 on new search
        return prev;
      });
    },
    [setSearchParams],
  );

  const removeQuery = useCallback(
    (queryToRemove: string) => {
      setSearchParams((prev) => {
        const existing = prev.getAll('q');
        // Rebuild params without the removed query
        prev.delete('q');
        existing
          .filter((q) => q !== queryToRemove)
          .forEach((q) => prev.append('q', q));
        prev.delete('page');
        return prev;
      });
    },
    [setSearchParams],
  );

  const setPage = useCallback(
    (newPage: number) => {
      setSearchParams((prev) => {
        // Clamp the new page value
        const clampedPage = Math.max(1, Math.min(newPage, totalPages || 1));
        prev.set('page', clampedPage.toString());
        return prev;
      });
    },
    [setSearchParams, totalPages],
  );

  return {
    results,
    hasSearched,
    handleSearch,
    removeQuery,
    searchQueries,
    currentPage: validPage,
    totalResults,
    totalPages,
    paginatedResults,
    setPage,
    itemsPerPage: ITEMS_PER_PAGE,
  };
}
