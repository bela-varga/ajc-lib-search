import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useSearch, ITEMS_PER_PAGE } from './useSearch';
import { useSearchParams } from 'react-router';

// Mock react-router
vi.mock('react-router', () => ({
  useSearchParams: vi.fn(),
}));

// Mock the data source
vi.mock('../../data/AJCaudioLibraryList', () => ({
  audioLibraryList: Array.from({ length: 25 }, (_, i) => ({
    id: `${100 + i}`, // Using IDs that indicate order
    talkTitle: `Talk ${i}`,
    topicTitle: `Topic ${i}`,
    description: `Description ${i}`,
    tags: ['tag'],
  })),
}));

describe('useSearch', () => {
  const setSearchParamsMock = vi.fn();
  const searchParamsGetAllMock = vi.fn();
  const searchParamsGetMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as any).mockReturnValue([
      {
        getAll: searchParamsGetAllMock,
        get: searchParamsGetMock,
      },
      setSearchParamsMock,
    ]);
  });

  it('initializes with empty results and page 1', () => {
    searchParamsGetAllMock.mockReturnValue([]);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());
    expect(result.current.results).toEqual([]);
    expect(result.current.paginatedResults).toEqual([]);
    expect(result.current.hasSearched).toBe(false);
    expect(result.current.searchQueries).toEqual([]);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(0);
    expect(result.current.totalResults).toBe(0);
    expect(result.current.itemsPerPage).toBe(ITEMS_PER_PAGE);
  });

  it('performs search and updates pagination info', () => {
    // Mock user searching for "tag" which should match all mocked items
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    expect(result.current.searchQueries).toEqual(['tag']);
    expect(result.current.hasSearched).toBe(true);

    // We mocked 25 items, all should match "tag" (case insensitive)
    expect(result.current.results.length).toBe(25);
    expect(result.current.totalResults).toBe(25);

    // Paginated results should be ITEMS_PER_PAGE (10)
    expect(result.current.paginatedResults.length).toBe(ITEMS_PER_PAGE);

    // Total pages should be ceil(25/10) = 3
    expect(result.current.totalPages).toBe(3);
  });

  it('defaults to newest first (reversed id order)', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    // Original list was 100, 101, ..., 124
    // Newest first should be 124, 123, ...
    expect(result.current.results[0].id).toBe('124');
    expect(result.current.results[24].id).toBe('100');
    expect(result.current.currentSort).toBe('newest');
  });

  it('supports oldest first sorting', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'sort') return 'oldest';
      return null;
    });

    const { result } = renderHook(() => useSearch());

    expect(result.current.results[0].id).toBe('100');
    expect(result.current.results[24].id).toBe('124');
    expect(result.current.currentSort).toBe('oldest');
  });

  it('handleSortChange updates URL and resets page', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSortChange('oldest');
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams([['page', '2']]);
    updateFn(params);
    expect(params.get('sort')).toBe('oldest');
    expect(params.has('page')).toBe(false);
  });

  it('handleSortChange removes sort param if set to newest (default)', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockReturnValue('oldest');

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSortChange('newest');
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams([['sort', 'oldest']]);
    updateFn(params);
    expect(params.has('sort')).toBe(false);
  });

  it('narrows results with multiple queries', () => {
    searchParamsGetAllMock.mockReturnValue(['tag', 'Talk 1']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    // "Talk 1" matches: Talk 1, Talk 10, Talk 11, ..., Talk 19 (11 items)
    expect(result.current.results.length).toBe(11);
    expect(result.current.hasSearched).toBe(true);
  });

  it('updates page when setPage is used', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.setPage(2);
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams();
    updateFn(params);
    expect(params.get('page')).toBe('2');
  });

  it('handleSearch appends a new query and resets page', () => {
    searchParamsGetAllMock.mockReturnValue([]);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('new query');
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams();
    params.set('page', '5');
    updateFn(params);
    // Should have appended q
    expect(params.getAll('q')).toContain('new query');
    // Page should be reset
    expect(params.has('page')).toBe(false);
  });

  it('handleSearch does not add duplicate queries', () => {
    searchParamsGetAllMock.mockReturnValue(['existing']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('existing');
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams([['q', 'existing']]);
    updateFn(params);
    // Should still only have one 'existing'
    expect(params.getAll('q')).toEqual(['existing']);
  });

  it('handleSearch ignores empty or whitespace-only strings', () => {
    searchParamsGetAllMock.mockReturnValue([]);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('   ');
    });

    expect(setSearchParamsMock).not.toHaveBeenCalled();
  });

  it('removeQuery removes one query and keeps the rest', () => {
    searchParamsGetAllMock.mockReturnValue(['first', 'second']);
    searchParamsGetMock.mockReturnValue(null);

    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.removeQuery('first');
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams([
      ['q', 'first'],
      ['q', 'second'],
      ['page', '2'],
    ]);
    updateFn(params);
    expect(params.getAll('q')).toEqual(['second']);
    expect(params.has('page')).toBe(false); // page reset
  });

  it('respects page parameter from URL', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockImplementation((key: string) => {
      if (key === 'page') return '2';
      return null;
    });

    const { result } = renderHook(() => useSearch());
    expect(result.current.currentPage).toBe(2);

    // Page 2 should have 10 items (items 10-19)
    expect(result.current.paginatedResults.length).toBe(ITEMS_PER_PAGE);
  });

  it('handles last page correctly', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockImplementation((key: string) => {
      if (key === 'page') return '3';
      return null;
    });

    const { result } = renderHook(() => useSearch());
    expect(result.current.currentPage).toBe(3);

    // Page 3 should have 5 items (items 20-24)
    expect(result.current.paginatedResults.length).toBe(5);
  });

  it('clamps page to totalPages if page param is too high', () => {
    searchParamsGetAllMock.mockReturnValue(['tag']);
    searchParamsGetMock.mockImplementation((key: string) => {
      if (key === 'page') return '100';
      return null;
    });

    const { result } = renderHook(() => useSearch());

    // Should be clamped to max pages (3)
    expect(result.current.currentPage).toBe(3);
    expect(result.current.totalPages).toBe(3);

    // Should return results for the last page
    expect(result.current.paginatedResults.length).toBe(5);
  });
});
