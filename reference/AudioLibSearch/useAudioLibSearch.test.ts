import { AudioLibSearchElement } from './AudioLibSearch.types';
import { useAudioLibSearch } from './useAudioLibSearch';

describe('Audio Library Search', () => {
  let mockList: AudioLibSearchElement[] = [];
  const getMockElement1111 = () => ({
    id: '1111',
    youtubeLink: '1111',
    spotifyLink: '1111',
    timestamp: 0,
    title: '1111',
    description: 'one one one one',
    tags: ['1111', 'one'],
  });
  const getMockElement2222 = () => ({
    id: '2222',
    youtubeLink: '2222',
    spotifyLink: '2222',
    timestamp: 0,
    title: '2222',
    description: '2222',
    tags: ['twos', 'two', '2222'],
  });
  const getMockElement1234 = () => ({
    id: '1234',
    youtubeLink: '1234',
    spotifyLink: '1234',
    timestamp: 0,
    title: '1234',
    description: 'one two three four',
    tags: ['1', '34', '1234'],
  });
  const getMockElementTimeTwoTest = () => ({
    id: 'Time two test',
    youtubeLink: 'Time two test',
    spotifyLink: 'Time two test',
    timestamp: 0,
    title: 'Time two test',
    description: 'time to test',
    tags: ['time', 'test'],
  });

  beforeEach(() => {
    mockList = [
      getMockElement1111(),
      getMockElement2222(),
      getMockElement1234(),
      getMockElementTimeTwoTest(),
    ];
  });

  // Basic search cases
  it('Search by title should return matching items', () => {
    const { getByTitle } = useAudioLibSearch(mockList);
    expect(getByTitle('2')).toEqual([
      getMockElement2222(),
      getMockElement1234(),
    ]);
  });
  it('Search by description should return matching items', () => {
    const { getByDescription } = useAudioLibSearch(mockList);
    expect(getByDescription('2')).toEqual([getMockElement2222()]);
  });
  it('Search by tags should return matching items', () => {
    const { getByTag } = useAudioLibSearch(mockList);
    expect(getByTag('2')).toEqual([getMockElement2222(), getMockElement1234()]);
  });

  // Multiple field searches
  it('Search term in all title, description, and tags should return all matching items', () => {
    const mockList = [
      {
        id: 'a',
        youtubeLink: 'a',
        spotifyLink: 'a',
        timestamp: 0,
        title: '1111',
        description: 'one one one one',
        tags: ['1111', 'one'],
      },
      {
        id: 'b',
        youtubeLink: 'b',
        spotifyLink: 'b',
        timestamp: 0,
        title: '2222',
        description: 'two two two two',
        tags: ['twos', 'two'],
      },
      {
        id: 'c',
        youtubeLink: 'c',
        spotifyLink: 'c',
        timestamp: 0,
        title: '1 two 34',
        description: 'one two three four',
        tags: ['1', '34', '1234'],
      },
      {
        id: 'd',
        youtubeLink: 'd',
        spotifyLink: 'd',
        timestamp: 0,
        title: 'Time to test',
        description: 'time 2 test',
        tags: ['time', 'test'],
      },
    ];
    const { searchInAll } = useAudioLibSearch(mockList);
    expect(searchInAll('2')).toEqual([
      {
        id: 'b',
        youtubeLink: 'b',
        spotifyLink: 'b',
        timestamp: 0,
        title: '2222',
        description: 'two two two two',
        tags: ['twos', 'two'],
      },
      {
        id: 'c',
        youtubeLink: 'c',
        spotifyLink: 'c',
        timestamp: 0,
        title: '1 two 34',
        description: 'one two three four',
        tags: ['1', '34', '1234'],
      },
      {
        id: 'd',
        youtubeLink: 'd',
        spotifyLink: 'd',
        timestamp: 0,
        title: 'Time to test',
        description: 'time 2 test',
        tags: ['time', 'test'],
      },
    ]);
  });

  it('Search should be case-insensitive', () => {
    const { searchInAll, getByTitle, getByDescription, getByTag } =
      useAudioLibSearch(mockList);
    expect(searchInAll('TWO')).toEqual([
      getMockElement2222(),
      getMockElement1234(),
      getMockElementTimeTwoTest(),
    ]);
    expect(getByTitle('TWO')).toEqual([getMockElementTimeTwoTest()]);
    expect(getByDescription('TWO')).toEqual([getMockElement1234()]);
    expect(getByTag('TWO')).toEqual([getMockElement2222()]);
  });

  // Edge cases
  it('Search should return an empty list if no matches are found', () => {
    const { searchInAll, getByTitle, getByDescription, getByTag } =
      useAudioLibSearch(mockList);
    expect(searchInAll('nothing')).toEqual([]);
    expect(getByTitle('nothing')).toEqual([]);
    expect(getByDescription('nothing')).toEqual([]);
    expect(getByTag('nothing')).toEqual([]);
  });
  it('Search should trim spaces from the query', () => {
    const mockList = [
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: '1111',
        description: 'one one one one',
        tags: ['iiii', 'one'],
      },
    ];
    const { searchInAll, getByTitle, getByDescription, getByTag } =
      useAudioLibSearch(mockList);
    expect(searchInAll(' one ')).toEqual([
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: '1111',
        description: 'one one one one',
        tags: ['iiii', 'one'],
      },
    ]);
    expect(getByTitle(' 1 ')).toEqual([
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: '1111',
        description: 'one one one one',
        tags: ['iiii', 'one'],
      },
    ]);
    expect(getByDescription(' one ')).toEqual([
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: '1111',
        description: 'one one one one',
        tags: ['iiii', 'one'],
      },
    ]);
    expect(getByTag(' i ')).toEqual([
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: '1111',
        description: 'one one one one',
        tags: ['iiii', 'one'],
      },
    ]);
  });
  it('Search should handle special characters in queries', () => {
    const mockList = [
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: `100% of people curses`,
        description: `they say things like \\'$%.^!`,
        tags: [`-- \`'"fe`],
      },
    ];
    const { searchInAll, getByTitle, getByDescription, getByTag } =
      useAudioLibSearch(mockList);
    expect(searchInAll(`\\'$%.^!`)).toEqual([
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: `100% of people curses`,
        description: `they say things like \\'$%.^!`,
        tags: [`-- \`'"fe`],
      },
    ]);
    expect(getByTitle('%%')).toEqual([]);
    expect(getByDescription('%%')).toEqual([]);
    expect(getByTag(`'"`)).toEqual([
      {
        id: '1111',
        youtubeLink: '1111',
        spotifyLink: '1111',
        timestamp: 0,
        title: `100% of people curses`,
        description: `they say things like \\'$%.^!`,
        tags: [`-- \`'"fe`],
      },
    ]);
  });
  it('should return empty array if empty string is the search string is empty or only whitespaces', () => {
    const { searchInAll, getByTitle, getByDescription, getByTag } =
      useAudioLibSearch(mockList);
    expect(searchInAll('  ')).toEqual([]);
    expect(getByTitle('  ')).toEqual([]);
    expect(getByDescription('  ')).toEqual([]);
    expect(getByTag('  ')).toEqual([]);
  });
});
