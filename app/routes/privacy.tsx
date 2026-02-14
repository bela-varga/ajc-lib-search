export function meta() {
  return [
    { title: 'Adatvédelem - A. J. Christian "Könyvtár" Kereső' },
    { name: 'description', content: 'Adatvédelmi szabályozás' },
  ];
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            Adatvédelem
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
              Adatvédelmi tájékoztató
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ez a weboldal egy egyszerű, statikus, kizárólag a felhasználó
              böngészőjében futó alkalmazás.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Személyes adatok kezelése
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Az oldal nem gyűjt, nem tárol és nem dolgoz fel semmilyen
              személyes adatot.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Adatkezelés módja
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Az alkalmazás nem használ:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 ml-4">
              <li>sütiket (cookies),</li>
              <li>elemző vagy statisztikai eszközöket,</li>
              <li>külső szolgáltatásokat,</li>
              <li>backend szervert,</li>
              <li>API-hívásokat.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Minden funkció kizárólag a felhasználó eszközén, helyben fut.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Adattovábbítás
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Az oldal nem továbbít adatokat harmadik fél részére.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Kapcsolat
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Amennyiben kérdésed van az adatkezeléssel kapcsolatban, kérjük,
              vedd fel a kapcsolatot az oldal készítőjével.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
