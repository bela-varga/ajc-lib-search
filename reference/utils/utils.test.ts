import { getYoutubeLinkWithTimestamp } from './utils';

describe('utils', () => {
  describe('getYoutubeLinkWithTimestamp', () => {
    it('should return the youtube link with the timestamp', () => {
      expect(getYoutubeLinkWithTimestamp('youtube.link?w=123456', 42)).toEqual(
        'youtube.link?w=123456&t=42s',
      );
    });

    it('should work with shortened links', () => {
      expect(getYoutubeLinkWithTimestamp('youtube.link/123456', 42)).toEqual(
        'youtube.link/123456?t=42s',
      );
    });
  });
});
