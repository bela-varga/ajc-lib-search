import { SearchBar } from '~/components/SearchBar';
import ResultsList from '~/components/ResultsList';
import { useSearch } from '~/hooks/useSearch';

export function meta() {
  return [
    { title: 'A.J. Christian "Könyvtár" Kereső' },
    { name: 'description', content: 'Keress A.J. Christian youtube videóiban' },
  ];
}

export default function Home() {
  const { results, hasSearched, handleSearch, searchQuery } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            A.J. Christian &quot;Könyvtár&quot; Kereső
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Keress rá Christian videói/podcastjai között a témára, ami érdekel.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="w-full flex justify-center">
            <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
          </div>

          {hasSearched && (
            <div className="w-full">
              <ResultsList results={results} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
