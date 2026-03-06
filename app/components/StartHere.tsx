import { useMemo } from 'react';
import { Chip } from '~/components/Chip';

export const PINNED_TAG = 'teljes videó';

export const SUGGESTED_TAGS = [
  'tudat',
  'lélek',
  'szeretet',
  'család',
  'elengedés',
  'halál',
  'idő',
  'párkapcsolat',
  'spiritualitás',
  'létezés',
  'munka',
  'jövő',
  'társadalom',
  'pénz',
  'tudatosság',
  'energia',
  'félelem',
  'karma',
  'isten',
  'teremtés',
  'figyelem',
];

const RANDOM_TAG_COUNT = 5;

function pickRandom(tags: string[], count: number): string[] {
  const shuffled = [...tags].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

interface StartHereProps {
  onSearch: (query: string) => void;
}

export function StartHere({ onSearch }: StartHereProps) {
  const displayTags = useMemo(
    () => [PINNED_TAG, ...pickRandom(SUGGESTED_TAGS, RANDOM_TAG_COUNT)],
    [],
  );

  return (
    <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
        Nem tudod mit keress? Kezdd itt!
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {displayTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={onSearch}
            className="px-4 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
          />
        ))}
      </div>
    </div>
  );
}
