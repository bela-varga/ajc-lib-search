import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './contact';

describe('Contact Page', () => {
  it('renders the contact page heading', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { name: /kapcsolat/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders lorem ipsum content', () => {
    render(<Contact />);
    const content = screen.getByText(/lorem ipsum dolor sit amet/i);
    expect(content).toBeInTheDocument();
  });

  it('has proper page structure with card layout', () => {
    const { container } = render(<Contact />);
    const card = container.querySelector('.bg-white');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'shadow-md');
  });
});
