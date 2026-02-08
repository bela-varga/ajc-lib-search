import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home, { meta } from './home';
import { useSearch } from '~/hooks/useSearch';

vi.mock('~/hooks/useSearch', () => ({
  useSearch: vi.fn(),
}));

describe('Home route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('has correct meta tags', () => {
    const metaTags = meta();
    expect(metaTags).toEqual(
      expect.arrayContaining([
        { title: 'A.J. Christian "Könyvtár" Kereső' },
        { name: 'description', content: 'Keress A.J. Christian youtube videóiban' },
      ])
    );
  });

  it('renders initial state correctly (not searched)', () => {
    (useSearch as any).mockReturnValue({
      results: [],
      hasSearched: false,
      handleSearch: vi.fn(),
      searchQuery: '',
    });

    render(<Home />);

    expect(screen.getByText('A.J. Christian "Könyvtár" Kereső')).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
    
    // ResultsList should not be present
    expect(screen.queryByText('Nincs találat.')).not.toBeInTheDocument();
    expect(screen.queryByText(/találat/)).not.toBeInTheDocument();
  });

  it('renders results state correctly', () => {
    (useSearch as any).mockReturnValue({
      results: [{ id: '1', talkTitle: 'Test Result', description: 'Desc', tags: [], timestamp: 0 }],
      hasSearched: true,
      handleSearch: vi.fn(),
      searchQuery: 'test',
    });

    render(<Home />);

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByText('Test Result')).toBeInTheDocument();
    expect(screen.getByText('1 találat')).toBeInTheDocument();
  });

  it('handles search interaction', () => {
    const handleSearchMock = vi.fn();
    (useSearch as any).mockReturnValue({
      results: [],
      hasSearched: false,
      handleSearch: handleSearchMock,
      searchQuery: '',
    });

    render(<Home />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: 'integration test' } });
    fireEvent.click(button);

    expect(handleSearchMock).toHaveBeenCalledWith('integration test');
  });
});
