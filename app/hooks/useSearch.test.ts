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
    id: `${i}`,
    talkTitle: `Talk ${i}`,
    topicTitle: `Topic ${i}`,
    description: `Description ${i}`,
    tags: ['tag'],
  })),
}));

describe('useSearch', () => {
  const setSearchParamsMock = vi.fn();
  const searchParamsGetMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as any).mockReturnValue([
      {
        get: searchParamsGetMock,
      },
      setSearchParamsMock,
    ]);
  });

  it('initializes with empty results and page 1', () => {
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'q') return null;
      if (key === 'page') return null;
      return null;
    });

    const { result } = renderHook(() => useSearch());
    expect(result.current.results).toEqual([]);
    expect(result.current.paginatedResults).toEqual([]);
    expect(result.current.hasSearched).toBe(false);
    expect(result.current.searchQuery).toBe('');
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(0);
    expect(result.current.totalResults).toBe(0);
    expect(result.current.itemsPerPage).toBe(ITEMS_PER_PAGE);
  });

  it('performs search and updates pagination info', () => {
    // Mock user searching for "Tag" which should match all mocked items
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'q') return 'Tag';
      return null;
    });

    const { result } = renderHook(() => useSearch());

    expect(result.current.searchQuery).toBe('Tag');
    expect(result.current.hasSearched).toBe(true);

    // We mocked 25 items, all should match "Tag" (case insensitive)
    expect(result.current.results.length).toBe(25);
    expect(result.current.totalResults).toBe(25);

    // Paginated results should be ITEMS_PER_PAGE (10)
    expect(result.current.paginatedResults.length).toBe(ITEMS_PER_PAGE);

    // Total pages should be ceil(25/10) = 3
    expect(result.current.totalPages).toBe(3);
  });

  it('updates page when setPage is used', () => {
    // Mock user searching for "Tag" so that totalPages > 1
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'q') return 'Tag';
      return null;
    });

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

  it('resets page to 1 when new search is performed', () => {
    searchParamsGetMock.mockReturnValue(null);
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('new query');
    });

    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams();
    // Simulate existing page param
    params.set('page', '5');
    updateFn(params);
    expect(params.get('q')).toBe('new query');
    expect(params.has('page')).toBe(false); // Should be deleted/reset
  });

  it('respects page parameter from URL', () => {
    // Mock user on page 2 searching for "Tag"
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'q') return 'Tag';
      if (key === 'page') return '2';
      return null;
    });

    const { result } = renderHook(() => useSearch());
    expect(result.current.currentPage).toBe(2);

    // Page 2 should have 10 items (items 10-19)
    expect(result.current.paginatedResults.length).toBe(ITEMS_PER_PAGE);
    // Verify content of first item on page 2 (index 10)
    expect(result.current.paginatedResults[0].id).toBe('10');
  });

  it('handles last page correctly', () => {
    // Mock user on page 3 searching for "Tag" (25 items total)
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'q') return 'Tag';
      if (key === 'page') return '3';
      return null;
    });

    const { result } = renderHook(() => useSearch());
    expect(result.current.currentPage).toBe(3);

    // Page 3 should have 5 items (items 20-24)
    expect(result.current.paginatedResults.length).toBe(5);
    expect(result.current.paginatedResults[0].id).toBe('20');
  });

  it('clamps page to totalPages if page param is too high', () => {
    // Mock user requesting page 100 but only 3 pages exist
    searchParamsGetMock.mockImplementation((key) => {
      if (key === 'q') return 'Tag';
      if (key === 'page') return '100';
      return null;
    });

    const { result } = renderHook(() => useSearch());

    // Should be clamped to max pages (3)
    expect(result.current.currentPage).toBe(3);
    expect(result.current.totalPages).toBe(3);

    // Should return results for the last page
    expect(result.current.paginatedResults.length).toBe(5);
    expect(result.current.paginatedResults[0].id).toBe('20');
  });
});
