import { useMemo } from 'react';
import { Chip } from '~/components/Chip';

export const PINNED_TAG = 'teljes videó';

export const SUGGESTED_TAGS = [
  'tudatosság',
  'spiritualitás',
  'önismeret',
  'halál',
  'lélek',
  'párkapcsolat',
  'tudat',
  'létezés',
  'érzelmek',
  'jövő',
  'család',
  'egészség',
  'figyelem',
  'sors',
  'reinkarnáció',
  'szeretet',
  'teremtés',
  'megvilágosodás',
  'félelem',
  'valóság',
  'elengedés',
  'társadalom',
  'betegség',
  'halál után',
  'politika',
  'energia',
  'fejlődés',
  'álom',
  'felelősség',
  'végtelen',
  'pszichológia',
  'változás',
  'születés',
  'ego',
  'filozófia',
  'kommunikáció',
  'gyógyulás',
  'karma',
  'érzékelés',
  'segítés',
  'háború',
  'jelenlét',
  'tanítás',
  'tudatos halál',
  'segítség',
  'gyász',
  'gazdaság',
  'hit',
  'dimenziók',
  'szerelem',
  'szexualitás',
  'isten',
  'pénz',
  'munka',
];

const RANDOM_TAG_COUNT = 10;

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
