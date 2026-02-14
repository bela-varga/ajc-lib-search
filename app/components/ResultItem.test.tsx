import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import ResultItem from './ResultItem';
import type { AudioLibSearchElement } from '../types/library.types';

const mockItem: AudioLibSearchElement = {
  id: '1',
  talkTitle: 'Test Title',
  topicTitle: 'Test Topic',
  description: 'Test Description',
  tags: ['tag1', 'tag2'],
  youtubeLink: 'https://youtube.com/watch?v=123',
  spotifyLink: 'https://spotify.com/track/123',
  timestamp: 0,
};

describe('ResultItem', () => {
  const renderResultItem = (props: AudioLibSearchElement) => {
    return render(
      <BrowserRouter>
        <ResultItem {...props} />
      </BrowserRouter>,
    );
  };

  it('renders talkTitle, topicTitle, description, and tags', () => {
    renderResultItem(mockItem);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Topic')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
  });

  it('does not render tags section if tags are empty or undefined', () => {
    const itemNoTags: AudioLibSearchElement = {
      ...mockItem,
      tags: [],
    };
    renderResultItem(itemNoTags);
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();

    // Re-render with undefined tags
    const itemUndefinedTags: AudioLibSearchElement = {
      ...mockItem,
      tags: undefined as any,
    };
    // Note: strictly speaking we should create a new render or handle rerender carefully with wrappers
    // but for simplicity let's just assert on a fresh render
    renderResultItem(itemUndefinedTags);
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();
  });

  it('renders tags as clickable links', () => {
    renderResultItem(mockItem);

    const tag1 = screen.getByRole('link', { name: /tag1/i });
    const tag2 = screen.getByRole('link', { name: /tag2/i });

    expect(tag1).toBeInTheDocument();
    expect(tag1).toHaveAttribute('href', '/?q=tag1');
    expect(tag2).toBeInTheDocument();
    expect(tag2).toHaveAttribute('href', '/?q=tag2');
  });

  it('renders YouTube link correctly without timestamp', () => {
    renderResultItem({ ...mockItem, timestamp: 0 });

    const link = screen.getByRole('link', { name: /YouTube/i });
    expect(link).toHaveAttribute('href', 'https://youtube.com/watch?v=123');
  });

  it('renders YouTube link with timestamp', () => {
    renderResultItem({ ...mockItem, timestamp: 60 });
    const link = screen.getByRole('link', { name: /YouTube/i });
    expect(link).toHaveAttribute(
      'href',
      'https://youtube.com/watch?v=123&t=60s',
    );
  });

  it('renders YouTube link with timestamp when no query params exist', () => {
    const itemNoQuery: AudioLibSearchElement = {
      ...mockItem,
      youtubeLink: 'https://youtu.be/123',
      timestamp: 30,
    };
    renderResultItem(itemNoQuery);

    const link = screen.getByRole('link', { name: /YouTube/i });
    expect(link).toHaveAttribute('href', 'https://youtu.be/123?t=30s');
  });

  it('renders Spotify link correctly', () => {
    renderResultItem(mockItem);
    const link = screen.getByRole('link', { name: /Spotify/i });
    expect(link).toHaveAttribute('href', 'https://spotify.com/track/123');
  });

  it('does not render links if they are missing', () => {
    const itemNoLinks = {
      ...mockItem,
      youtubeLink: undefined,
      spotifyLink: undefined,
    };
    renderResultItem(itemNoLinks as AudioLibSearchElement);

    expect(
      screen.queryByRole('link', { name: /YouTube/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /Spotify/i }),
    ).not.toBeInTheDocument();
  });

  it('uses ExternalLink component for links (verifying target=_blank)', () => {
    renderResultItem(mockItem);
    const ytLink = screen.getByRole('link', { name: /YouTube/i });
    const spotifyLink = screen.getByRole('link', { name: /Spotify/i });

    expect(ytLink).toHaveAttribute('target', '_blank');
    expect(spotifyLink).toHaveAttribute('target', '_blank');
  });
});
