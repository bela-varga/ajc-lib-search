export function meta() {
  return [
    { title: 'Rólunk - A. J. Christian "Könyvtár" Kereső' },
    {
      name: 'description',
      content: 'Tudj meg többet az A. J. Christian "Könyvtár" Keresőről',
    },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-4">
            Mi ez?
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Christian több videójában mondta, hogy ő a youtube csatornáját
              egyfajta könyvtárnak gondolja. Ez a kereső abban segít, hogy
              könnyebben megtaláld abban a könyvtárban, amit keresel.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ez az oldal nem Christian kezdeményezésére készült - de remélem
              hasznos tud lenni másoknak is, nem csak nekem. Azért csináltam,
              mert volt hogy emlékeztem, hogy valamelyik online előadásban volt
              szó valamiről, de nem tudtam megtalálni. Akkor gondoltam arra,
              bárcsak lenne egy egyszerű mód az A. J. Christian
              &quot;könyvtáron&quot; belüli keresésre.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ez egy végtelenül egyszerű applikáció, nem használ adatbázist, nem
              frissül automatikusan, egyszerűen csak a böngészőben fut, és keres
              az eddig elmentett videók között. Ez azt is jelenti, hogy ha kijön
              egy új videó Christian youtube oldalán, akkor az nem kerül fel ide
              automatikusan. Ennélfogva előfordulhat, hogy amikor ezt az oldalt
              nézed, akkor az utolsó pár videó nincs még a listában.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Ha van kedved, segíthetsz - akár ezen github repo fejlesztésében,
              akár csak a &quot;könyvtár adatok&quot; frissítésében. Bármi
              észrevételed, gondolatod van ezzel az oldallal kapcsolatban,
              nyugodtan jelezd nekem emailben:{' '}
              <a href="mailto:bela.varga.work@gmail.com">
                bela.varga.work@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
