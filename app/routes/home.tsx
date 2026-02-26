import { SearchBar } from '~/components/SearchBar';
import ResultsList from '~/components/ResultsList';
import { useSearch } from '~/hooks/useSearch';
import { Pagination } from '~/components/Pagination';
import { Chip } from '~/components/Chip';

export function meta() {
  return [
    { title: 'A. J. Christian "Könyvtár" Kereső' },
    {
      name: 'description',
      content: 'Keress A. J. Christian youtube videóiban',
    },
  ];
}

const SUGGESTED_TAGS = [
  'teljes videó',
  'tudat',
  'lélek',
  'szeretet',
  'család',
  'elengedés',
  'halál',
];

export default function Home() {
  const {
    hasSearched,
    handleSearch,
    removeQuery,
    searchQueries,
    paginatedResults,
    currentPage,
    totalPages,
    setPage,
    itemsPerPage,
    totalResults,
    currentSort,
    handleSortChange,
  } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            A. J. Christian &quot;Könyvtár&quot; Kereső
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Keress rá Christian videói/podcastjai között a témára, ami érdekel.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="w-full flex flex-col items-center gap-6">
            <SearchBar
              onSearch={handleSearch}
              onRemoveQuery={removeQuery}
              queries={searchQueries}
            />

            {!hasSearched && (
              <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Nem tudod mit keress? Kezdd itt!
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SUGGESTED_TAGS.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      onClick={handleSearch}
                      className="px-4 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {hasSearched && (
            <div className="w-full space-y-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
                itemsPerPage={itemsPerPage}
              />
              <ResultsList
                results={paginatedResults}
                totalResults={totalResults}
                onTagClick={handleSearch}
                currentSort={currentSort}
                onSortChange={handleSortChange}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
                itemsPerPage={itemsPerPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
