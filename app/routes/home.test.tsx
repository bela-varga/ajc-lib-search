import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router';
import Home, { meta } from './home';
import { useSearch } from '~/hooks/useSearch';

vi.mock('~/hooks/useSearch', () => ({
  useSearch: vi.fn(),
}));

describe('Home route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderHome = () => {
    return render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  };

  it('has correct meta tags', () => {
    const metaTags = meta();
    expect(metaTags).toEqual(
      expect.arrayContaining([
        { title: 'A.J. Christian "Könyvtár" Kereső' },
        {
          name: 'description',
          content: 'Keress A.J. Christian youtube videóiban',
        },
      ]),
    );
  });

  it('renders initial state correctly (not searched)', () => {
    (useSearch as any).mockReturnValue({
      results: [],
      paginatedResults: [],
      hasSearched: false,
      handleSearch: vi.fn(),
      searchQuery: '',
      currentPage: 1,
      totalPages: 0,
      setPage: vi.fn(),
      itemsPerPage: 10,
      totalResults: 0,
    });

    renderHome();

    expect(
      screen.getByText('A.J. Christian "Könyvtár" Kereső'),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();

    // ResultsList should not be present
    expect(screen.queryByText('Nincs találat.')).not.toBeInTheDocument();
    expect(screen.queryByText(/találat/)).not.toBeInTheDocument();
  });

  it('renders results state correctly', () => {
    (useSearch as any).mockReturnValue({
      results: [
        {
          id: '1',
          talkTitle: 'Test Result',
          description: 'Desc',
          tags: [],
          timestamp: 0,
        },
      ],
      paginatedResults: [
        {
          id: '1',
          talkTitle: 'Test Result',
          description: 'Desc',
          tags: [],
          timestamp: 0,
        },
      ],
      hasSearched: true,
      handleSearch: vi.fn(),
      searchQuery: 'test',
      currentPage: 1,
      totalPages: 1,
      setPage: vi.fn(),
      itemsPerPage: 10,
      totalResults: 1,
    });

    renderHome();

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByText('Test Result')).toBeInTheDocument();
    // Assuming ResultsList shows "1 találat" based on results.length
    // We should check how ResultsList behaves. It usually takes filtered results.
  });

  it('renders pagination when multiple pages exist', () => {
    (useSearch as any).mockReturnValue({
      results: Array(15).fill({}),
      paginatedResults: Array(10).fill({ id: '1', talkTitle: 'Hit' }),
      hasSearched: true,
      handleSearch: vi.fn(),
      searchQuery: 'test',
      currentPage: 1,
      totalPages: 2,
      setPage: vi.fn(),
      itemsPerPage: 10,
      totalResults: 15,
    });

    renderHome();

    // Should be 2 sets of pagination controls
    expect(screen.getAllByText('Előző')).toHaveLength(2);
    expect(screen.getAllByText('Következő')).toHaveLength(2);
    expect(screen.getAllByText('1')).toHaveLength(2);
    expect(screen.getAllByText('2')).toHaveLength(2);
  });

  it('handles search interaction', () => {
    const handleSearchMock = vi.fn();
    (useSearch as any).mockReturnValue({
      results: [],
      paginatedResults: [],
      hasSearched: false,
      handleSearch: handleSearchMock,
      searchQuery: '',
      currentPage: 1,
      totalPages: 0,
      setPage: vi.fn(),
      itemsPerPage: 10,
    });

    renderHome();

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: 'integration test' } });
    fireEvent.click(button);

    expect(handleSearchMock).toHaveBeenCalledWith('integration test');
  });
});
