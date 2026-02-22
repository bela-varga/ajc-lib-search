import type { AudioLibSearchElement } from '../types/library.types';
import ResultItem from './ResultItem';

interface ResultsListProps {
  results: AudioLibSearchElement[];
  totalResults: number;
  onTagClick?: (tag: string) => void;
  currentSort?: string;
  onSortChange?: (sort: string) => void;
}

export default function ResultsList({
  results,
  totalResults,
  onTagClick,
  currentSort = 'newest',
  onSortChange,
}: ResultsListProps) {
  if (results.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
        Nincs találat.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {totalResults} találat
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="sort-select"
            className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"
          >
            Rendezés:
          </label>
          <select
            id="sort-select"
            value={currentSort}
            onChange={(e) => onSortChange?.(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="newest">Legújabb elöl</option>
            <option value="oldest">Legrégebbi elöl</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {results.map((result) => (
          <ResultItem key={result.id} {...result} onTagClick={onTagClick} />
        ))}
      </div>
    </div>
  );
}
