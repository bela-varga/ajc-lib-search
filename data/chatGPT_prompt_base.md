Egy podcasteket tartalmazó audio library-hez csinálok json-t, de typescriptben, hogy típusos legyen. Ebben kérlek, hogy segíts.

A "json"-ban AudioLibSearchElement[] van, és ez az AudioLibSearchElement típus:

```
export type AudioLibSearchElement = {
    id: string;
    youtubeLink?: string;
    spotifyLink?: string;
    timestamp: number;
    talkTitle: string;
    topicTitle?: string;
    description?: string;
    tags: string[];
}
```

Egy példa eredmény egy előző videóról, amit én kézzel megcsináltam:

```
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
  }
];
```

Megadom neked a video youtube linkjét, és a videó leírásából kimásolom azt a részt, ahol a timestampek és a téma címek vannak.
Ebből kérlek csinálj nekem a videóról egy "json"-t, a fenti példa alapján.

A video id-ja nézzen ki így: pl. 0007-01-XX - ahol csak az XX részt változtatod, és azt mondja meg, hogy a videón belül hányadik timestamp.
A 01 maga a teljes videó, "teljes videó" tag-gel, utána jönnek a timestampes részek.
FONTOS:

- NE változtasd meg semelyik topic címet sem, úgy másold be, ahogy a timestamp után meg van adva!
- a legelső videó "teljes video" tag-et kap, valamint azt a tag-et amit minden más videó is megkap a videón belül. A legelső videó CSAK ezt a kettő tag-et kapja, másikat nem.
- ne tegyél be sehova sem kommentet
- ne adj további tanácsokat, már másik chat-ben programozó AI-al meg lett beszélve a struktúra és a felhasználás, csak a "json"-generálást kérem tőled
- a topicTitle alapján tegyél be tag-eket, amik szerinted megfelelnek az adott címhez
- a tömbben az utolsó object után is tegyél vesszőt!

Kérlek csak annyit válaszolj hogy "Rendben, várom az adatokat, és utána adom az adatokat, egyszerre mindig csak egy videóhoz.

---

Video adatok:

- video link:
- video title:
- id: 0101-01-XX (csak az XX-et változtasd)
- timestampek:

---

Note: chatGPT-nek beírva a base promptot és utána a Video Adatok részt irogatva egymás után más-más videókkal, 5 videót csinál meg rendesen, és utána már nem követi a kért struktúrát. Tehát érdemes 4-5 videó után új chatet indítani, újra a base prompttal.
Nem ellenőriztem, hogy hallucinációk is keletkeznek-e, remélem nem. Az sem segít, hogy amikor ezt írom (Antigravity-ben), akkor ahogy gépeltem, hogy "Nem ellenőriztem, hogy hallucinációk is keletkeznek-e,", ő azt ajánlotta fel hogy " de valószínűleg igen"...

---

Antigravity prompt to add tags:
Read the talkTitle in libraryList_part_02.ts at line XXX and update the tags in the next row to have relevant tags for that title. Do not read other tags, just write the ones you think should belong to the title based on just the talkTitle.
