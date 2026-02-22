import { describe, it, expect } from 'vitest';
import { searchLibrary } from './searchEngine';
import type { AudioLibSearchElement } from '../types/library.types';

const mockLibrary: AudioLibSearchElement[] = [
  {
    id: '1',
    talkTitle: 'Jazz Saxophone',
    description: 'Smooth jazz rhythms',
    tags: ['jazz', 'instrumental'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=1',
    spotifyLink: 'https://www.spotify.com/track/1',
  },
  {
    id: '2',
    talkTitle: 'Pop Hit',
    description: 'Classic 80s pop song',
    tags: ['pop', '80s'],
    timestamp: 10,
    youtubeLink: 'https://www.youtube.com/watch?v=2',
    spotifyLink: 'https://www.spotify.com/track/2',
  },
  {
    id: '3',
    talkTitle: 'Heavy Metal',
    description: 'Intense guitar solos',
    tags: ['metal', 'heavy'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=3',
    spotifyLink: 'https://www.spotify.com/track/3',
  },
  {
    id: '4',
    talkTitle: 'Dr. Dre & Snoop Dogg',
    description: 'Hip-Hop classics',
    tags: ['rap', '90s', '$money$'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=4',
    spotifyLink: 'https://www.spotify.com/track/4',
  },
  {
    id: '5',
    talkTitle: 'Café del Mar',
    description: 'Chillout & Lounge',
    tags: ['chill', 'ambience'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=5',
    spotifyLink: 'https://www.spotify.com/track/5',
  },
  {
    id: '6',
    talkTitle: 'The Cross and Violence',
    topicTitle: 'Christianity and Violence',
    description: 'Discussion on historical context',
    tags: ['theology', 'history'],
    timestamp: 0,
    youtubeLink: 'https://www.youtube.com/watch?v=6',
    spotifyLink: 'https://www.spotify.com/track/6',
  },
];

describe('searchLibrary', () => {
  it('should return an empty array for an empty query', () => {
    expect(searchLibrary(mockLibrary, [''])).toEqual([]);
  });

  it('should return an empty array for a whitespace-only query', () => {
    expect(searchLibrary(mockLibrary, ['   '])).toEqual([]);
  });

  it('should match talkTitle regardless of case', () => {
    const results = searchLibrary(mockLibrary, ['JAZZ']);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('1');
  });

  it('should match topicTitle regardless of case', () => {
    const results = searchLibrary(mockLibrary, ['CHRISTIANITY']);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('6');
  });

  it('should match description regardless of case', () => {
    const results = searchLibrary(mockLibrary, ['80S POP']);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('2');
  });

  it('should match tags regardless of case', () => {
    const results = searchLibrary(mockLibrary, ['METAL']);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('3');
  });

  it('should return multiple results if they match', () => {
    const results = searchLibrary(mockLibrary, ['a']);
    expect(results.length).toBeGreaterThanOrEqual(2);
  });

  it('should return an empty array if no match is found', () => {
    expect(searchLibrary(mockLibrary, ['reggae'])).toEqual([]);
  });

  it('should trim query before searching', () => {
    const results = searchLibrary(mockLibrary, ['  heavy  ']);
    expect(results[0].id).toBe('3');
  });

  it('should handle special characters in query', () => {
    const resultsAnd = searchLibrary(mockLibrary, ['&']);
    expect(resultsAnd).toHaveLength(2);
    expect(resultsAnd.map((r) => r.id)).toContain('4');
    expect(resultsAnd.map((r) => r.id)).toContain('5');

    const resultsMoney = searchLibrary(mockLibrary, ['$money$']);
    expect(resultsMoney).toHaveLength(1);
    expect(resultsMoney[0].id).toBe('4');
  });

  it('should match mixed case tags specifically', () => {
    const results = searchLibrary(mockLibrary, ['MeTaL']);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('3');
  });

  it('should handle queries with accents', () => {
    // "Café" has an accent
    const results = searchLibrary(mockLibrary, ['Café']);
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe('5');

    // Verify that searching without accent does NOT find the accented item (current limitation)
    const resultsNoAccent = searchLibrary(mockLibrary, ['cafe']);
    expect(resultsNoAccent).toEqual([]);
  });

  describe('multiple search queries', () => {
    it('should narrow down results with each additional query (AND logic)', () => {
      const singleResults = searchLibrary(mockLibrary, ['jazz']);
      const multipleResults = searchLibrary(mockLibrary, ['jazz', 'sax']);

      expect(singleResults).toHaveLength(1);
      expect(multipleResults).toHaveLength(1);
      expect(multipleResults[0].id).toBe('1');

      const overlappingResults = searchLibrary(mockLibrary, ['jazz', 'pop']);
      expect(overlappingResults).toHaveLength(0);
    });

    it('should be order independent', () => {
      const order1 = searchLibrary(mockLibrary, ['jazz', 'instrumental']);
      const order2 = searchLibrary(mockLibrary, ['instrumental', 'jazz']);

      expect(order1).toEqual(order2);
      expect(order1).toHaveLength(1);
      expect(order1[0].id).toBe('1');
    });

    it('should match across different fields', () => {
      // 'jazz' is in title, 'rhythms' is in description
      const results = searchLibrary(mockLibrary, ['jazz', 'rhythms']);
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('1');
    });

    it('should handle multiple tags', () => {
      const results = searchLibrary(mockLibrary, ['theology', 'history']);
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('6');
    });

    it('should ignore empty or whitespace-only queries in the array', () => {
      const resultsNormal = searchLibrary(mockLibrary, ['jazz']);
      const resultsWithEmpty = searchLibrary(mockLibrary, ['jazz', '', '   ']);

      expect(resultsWithEmpty).toEqual(resultsNormal);
    });

    it('should return empty if any query has no matches (AND logic)', () => {
      const results = searchLibrary(mockLibrary, ['jazz', 'nonexistent']);
      expect(results).toHaveLength(0);
    });

    it('should handle more than two queries', () => {
      // 'classic', '80s' in description/tags, 'pop' in title
      const results = searchLibrary(mockLibrary, ['classic', '80s', 'pop']);
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('2');
    });
  });
});
