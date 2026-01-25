import type { AudioLibSearchElement } from "../types/library.types";

export default function ResultItem({
  title,
  description,
  tags,
  youtubeLink,
  spotifyLink,
  timestamp,
}: AudioLibSearchElement) {
  const getYoutubeLink = () => {
    if (!youtubeLink) return null;
    if (timestamp && timestamp > 0) {
      // Check if link already has params
      const separator = youtubeLink.includes("?") ? "&" : "?";
      return `${youtubeLink}${separator}t=${timestamp}s`;
    }
    return youtubeLink;
  };

  const finalYoutubeLink = getYoutubeLink();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col gap-3">
        {/* Header: Title */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            {title}
          </h3>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description - optionally truncated if very long, but for now full */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-1">
          {finalYoutubeLink && (
            <a
              href={finalYoutubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:underline"
            >
              YouTube
            </a>
          )}
          {spotifyLink && (
            <a
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 hover:underline"
            >
              Spotify
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
