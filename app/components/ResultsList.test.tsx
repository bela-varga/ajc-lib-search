import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ResultsList from './ResultsList';
import type { AudioLibSearchElement } from '../types/library.types';

vi.mock('./ResultItem', () => ({
  default: ({ talkTitle }: { talkTitle: string }) => <div data-testid="result-item">{talkTitle}</div>,
}));

const mockResults: AudioLibSearchElement[] = [
  {
    id: '1',
    talkTitle: 'Item 1',
    description: 'Desc 1',
    tags: ['tag1'],
    timestamp: 0,
  },
  {
    id: '2',
    talkTitle: 'Item 2',
    description: 'Desc 2',
    tags: ['tag2'],
    timestamp: 0,
  },
];

describe('ResultsList', () => {
  it('renders "Nincs találat" when results are empty', () => {
    render(<ResultsList results={[]} />);
    expect(screen.getByText('Nincs találat.')).toBeInTheDocument();
  });

  it('renders results (count and items) when results exist', () => {
    render(<ResultsList results={mockResults} />);
    
    // Check count text
    expect(screen.getByText('2 találat')).toBeInTheDocument();
    
    // Check items rendered (mocked)
    const items = screen.getAllByTestId('result-item');
    expect(items).toHaveLength(2);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders correct singular/plural count text (if specialized)', () => {
     // Currently the component just says "{count} találat".
     // If it changes to "1 találat", "2 találat", it is generic.
     // Let's test 1 result.
     render(<ResultsList results={[mockResults[0]]} />);
     expect(screen.getByText('1 találat')).toBeInTheDocument();
  });
});
