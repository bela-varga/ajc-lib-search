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

  const defaultMock = {
    results: [],
    paginatedResults: [],
    hasSearched: false,
    handleSearch: vi.fn(),
    removeQuery: vi.fn(),
    searchQueries: [],
    currentPage: 1,
    totalPages: 0,
    setPage: vi.fn(),
    itemsPerPage: 10,
    totalResults: 0,
    currentSort: 'newest',
    handleSortChange: vi.fn(),
  };

  it('has correct meta tags', () => {
    const metaTags = meta();
    expect(metaTags).toEqual(
      expect.arrayContaining([
        { title: 'A. J. Christian "Könyvtár" Kereső' },
        {
          name: 'description',
          content: 'Keress A. J. Christian youtube videóiban',
        },
      ]),
    );
  });

  it('renders initial state correctly (not searched)', () => {
    (useSearch as any).mockReturnValue(defaultMock);

    renderHome();

    expect(
      screen.getByText('A. J. Christian "Könyvtár" Kereső'),
    ).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();

    // ResultsList should not be present
    expect(screen.queryByText('Nincs találat.')).not.toBeInTheDocument();
    expect(screen.queryByText(/találat/)).not.toBeInTheDocument();
  });

  it('renders "Start here" section when no search has been performed', () => {
    (useSearch as any).mockReturnValue(defaultMock);

    renderHome();

    expect(
      screen.getByText('Nem tudod mit keress? Kezdd itt!'),
    ).toBeInTheDocument();

    const tags = ['teljes videó', 'tudat', 'lélek', 'szeretet', 'halál'];
    tags.forEach((tag) => {
      expect(screen.getByRole('button', { name: tag })).toBeInTheDocument();
    });
  });

  it('calls handleSearch when a suggested tag is clicked', () => {
    const handleSearchMock = vi.fn();
    (useSearch as any).mockReturnValue({
      ...defaultMock,
      handleSearch: handleSearchMock,
    });

    renderHome();

    const tagButton = screen.getByRole('button', { name: 'tudat' });
    fireEvent.click(tagButton);

    expect(handleSearchMock).toHaveBeenCalledWith('tudat');
  });

  it('renders results state correctly', () => {
    (useSearch as any).mockReturnValue({
      ...defaultMock,
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
      searchQueries: ['test'],
      currentPage: 1,
      totalPages: 1,
      totalResults: 1,
    });

    renderHome();

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByText('Test Result')).toBeInTheDocument();
    expect(screen.getByLabelText('Rendezés:')).toBeInTheDocument();
  });

  it('renders pagination when multiple pages exist', () => {
    (useSearch as any).mockReturnValue({
      ...defaultMock,
      results: Array(15).fill({}),
      paginatedResults: Array(10).fill({ id: '1', talkTitle: 'Hit' }),
      hasSearched: true,
      searchQueries: ['test'],
      currentPage: 1,
      totalPages: 2,
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
      ...defaultMock,
      handleSearch: handleSearchMock,
    });

    renderHome();

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: 'integration test' } });
    fireEvent.click(button);

    expect(handleSearchMock).toHaveBeenCalledWith('integration test');
  });

  it('renders chips for active search queries', () => {
    (useSearch as any).mockReturnValue({
      ...defaultMock,
      hasSearched: true,
      searchQueries: ['halál', 'igazság'],
      paginatedResults: [],
      totalResults: 0,
    });

    renderHome();

    expect(screen.getByText('halál')).toBeInTheDocument();
    expect(screen.getByText('igazság')).toBeInTheDocument();
  });

  it('handles sort change interaction', () => {
    const handleSortChangeMock = vi.fn();
    (useSearch as any).mockReturnValue({
      ...defaultMock,
      hasSearched: true,
      searchQueries: ['test'],
      results: [{ id: '1', talkTitle: 'Hit' }],
      paginatedResults: [{ id: '1', talkTitle: 'Hit' }],
      totalResults: 1,
      handleSortChange: handleSortChangeMock,
    });

    renderHome();

    const select = screen.getByLabelText('Rendezés:');
    fireEvent.change(select, { target: { value: 'oldest' } });

    expect(handleSortChangeMock).toHaveBeenCalledWith('oldest');
  });
});
