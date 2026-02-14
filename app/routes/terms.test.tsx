import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Terms from './terms';

describe('Terms Page', () => {
  it('renders the terms page heading', () => {
    render(<Terms />);
    const heading = screen.getByRole('heading', {
      name: /felhasználási feltételek/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders lorem ipsum content', () => {
    render(<Terms />);
    const content = screen.getByText(/lorem ipsum dolor sit amet/i);
    expect(content).toBeInTheDocument();
  });

  it('has proper page structure with card layout', () => {
    const { container } = render(<Terms />);
    const card = container.querySelector('.bg-white');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'shadow-md');
  });
});
