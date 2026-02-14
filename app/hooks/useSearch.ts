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
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  paginatedResults: AudioLibSearchElement[];
  setPage: (page: number) => void;
  itemsPerPage: number;
  totalResults: number;
}

export function useSearch(): UseSearchResult {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  const pageParam = searchParams.get('page');

  // Derived state - no need for useEffect
  const results = query ? searchLibrary(audioLibraryList, query) : [];
  const hasSearched = !!query;
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
      if (newQuery) {
        setSearchParams((prev) => {
          prev.set('q', newQuery);
          prev.delete('page'); // Reset to page 1 on new search
          return prev;
        });
      } else {
        setSearchParams((prev) => {
          prev.delete('q');
          prev.delete('page');
          return prev;
        });
      }
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
    searchQuery: query,
    currentPage: validPage,
    totalResults,
    totalPages,
    paginatedResults,
    setPage,
    itemsPerPage: ITEMS_PER_PAGE,
  };
}
