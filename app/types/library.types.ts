/**
 * Represents a single audio library item that can be searched and displayed.
 * Each item must have at least one source link (YouTube or Spotify).
 */
export interface AudioLibSearchElement {
  id: string;
  youtubeLink?: string;
  spotifyLink?: string;
  timestamp: number;
  /** The specific title of the talk or segment */
  talkTitle: string;
  /** The broader topic title the talk belongs to, if applicable */
  topicTitle?: string;
  description: string;
  tags: string[];
}
