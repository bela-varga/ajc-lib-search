export const getYoutubeLinkWithTimestamp = (
  youtubeLink: string,
  timestamp: number,
): string => {
  let separator = '&';
  if (youtubeLink.indexOf('?') === -1) {
    separator = '?';
  }
  return `${youtubeLink}${separator}t=${timestamp}s`;
};
