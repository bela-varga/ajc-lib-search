import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useSearch } from './useSearch';
import { useSearchParams } from 'react-router';

// Mock react-router
vi.mock('react-router', () => ({
  useSearchParams: vi.fn(),
}));

describe('useSearch', () => {
  const setSearchParamsMock = vi.fn();
  const searchParamsGetMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useSearchParams as any).mockReturnValue([
      { get: searchParamsGetMock },
      setSearchParamsMock,
    ]);
  });

  it('initializes with empty results', () => {
    searchParamsGetMock.mockReturnValue(null);
    const { result } = renderHook(() => useSearch());
    expect(result.current.results).toEqual([]);
    expect(result.current.hasSearched).toBe(false);
    expect(result.current.searchQuery).toBe('');
  });

  it('performs search when handleSearch is called', () => {
    searchParamsGetMock.mockReturnValue(null);
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('test');
    });

    // It should update the URL
    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams();
    updateFn(params);
    expect(params.get('q')).toBe('test');
  });

  it('performs search when URL has query parameter', () => {
    searchParamsGetMock.mockReturnValue('budapest');
    const { result } = renderHook(() => useSearch());

    expect(result.current.searchQuery).toBe('budapest');
    expect(result.current.hasSearched).toBe(true);
    // Should have results (assuming "budapest" matches something in the real or mock data)
    // Note: This relies on the real data since we import audioLibraryList.
    // If we wanted to be pure unit test, we'd mock searchLibrary too.
  });

  it('clears search when query is empty', () => {
    searchParamsGetMock.mockReturnValue(null);
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleSearch('');
    });

    // Should remove 'q' param
    expect(setSearchParamsMock).toHaveBeenCalled();
    const updateFn = setSearchParamsMock.mock.calls[0][0];
    const params = new URLSearchParams();
    params.set('q', 'old');
    updateFn(params);
    expect(params.has('q')).toBe(false);
  });
});
