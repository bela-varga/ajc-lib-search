import { useState, useCallback } from "react";
import type { AudioLibSearchElement } from "../types/library.types";
import { searchLibrary } from "../utils/searchEngine";
import { audioLibraryList } from "../../data/dummy.library";

interface UseSearchResult {
  results: AudioLibSearchElement[];
  hasSearched: boolean;
  handleSearch: (query: string) => void;
  searchQuery: string;
}

export function useSearch(): UseSearchResult {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<AudioLibSearchElement[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);

    // Perform search
    const searchResults = searchLibrary(audioLibraryList, query);
    setResults(searchResults);
    setHasSearched(true);
  }, []);

  return {
    results,
    hasSearched,
    handleSearch,
    searchQuery
  };
}
