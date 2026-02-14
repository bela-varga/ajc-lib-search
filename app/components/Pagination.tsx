interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  // itemsPerPage is kept in props interface for API consistency but not used in render currently
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // Always show first page
    pages.push(1);

    // Show ellipsis if current page is far from start
    if (currentPage > 3) {
      pages.push('...');
    }

    // Show pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // Show ellipsis if current page is far from end
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className="flex items-center justify-center space-x-2 mt-8"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-label="Previous page"
      >
        Előző
      </button>

      <ul className="flex space-x-1">
        {getPageNumbers().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-gray-500 dark:text-gray-400">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white border border-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                aria-current={currentPage === page ? 'page' : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-label="Next page"
      >
        Következő
      </button>
    </nav>
  );
}
