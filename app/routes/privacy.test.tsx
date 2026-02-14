import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Privacy from './privacy';

describe('Privacy Page', () => {
  it('renders the privacy page heading', () => {
    render(<Privacy />);
    const heading = screen.getByRole('heading', { name: /adatvédelem/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders lorem ipsum content', () => {
    render(<Privacy />);
    const content = screen.getByText(/lorem ipsum dolor sit amet/i);
    expect(content).toBeInTheDocument();
  });

  it('has proper page structure with card layout', () => {
    const { container } = render(<Privacy />);
    const card = container.querySelector('.bg-white');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'shadow-md');
  });
});
