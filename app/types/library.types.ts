/**
 * Represents a single audio library item that can be searched and displayed.
 * Each item must have at least one source link (YouTube or Spotify).
 */
export interface AudioLibSearchElement {
  /**
   * Unique identifier for the library item.
   * Used as a key for rendering and future features like favorites.
   */
  id: string;

  /**
   * Optional YouTube video link.
   * At least one of youtubeLink or spotifyLink must be provided.
   * @example "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
   */
  youtubeLink?: string;

  /**
   * Optional Spotify track/album/playlist link.
   * At least one of youtubeLink or spotifyLink must be provided.
   * @example "https://open.spotify.com/track/123456789"
   */
  spotifyLink?: string;

  /**
   * Timestamp in seconds for starting YouTube videos at a specific point.
   * This will be appended to the YouTube link as &t={timestamp}s parameter.
   * @example 42 (starts video at 0:42)
   */
  timestamp: number;

  /**
   * The title/name of the audio item.
   * Searchable field displayed prominently in results.
   */
  title: string;

  /**
   * Detailed description of the audio item.
   * Searchable field displayed in result cards.
   */
  description: string;

  /**
   * Array of tags/categories for the audio item.
   * Each tag is searchable and displayed as a pill/chip in results.
   * Tags enable filtering and categorization.
   * @example ["jazz", "instrumental", "chill"]
   */
  tags: string[];
}
