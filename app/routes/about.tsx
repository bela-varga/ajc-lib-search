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

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Miben jobb/más ez, mint ha youtube-on keresek?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Youtube-on is lehet keresni A. J. Christian youtube csatornáján,
              és a youtube kereső keres a videó leírásában is, így meg tud
              találni akár egy-egy témát egy előadáson belül.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ugyanakkor csak ennyit tud, ennél többet nem. Mivel ezen az
              oldalon kézzel is be tudunk állítani címkéket és plusz leírást a
              videókhoz, így ugyanazt a videó részt akár sokkal több kereső
              kifejezés által el lehet érni.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Szeretném a legtöbb videónál, hogy emberileg is át legyen nézve és
              így kézzel lehet beírni sok címkét és leírást egy-egy témához.
              Ugyanakkor jelenleg az fért bele az időmbe, hogy sok videóhoz
              AI-al vettem ki a téma címeket és címkéket. Mindenesetre nagy
              eséllyel így is nagyobb eséllyel találsz meg valamit itt, mint a
              youtube keresőben.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-2">
              Hogyan segíthetsz?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ha van kedved, segíthetsz - akár ezen github repo fejlesztésében,
              akár csak a &quot;könyvtár adatok&quot; frissítésében. Bármi
              észrevételed, gondolatod van ezzel az oldallal kapcsolatban,
              nyugodtan jelezd nekem emailben:{' '}
              <a href="mailto:bela.varga.work@gmail.com">
                bela.varga.work@gmail.com
              </a>
              .
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Az oldal fel van készítve arre, hogy Spotify linkeket is kezeljen,
              de én nem vagyok fent Spotify-on és őszintén, annyira nem is
              érdekel. Ha szeretnéd, hogy Spotify linkek is legyenek, keress
              meg!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
