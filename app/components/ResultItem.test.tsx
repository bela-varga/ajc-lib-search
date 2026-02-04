import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ResultItem from './ResultItem';
import type { AudioLibSearchElement } from '../types/library.types';

const mockItem: AudioLibSearchElement = {
  id: '1',
  title: 'Test Title',
  description: 'Test Description',
  tags: ['tag1', 'tag2'],
  youtubeLink: 'https://youtube.com/watch?v=123',
  spotifyLink: 'https://spotify.com/track/123',
  timestamp: 0,
};

describe('ResultItem', () => {
  it('renders title, description, and tags', () => {
    render(<ResultItem {...mockItem} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
  });

  it('does not render tags section if tags are empty or undefined', () => {
    const itemNoTags: AudioLibSearchElement = {
      ...mockItem,
      tags: [],
    };
    const { rerender } = render(<ResultItem {...itemNoTags} />);
    // Check if any tag container is NOT present. 
    // The current implementation renders tags in a generic div. 
    // We can check that "tag1" is not there.
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();

    // Re-render with undefined tags
    const itemUndefinedTags: AudioLibSearchElement = {
        ...mockItem,
        tags: undefined as any,
    };
    rerender(<ResultItem {...itemUndefinedTags} />);
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();
    
    // To be more precise, we might want to target the container, but it lacks a specific role/id. 
    // Checking for content absence is sufficient given the simple structure.
  });

  it('renders YouTube link correctly without timestamp', () => {
    render(<ResultItem {...mockItem} timestamp={0} />);
    
    const links = screen.getAllByRole('link', { name: /YouTube/i });
    // Assuming ExternalLink renders an anchor with "YouTube" text + visually hidden "open in new tab"
    // The accessible name might be "YouTube (új lapon nyílik meg)" depending on ExternalLink implementation.
    // Let's look at ExternalLink.test.tsx: name: /Example/i matched "Example".
    // So here name: /YouTube/i should work.
    
    expect(links[0]).toHaveAttribute('href', 'https://youtube.com/watch?v=123');
  });

  it('renders YouTube link with timestamp', () => {
    render(<ResultItem {...mockItem} timestamp={60} />);
    
    const link = screen.getByRole('link', { name: /YouTube/i });
    // Should append &t=60s (since ? is present) or ?t=60s
    // mock link has ?, so &t=60s. Wait, mock is "https://youtube.com/watch?v=123", which HAS '?'.
    expect(link).toHaveAttribute('href', 'https://youtube.com/watch?v=123&t=60s');
  });

  it('renders YouTube link with timestamp when no query params exist', () => {
    const itemNoQuery: AudioLibSearchElement = {
        ...mockItem,
        youtubeLink: 'https://youtu.be/123',
        timestamp: 30
    }
    render(<ResultItem {...itemNoQuery} />);
    
    const link = screen.getByRole('link', { name: /YouTube/i });
    expect(link).toHaveAttribute('href', 'https://youtu.be/123?t=30s');
  });

  it('renders Spotify link correctly', () => {
    render(<ResultItem {...mockItem} />);
    
    const link = screen.getByRole('link', { name: /Spotify/i });
    expect(link).toHaveAttribute('href', 'https://spotify.com/track/123');
  });

  it('does not render links if they are missing', () => {
    const itemNoLinks: AudioLibSearchElement = {
        ...mockItem,
        youtubeLink: undefined,
        spotifyLink: undefined,
    };
    render(<ResultItem {...itemNoLinks} />);
    
    expect(screen.queryByRole('link', { name: /YouTube/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Spotify/i })).not.toBeInTheDocument();
  });
  
  it('uses ExternalLink component for links (verifying target=_blank)', () => {
     render(<ResultItem {...mockItem} />);
     const ytLink = screen.getByRole('link', { name: /YouTube/i });
     const spotifyLink = screen.getByRole('link', { name: /Spotify/i });
     
     expect(ytLink).toHaveAttribute('target', '_blank');
     expect(spotifyLink).toHaveAttribute('target', '_blank');
  });
});
