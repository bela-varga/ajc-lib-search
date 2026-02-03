import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExternalLink } from './ExternalLink';

describe('ExternalLink', () => {
  it('renders the link with correct attributes', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    
    const link = screen.getByRole('link', { name: /Example/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the screen reader text', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    
    // The screen reader text is part of the accessible name, but we can check for its presence in the DOM
    // "új lapon nyílik meg" should be present but hidden
    expect(screen.getByText('(új lapon nyílik meg)')).toHaveClass('sr-only');
  });

  it('applies custom className', () => {
    render(<ExternalLink href="https://example.com" className="custom-class">Example</ExternalLink>);
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-class');
  });
});
