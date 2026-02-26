import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Chip } from './Chip';

describe('Chip component', () => {
  it('renders the label correctly', () => {
    render(<Chip label="test tag" />);
    expect(screen.getByText('test tag')).toBeInTheDocument();
  });

  it('calls onClick with the label when clicked', () => {
    const handleClick = vi.fn();
    render(<Chip label="clickable" onClick={handleClick} />);

    const chip = screen.getByRole('button', { name: 'clickable' });
    fireEvent.click(chip);

    expect(handleClick).toHaveBeenCalledWith('clickable');
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-test-class';
    render(<Chip label="styled" className={customClass} />);

    const chip = screen.getByRole('button', { name: 'styled' });
    expect(chip).toHaveClass(customClass);
  });

  it('has base styles by default', () => {
    render(<Chip label="base" />);
    const chip = screen.getByRole('button', { name: 'base' });

    // Check for some base Tailwind classes we expect
    expect(chip).toHaveClass('rounded-full');
    expect(chip).toHaveClass('px-2');
  });
});
