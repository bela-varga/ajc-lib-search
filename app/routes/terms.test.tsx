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

  it('renders the paragraphs needed', () => {
    render(<Terms />);

    expect(screen.getByText(/A weboldal használata/i)).toBeInTheDocument();
    expect(screen.getByText(/Felelősség kizárása/i)).toBeInTheDocument();
    expect(screen.getByText(/Felhasználás feltételei/i)).toBeInTheDocument();
    expect(screen.getByText(/A feltételek módosítása/i)).toBeInTheDocument();
  });

  it('has proper page structure with card layout', () => {
    const { container } = render(<Terms />);
    const card = container.querySelector('.bg-white');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg', 'shadow-md');
  });
});
