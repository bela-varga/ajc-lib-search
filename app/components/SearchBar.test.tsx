import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders input and button', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    expect(screen.getByRole('textbox', { name: /Keresés/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Keresés/i })).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    fireEvent.change(input, { target: { value: 'test query' } });

    expect(input).toHaveValue('test query');
  });

  it('calls onSearch with input value on submit', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith('search term');
  });

  it('calls onSearch with trimmed value', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: '  spaced term  ' } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith('spaced term');
  });

  it('does not call onSearch if input is empty', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const button = screen.getByRole('button', { name: /Keresés/i });
    fireEvent.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if input is whitespace only', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const input = screen.getByRole('textbox', { name: /Keresés/i });
    const button = screen.getByRole('button', { name: /Keresés/i });

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    expect(onSearch).not.toHaveBeenCalled();
  });
});
