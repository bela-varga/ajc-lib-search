import type { AudioLibSearchElement } from '../types/library.types';
import ResultItem from './ResultItem';

export default function ResultsList({
  results,
}: {
  results: AudioLibSearchElement[];
}) {
  if (results.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
        Nincs találat.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        {results.length} találat
      </div>
      <div className="grid grid-cols-1 gap-4">
        {results.map((result) => (
          <ResultItem key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
}
