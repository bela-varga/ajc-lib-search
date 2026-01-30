import { describe, it, expect } from 'vitest';
import { searchLibrary } from './searchEngine';
import type { AudioLibSearchElement } from '../types/library.types';

const mockLibrary: AudioLibSearchElement[] = [
  {
    id: '1',
    title: 'Jazz Saxophone',
    description: 'Smooth jazz rhythms',
    tags: ['jazz', 'instrumental'],
    timestamp: 0,
  },
  {
    id: '2',
    title: 'Pop Hit',
    description: 'Classic 80s pop song',
    tags: ['pop', '80s'],
    timestamp: 10,
  },
  {
    id: '3',
    title: 'Heavy Metal',
    description: 'Intense guitar solos',
    tags: ['metal', 'heavy'],
    timestamp: 0,
  },
];

describe('searchLibrary', () => {
  it('should return an empty array for an empty query', () => {
    expect(searchLibrary(mockLibrary, '')).toEqual([]);
  });

  it('should return an empty array for a whitespace-only query', () => {
    expect(searchLibrary(mockLibrary, '   ')).toEqual([]);
  });

  it('should match title regardless of case', () => {
    const results = searchLibrary(mockLibrary, 'JAZZ');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('1');
  });

  it('should match description regardless of case', () => {
    const results = searchLibrary(mockLibrary, '80S POP');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('2');
  });

  it('should match tags regardless of case', () => {
    const results = searchLibrary(mockLibrary, 'METAL');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('3');
  });

  it('should return multiple results if they match', () => {
    const results = searchLibrary(mockLibrary, 'a');
    // "Jazz Saxophone", "Pop Hit", "Heavy Metal" all contain 'a' in title or description or tags
    // Jazz (tags), Pop (description - "Classic"), Metal (title)
    expect(results.length).toBeGreaterThanOrEqual(2);
  });

  it('should return an empty array if no match is found', () => {
    expect(searchLibrary(mockLibrary, 'reggae')).toEqual([]);
  });

  it('should trim query before searching', () => {
    const results = searchLibrary(mockLibrary, '  heavy  ');
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('3');
  });
});
