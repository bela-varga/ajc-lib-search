import { useState, type FormEvent } from 'react';

interface SearchQueryChipProps {
  query: string;
  onRemove: (query: string) => void;
}

function SearchQueryChip({ query, onRemove }: SearchQueryChipProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
      {query}
      <button
        type="button"
        onClick={() => onRemove(query)}
        aria-label={`Törlés: ${query}`}
        className="ml-0.5 rounded-full px-1 py-0.5 text-blue-600 hover:bg-blue-200 hover:text-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 dark:hover:text-blue-100"
      >
        ×
      </button>
    </span>
  );
}

interface SearchBarProps {
  onSearch: (query: string) => void;
  onRemoveQuery: (query: string) => void;
  queries: string[];
}

export function SearchBar({
  onSearch,
  onRemoveQuery,
  queries,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed !== '') {
      onSearch(trimmed);
      setInputValue('');
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      {queries.length > 0 && (
        <div className="flex flex-wrap gap-1.5" aria-label="Aktív keresések">
          {queries.map((q) => (
            <SearchQueryChip key={q} query={q} onRemove={onRemoveQuery} />
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex w-full gap-2" role="search">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Keresés..."
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          aria-label="Keresés"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Keresés
        </button>
      </form>
    </div>
  );
}
