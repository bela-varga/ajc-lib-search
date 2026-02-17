type AtLeastOne<T, Keys extends keyof T = keyof T> = Partial<T> &
  { [K in Keys]-?: Required<Pick<T, K>> }[Keys];

/**
 * Represents a single audio library item that can be searched and displayed.
 * Each item must have at least one source link (YouTube or Spotify).
 */
export type AudioLibSearchElement = AtLeastOne<
  {
    id: string;
    youtubeLink?: string;
    spotifyLink?: string;
    timestamp: number;
    talkTitle: string;
    topicTitle?: string;
    description?: string;
    tags: string[];
  },
  'youtubeLink' | 'spotifyLink'
>;
