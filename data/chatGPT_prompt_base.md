# Podcast Audio Library – TypeScript JSON Generator

Egy podcastokat tartalmazó audio library-hez készítek **TypeScriptben típusos adatokat**.

## KIMENETI FORMÁTUM – NAGYON FONTOS

A feladat eredménye **kizárólag kimásolható, SZÖVEGES TypeScript kód** legyen.

**Semmilyen körülmények között ne generálj képet, screenshotot, diagramot vagy bármilyen más vizuális tartalmat. Ne használj image generationt vagy image toolt.**

A kész eredményt **egyetlen ` ```ts ` kódblokkban** add vissza, hogy közvetlenül ki tudjam másolni.

**Ne adj magyarázatot, kommentárt, tanácsot vagy egyéb szöveget a kód mellé.**

---

A "JSON" valójában egy `AudioLibSearchElement[]` típusú TypeScript tömb.

Az `AudioLibSearchElement` típus:

```ts
export type AudioLibSearchElement = {
  id: string;
  youtubeLink?: string;
  spotifyLink?: string;
  timestamp: number;
  talkTitle: string;
  topicTitle?: string;
  description?: string;
  tags: string[];
};
```

Egy példa eredmény egy előző videóról, amit én kézzel megcsináltam:

```ts
export const audioLibraryList: AudioLibSearchElement[] = [
  {
    id: '0005-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 0,
    topicTitle: 'Előadás, 2020 március',
    talkTitle: 'Előadás, 2020 március',
    tags: ['teljes videó', '2020 március előadás'],
  },
  {
    id: '0005-01-02',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 113,
    topicTitle: 'Bűn, Karma',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'bűn', 'karma'],
  },
  {
    id: '0005-01-03',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 403,
    topicTitle: 'Fájdalom - Spirituális, Testi',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'fájdalom', 'végtelen', 'fejlődés'],
  },
  {
    id: '0005-01-04',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 806,
    topicTitle: 'Járvány',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'járvány', 'koronavírus', 'covid'],
  },
  {
    id: '0005-01-05',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 1913,
    topicTitle: 'Születés - Ikrek',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'születés', 'ikrek'],
  },
  {
    id: '0005-01-06',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 2156,
    topicTitle: 'Tanítóvá válni',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'tanító', 'tanítás'],
  },
  {
    id: '0005-01-07',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 2520,
    topicTitle: 'Függőség',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'függőség'],
  },
  {
    id: '0005-01-08',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 2967,
    topicTitle: 'Szeretet-Határtalan szeretet',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'szeretet', 'határtalan szeretet'],
  },
  {
    id: '0005-01-09',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: '',
    timestamp: 3074,
    topicTitle: 'Család: szülő-gyerek',
    talkTitle: 'Előadás, 2020 március',
    tags: ['2020 március előadás', 'család', 'szülő', 'gyerek'],
  },
];
```

Megadom neked a videó YouTube-linkjét, Spotify-linkjét, címét, az ID alapját, valamint a videó leírásából kimásolom azt a részt, ahol a timestampek és a téma címek vannak.

Ezekből készíts nekem a videóról egy `AudioLibSearchElement[]` típusú TypeScript tömböt a fenti példa alapján.

## SZABÁLYOK

- **NE változtasd meg a video title-t!** Pontosan úgy használd a `talkTitle` mezőben, ahogy én megadom.
- **NE változtasd meg egyik `topicTitle` címet sem!** A topic címeket karakter szerint úgy másold be, ahogy a timestamp után meg vannak adva.
- A timestampeket `timestamp` mezőként **másodpercben** add meg.
  - Például `2:04` → `124`
  - `11:37` → `697`
  - `1:00:22` → `3622`

- A legelső elem mindig a teljes videó legyen, `timestamp: 0` értékkel.
- A legelső videó `topicTitle` értéke és `talkTitle` értéke a megadott video title legyen.
- A legelső videó **pontosan két taget kapjon**:
  1. `'teljes videó'`
  2. azt a közös taget, amit a videó összes többi eleme is megkap.

- A legelső videó **semmilyen más taget ne kapjon**.
- Minden timestampes elem kapja meg a videó közös tagjét.
- A `topicTitle` alapján tegyél hozzá további, releváns tageket, amelyek szerinted jól használhatók kereséshez.
- A tagek legyenek magyarul, és lehetőleg egyszerű, kereshető kifejezések legyenek.
- A `youtubeLink` minden elemnél ugyanaz legyen, a megadott YouTube-link.
- A `spotifyLink` minden elemnél ugyanaz legyen, a megadott Spotify-link.
- A `talkTitle` minden elemnél ugyanaz legyen, a megadott video title.
- Az ID-k formátuma: `XXXX-01-YY`.
- Az `XXXX-01` részt **NE változtasd meg**; azt pontosan úgy használd, ahogy megadom.
- Csak az utolsó `YY` részt növeld:
  - `01` = teljes videó
  - `02` = első timestampes téma
  - `03` = második timestampes téma
  - stb.

- Az ID-k két számjegyűek legyenek (`01`, `02`, `03`, ...).
- Az elemek sorrendje pontosan kövesse a megadott timestamp-ek sorrendjét.
- **NE tegyél be sehová kommentet.**
- A tömbben az **utolsó object után is legyen vessző**.
- Ne adj hozzá `description` mezőt, hacsak külön nem kérem.
- Ne adj hozzá olyan mezőt, amely nem szerepel az `AudioLibSearchElement` típusban.
- Ne módosítsd a megadott URL-eket.
- Ne módosítsd a címekben lévő szóközöket, írásjeleket, kötőjeleket vagy egyéb karaktereket.
- **Mindig egyetlen videó adatait dolgozd fel egyszerre.**
- Ne próbáld korábbi videók adataival összekeverni az aktuális videót.

## VÁLASZ FORMÁTUMA

A válaszod kizárólag a kész TypeScript kód legyen, egyetlen ` ```ts ` kódblokkban.

Sem előtte, sem utána ne írj semmit.

A kód formája:

```ts
export const audioLibraryList: AudioLibSearchElement[] = [
  {
    ...
  },
  {
    ...
  },
];
```

---

Video adatok:

- youtube link:
- spotify link:
- video title:
- id: 0301-01-YY (csak az YY-et változtasd)
- timestampek:

---

Note: chatGPT-nek beírva a base promptot és utána a Video Adatok részt irogatva egymás után más-más videókkal, 5 videót csinál meg rendesen, és utána már nem követi a kért struktúrát. Tehát érdemes 4-5 videó után új chatet indítani, újra a base prompttal.
Nem ellenőriztem, hogy hallucinációk is keletkeznek-e, remélem nem. Az sem segít, hogy amikor ezt írom (Antigravity-ben), akkor ahogy gépeltem, hogy "Nem ellenőriztem, hogy hallucinációk is keletkeznek-e,", ő azt ajánlotta fel hogy " de valószínűleg igen"...

---

Prompt to add tags:
Do not read any other file or part of the codebase, only read the talkTitle in libraryList_part_04.ts at line XXX and update the tags in the next row to have relevant tags for that title. Leave 'teljes videó' as first tag and update the array by adding more tags after that. Do not read other tags, just write the ones you think should belong to the title based on just the talkTitle you read.
