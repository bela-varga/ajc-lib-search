import { ExternalLink } from '~/components/ExternalLink';
import { audioLibraryList } from '../../data/AJCaudioLibraryList';

const lastEntry = audioLibraryList[audioLibraryList.length - 1];

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
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A lista jelenleg az{' '}
              <ExternalLink
                className="underline text-blue-600 dark:text-blue-400"
                href={lastEntry.youtubeLink || ''}
              >
                {lastEntry.talkTitle}
              </ExternalLink>{' '}
              videóig tartalmaz adatokat.
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
              Ez az oldal alapvetően 2 dologban tud többet, mint a youtube
              kereső:
            </p>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 dark:text-gray-300">
                Ezen az oldalon tudsz a találotokon belül tovább keresni.
                Például rákeresel arra, hogy &quot;halál&quot;, és van több
                tucat találat. Szűkíted a keresést azzal, hogy rákeresel arra
                is, hogy &quot;lélek&quot; (elég csak rákattintani a
                &quot;lélek&quot; címkére az egyik találatnál). Így már csak
                azokat a videókat látod, ahol mindkét kifejezés szerepel. Ha
                szeretnéd, ezt még tovább szűkítheted, akármennyi
                keresőkifejezést használva. Lehet, hogy youtube-on is tudsz így
                keresni, de itt biztos sokkal kényelmesebb.
              </li>
              <li className="text-gray-700 dark:text-gray-300">
                <p>
                  Mivel ezen az oldalon kézzel is be tudunk állítani címkéket és
                  plusz leírást a videókhoz, így ugyanazt a videó részt akár
                  sokkal több kereső kifejezés által el lehet érni.
                </p>
                <p>
                  Például egy előadásban van egy olyan rész, hogy: &quot;Elhunyt
                  az édesanyám&quot;. Ezt ezen az oldalon meg tudod találni a
                  &quot;gyász&quot;, &quot;halál&quot;, &quot;veszteség&quot;
                  címkékre keresve is.
                </p>
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sajnos nincs időm minden videót megnézni és beírni a címkéket, így
              a legtöbb videóhoz AI-al generáltatom a hozzá tartozó címkéket.
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
              de én nem vagyok fent Spotify-on. Ha szeretnéd, hogy Spotify
              linkek is legyenek, keress meg!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
