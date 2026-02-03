/**
 * Represents a single audio library item that can be searched and displayed.
 * Each item must have at least one source link (YouTube or Spotify).
 */
export interface AudioLibSearchElement {
  id: string;
  youtubeLink?: string;
  spotifyLink?: string;
  timestamp: number;
  title: string;
  description: string;
  tags: string[];
}
