export function meta() {
  return [
    { title: 'Kapcsolat - A. J. Christian "Könyvtár" Kereső' },
    { name: 'description', content: 'Lépj kapcsolatba velünk' },
  ];
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            Kapcsolat
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Github link:{' '}
              <a href="https://github.com/bela-varga/ajc-lib-search">
                https://github.com/bela-varga/ajc-lib-search
              </a>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Email:{' '}
              <a href="mailto:bela.varga.work@gmail.com">
                bela.varga.work@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
