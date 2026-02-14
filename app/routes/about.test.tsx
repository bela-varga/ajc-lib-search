import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './about';

describe('About Page', () => {
  it('renders the about page heading', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { name: /rólunk/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders lorem ipsum content', () => {
    render(<About />);
    const content = screen.getByText(/lorem ipsum dolor sit amet/i);
    expect(content).toBeInTheDocument();
  });

  it('has proper page structure with card layout', () => {
    const { container } = render(<About />);
    const card = container.querySelector('.bg-white');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'shadow-md');
  });
});
