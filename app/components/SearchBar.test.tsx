import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBar } from './SearchBar';

const defaultProps = {
  onSearch: vi.fn(),
  onRemoveQuery: vi.fn(),
  queries: [] as string[],
};

describe('SearchBar', () => {
  it('renders input and button', () => {
    render(<SearchBar {...defaultProps} />);

    expect(
      screen.getByRole('textbox', { name: /Keresés/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Keresés/i }),
    ).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<SearchBar {...defaultProps} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    fireEvent.change(input, { target: { value: 'test query' } });

    expect(input).toHaveValue('test query');
  });

  it('calls onSearch with input value on submit and clears input', () => {
    const onSearch = vi.fn();
    render(<SearchBar {...defaultProps} onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('search term');
    // Input should be cleared after submit
    expect(input).toHaveValue('');
  });

  it('calls onSearch with trimmed value', () => {
    const onSearch = vi.fn();
    render(<SearchBar {...defaultProps} onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: '  spaced term  ' } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith('spaced term');
  });

  it('does not call onSearch if input is empty', () => {
    const onSearch = vi.fn();
    render(<SearchBar {...defaultProps} onSearch={onSearch} />);

    const button = screen.getByRole('button', { name: /Keresés/i });
    fireEvent.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if input is whitespace only', () => {
    const onSearch = vi.fn();
    render(<SearchBar {...defaultProps} onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('renders a chip for each query in the queries prop', () => {
    render(<SearchBar {...defaultProps} queries={['halál', 'igazság']} />);

    expect(screen.getByText('halál')).toBeInTheDocument();
    expect(screen.getByText('igazság')).toBeInTheDocument();
  });

  it('does not render chip area when queries is empty', () => {
    render(<SearchBar {...defaultProps} queries={[]} />);

    expect(screen.queryByLabelText('Aktív keresések')).not.toBeInTheDocument();
  });

  it('calls onRemoveQuery with the correct query when × is clicked', () => {
    const onRemoveQuery = vi.fn();
    render(
      <SearchBar
        {...defaultProps}
        onRemoveQuery={onRemoveQuery}
        queries={['halál', 'igazság']}
      />,
    );

    const removeBtn = screen.getByRole('button', { name: 'Törlés: halál' });
    fireEvent.click(removeBtn);

    expect(onRemoveQuery).toHaveBeenCalledTimes(1);
    expect(onRemoveQuery).toHaveBeenCalledWith('halál');
  });
});
