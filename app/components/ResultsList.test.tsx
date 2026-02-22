import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ResultsList from './ResultsList';
import type { AudioLibSearchElement } from '../types/library.types';

vi.mock('./ResultItem', () => ({
  default: ({ talkTitle }: { talkTitle: string }) => (
    <div data-testid="result-item">{talkTitle}</div>
  ),
}));

const mockResults: AudioLibSearchElement[] = [
  {
    id: '1',
    talkTitle: 'Item 1',
    description: 'Desc 1',
    tags: ['tag1'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=1',
    spotifyLink: 'https://www.spotify.com/track/1',
  },
  {
    id: '2',
    talkTitle: 'Item 2',
    description: 'Desc 2',
    tags: ['tag2'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=2',
    spotifyLink: 'https://www.spotify.com/track/2',
  },
];

describe('ResultsList', () => {
  it('renders "Nincs találat" when results are empty', () => {
    render(<ResultsList results={[]} totalResults={0} />);
    expect(screen.getByText('Nincs találat.')).toBeInTheDocument();
  });

  it('renders results (count and items) when results exist', () => {
    render(
      <ResultsList results={mockResults} totalResults={mockResults.length} />,
    );

    // Check count text
    expect(screen.getByText('2 találat')).toBeInTheDocument();

    // Check items rendered (mocked)
    const items = screen.getAllByTestId('result-item');
    expect(items).toHaveLength(2);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders sorting dropdown and calls onSortChange', () => {
    const onSortChange = vi.fn();
    render(
      <ResultsList
        results={mockResults}
        totalResults={2}
        currentSort="newest"
        onSortChange={onSortChange}
      />,
    );

    const select = screen.getByLabelText('Rendezés:');
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('newest');

    fireEvent.change(select, { target: { value: 'oldest' } });
    expect(onSortChange).toHaveBeenCalledWith('oldest');
  });

  it('renders correct singular/plural count text (if specialized)', () => {
    render(<ResultsList results={[mockResults[0]]} totalResults={1} />);
    expect(screen.getByText('1 találat')).toBeInTheDocument();
  });
});
