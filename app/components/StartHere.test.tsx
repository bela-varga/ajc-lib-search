import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { StartHere, PINNED_TAG, SUGGESTED_TAGS } from './StartHere';

describe('StartHere component', () => {
  it('renders the "Kezdd itt!" prompt text', () => {
    render(<StartHere onSearch={vi.fn()} />);
    expect(
      screen.getByText('Nem tudod mit keress? Kezdd itt!'),
    ).toBeInTheDocument();
  });

  it('always renders "teljes videó" as the first chip', () => {
    render(<StartHere onSearch={vi.fn()} />);
    const chips = screen.getAllByRole('button');
    expect(chips[0]).toHaveTextContent('teljes videó');
  });

  it('renders exactly 6 chips (1 pinned + 5 random)', () => {
    render(<StartHere onSearch={vi.fn()} />);
    const chips = screen.getAllByRole('button');
    expect(chips).toHaveLength(6);
  });

  it('all rendered chips are from the known tag pool (including teljes videó)', () => {
    render(<StartHere onSearch={vi.fn()} />);
    const knownTags = [PINNED_TAG, ...SUGGESTED_TAGS];
    const chips = screen.getAllByRole('button');
    for (const chip of chips) {
      expect(knownTags).toContain(chip.textContent);
    }
  });

  it('calls onSearch with the correct tag when a chip is clicked', () => {
    const handleSearch = vi.fn();
    render(<StartHere onSearch={handleSearch} />);

    // The first chip is always 'teljes videó'
    fireEvent.click(screen.getByRole('button', { name: 'teljes videó' }));
    expect(handleSearch).toHaveBeenCalledWith('teljes videó');
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it('calls onSearch with the label of whichever random chip is clicked', () => {
    const handleSearch = vi.fn();
    render(<StartHere onSearch={handleSearch} />);

    const chips = screen.getAllByRole('button');
    // Click the second chip (first random one)
    const randomChipLabel = chips[1].textContent ?? '';
    fireEvent.click(chips[1]);
    expect(handleSearch).toHaveBeenCalledWith(randomChipLabel);
  });

  it('renders no duplicate chips', () => {
    render(<StartHere onSearch={vi.fn()} />);
    const chips = screen.getAllByRole('button');
    const labels = chips.map((c) => c.textContent);
    const uniqueLabels = new Set(labels);
    expect(uniqueLabels.size).toBe(labels.length);
  });
});
