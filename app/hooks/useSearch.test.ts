import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useSearch } from './useSearch';
import { searchLibrary } from '../utils/searchEngine';
import { audioLibraryList } from '../../data/AJCaudioLibraryList';

// Mock the search engine
vi.mock('../utils/searchEngine', () => ({
  searchLibrary: vi.fn(),
}));

// Mock the data
vi.mock('../../data/AJCaudioLibraryList', () => ({
  audioLibraryList: ['mock-data'], // Just a placeholder, as we check checking referential equality or just passing it through
}));

describe('useSearch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes with default state', () => {
    const { result } = renderHook(() => useSearch());

    expect(result.current.results).toEqual([]);
    expect(result.current.hasSearched).toBe(false);
    expect(result.current.searchQuery).toBe('');
  });

  it('performs search and updates state', () => {
    const mockResults = [{ id: '1', title: 'Test', description: 'desc', tags: [], timestamp: 0 }];
    (searchLibrary as any).mockReturnValue(mockResults);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('test');
    });

    // Verify searchLibrary was called with the imported data list and the query
    expect(searchLibrary).toHaveBeenCalledWith(audioLibraryList, 'test');
    
    // Verify state updates
    expect(result.current.results).toEqual(mockResults);
    expect(result.current.hasSearched).toBe(true);
    expect(result.current.searchQuery).toBe('test');
  });

  it('updates hasSearched even if results are empty', () => {
    (searchLibrary as any).mockReturnValue([]);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('nonexistent');
    });

    expect(searchLibrary).toHaveBeenCalledWith(audioLibraryList, 'nonexistent');
    expect(result.current.results).toEqual([]);
    expect(result.current.hasSearched).toBe(true);
    expect(result.current.searchQuery).toBe('nonexistent');
  });
});
