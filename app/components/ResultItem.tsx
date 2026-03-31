import type { AudioLibSearchElement } from '../types/library.types';
import { ExternalLink } from './ExternalLink';
import { Chip } from './Chip';

type ResultItemProps = AudioLibSearchElement & {
  onTagClick?: (tag: string) => void;
};

export default function ResultItem({
  talkTitle,
  topicTitle,
  description,
  tags,
  youtubeLink,
  spotifyLink,
  timestamp,
  onTagClick,
}: ResultItemProps) {
  const appendTimestamp = (url: string) => {
    if (!timestamp || timestamp <= 0) return url;
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}t=${timestamp}s`;
  };

  const finalYoutubeLink = youtubeLink ? appendTimestamp(youtubeLink) : null;
  const finalSpotifyLink = spotifyLink ? appendTimestamp(spotifyLink) : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col gap-3">
        <div>
          {topicTitle && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              {topicTitle}
            </h3>
          )}
          {talkTitle && (
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-0.5 uppercase tracking-wider">
              {talkTitle}
            </div>
          )}
        </div>

        {description !== topicTitle && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <Chip key={tag} label={tag} onClick={onTagClick} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 mt-1">
          {finalYoutubeLink && (
            <ExternalLink
              href={finalYoutubeLink}
              className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              YouTube
            </ExternalLink>
          )}
          {finalSpotifyLink && (
            <span className="relative group inline-block">
              <ExternalLink
                href={finalSpotifyLink}
                className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                Spotify
                {timestamp && timestamp > 0 ? ' (+/- egy perc innen)' : ''}
              </ExternalLink>
              {!!timestamp && timestamp > 0 && (
                <span
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 rounded-lg bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 leading-relaxed"
                >
                  A Spotify linkek nem biztos hogy pontosan oda mutatnak ahol
                  kezdődik az adott részlet. Előfordulhat, hogy kicsit előre
                  vagy hátra kell tekerned hogy oda juss.
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                </span>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
