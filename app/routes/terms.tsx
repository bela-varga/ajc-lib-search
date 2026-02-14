export function meta() {
  return [
    { title: 'Felhasználási feltételek - A. J. Christian "Könyvtár" Kereső' },
    { name: 'description', content: 'Felhasználási feltételek' },
  ];
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            Felhasználási feltételek
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ez a weboldal egy egyszerű, statikus alkalmazás, amely kizárólag
              tájékoztató és kísérleti célokat szolgál.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              A weboldal használata
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Az oldal használata saját felelősségre történik. Az oldal
              készítője nem vállal garanciát a tartalom pontosságára,
              teljességére vagy folyamatos elérhetőségére.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Felelősség kizárása
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Az oldal készítője nem felel semmilyen közvetlen vagy közvetett
              kárért, amely az oldal használatából vagy elérhetetlenségéből
              ered.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Felhasználás feltételei
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A weboldal nem használható jogellenes célokra vagy a
              rendeltetésével ellentétes módon.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              A feltételek módosítása
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Az oldal készítője fenntartja a jogot a felhasználási feltételek
              előzetes értesítés nélküli módosítására.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
