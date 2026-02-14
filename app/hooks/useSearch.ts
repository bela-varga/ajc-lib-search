import { useCallback } from 'react';
import { useSearchParams } from 'react-router';
import type { AudioLibSearchElement } from '../types/library.types';
import { searchLibrary } from '../utils/searchEngine';
import { audioLibraryList } from '../../data/AJCaudioLibraryList';

interface UseSearchResult {
  results: AudioLibSearchElement[];
  hasSearched: boolean;
  handleSearch: (query: string) => void;
  searchQuery: string;
}

export function useSearch(): UseSearchResult {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';

  // Derived state - no need for useEffect
  const results = query ? searchLibrary(audioLibraryList, query) : [];
  const hasSearched = !!query;

  const handleSearch = useCallback(
    (newQuery: string) => {
      if (newQuery) {
        setSearchParams((prev) => {
          prev.set('q', newQuery);
          return prev;
        });
      } else {
        setSearchParams((prev) => {
          prev.delete('q');
          return prev;
        });
      }
    },
    [setSearchParams],
  );

  return {
    results,
    hasSearched,
    handleSearch,
    searchQuery: query,
  };
}
