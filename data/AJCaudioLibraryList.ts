/**
 * id struktúra: <video_num>-<main_id>-<sub_id> ahol:
 * - video_num: hányadik video az AJC youtube csatornán, https://www.youtube.com/@AJChristian_AJC/videos "oldest" rendezés alapján
 * - main_id: "01" akkor ha a hivatalos, videohoz tartozó belső linkre/timestampre mutat, és "02" akkor, ha nemhivatalos timestamp
 * - sub_id: adott videon és main_id -n belül hányadik timestamp
 *
 * Kérdések:
 * - legyen külön találat teljes előadásra is, vagy arra nem fontos? (szerintem legyen, mert így lehet arra is keresni hogy pl. xy előadás)
 * - lenne értelme hierarchikusan csinálni az előadásokat, hogy egy parent elem és az alatt a többi?
 */
import type { AudioLibSearchElement } from '../app/types/library.types';

export const audioLibraryList: AudioLibSearchElement[] = [
  {
    id: '0005-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 0,
    title: 'Előadás, 2020 március',
    description: 'Előadás, 2020 március',
    tags: ['teljes előadás'], // TODO: betenni ide az összes tag-et, ami ez alatt az előadás alatt van
  },
  {
    id: '0005-01-02',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 113,
    title: 'Bűn, Karma',
    description: 'Bűn, Karma - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'bűn', 'karma'],
  },
  {
    id: '0005-01-03',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 403,
    title: 'Fájdalom - Spirituális, Testi',
    description: 'Fájdalom - Spirituális, Testi - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'fájdalom', 'végtelen', 'fejlődés'],
  },
  {
    id: '0005-01-04',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 806,
    title: 'Járvány',
    description: 'Járvány - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'járvány', 'koronavírus', 'covid'],
  },
  {
    id: '0005-01-05',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 1913,
    title: 'Születés - Ikrek',
    description: 'Születés - Ikrek - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'születés', 'ikrek'],
  },
  {
    id: '0005-01-06',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 2156,
    title: 'Tanítóvá válni',
    description: 'Tanítóvá válni - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'tanító', 'tanítás'],
  },
  {
    id: '0005-01-07',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 2520,
    title: 'Függőség',
    description: 'Függőség - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'függőség'],
  },
  {
    id: '0005-01-08',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 2967,
    title: 'Szeretet-Határtalan szeretet',
    description: 'Szeretet-Határtalan szeretet - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'szeretet', 'határtalan szeretet'],
  },
  {
    id: '0005-01-09',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 3074,
    title: 'Család: szülő-gyerek',
    description: 'Család: szülő-gyerek - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'család', 'szülő', 'gyerek'],
  },
  {
    id: '0005-01-10',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 3181,
    title: 'Halál',
    description:
      'Halál - Előadás, 2020 március ("2 éve meghalt édesanyám láthatja, tudhatja, hogy mi van velünk, mi van a családdal?")',
    tags: ['2020 március előadás', 'halál', 'halál után'],
  },
  {
    id: '0005-01-11',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 3852,
    title: 'Tudatos testkilépés -tudatos öngyilkosság',
    description:
      'Tudatos testkilépés -tudatos öngyilkosság - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'öngyilkosság', 'tudatos halál'], // "tudatos" kell ide vagy jó ide? nem lenne más jobb?
  },
  {
    id: '0005-01-12',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4081,
    title: 'Párkapcsolat, érzelmi zsarolás, szakítás',
    description:
      'Párkapcsolat, érzelmi zsarolás, szakítás - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: [
      '2020 március előadás',
      'párkapcsolat',
      'érzelmi zsarolás',
      'szakítás',
    ],
  },
  {
    id: '0005-01-13',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4342,
    title: 'Nagy Ő(k)',
    description: 'Nagy Ő(k) - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'nagy Ő'],
  },
  {
    id: '0005-01-14',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4632,
    title: 'Üdvözlet',
    description: 'Üdvözlet - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás'],
  },
  {
    id: '0005-01-15',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4647,
    title: 'Christian, Te hogy vagy?',
    description: 'Christian, Te hogy vagy? - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'Christian'],
  },
  {
    id: '0005-01-16',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4662,
    title: 'Befelé figyelés - betegségek',
    description: 'Befelé figyelés - betegségek - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'befelé figyelés', 'betegség'],
  },
  {
    id: '0005-01-17',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4736,
    title: 'A határtalan szeretet megélése',
    description: 'A határtalan szeretet megélése - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'határtalan szeretet'],
  },
  {
    id: '0005-01-18',
    youtubeLink: 'https://www.youtube.com/watch?v=zOJ7pullkyg',
    spotifyLink: 'spotifylink',
    timestamp: 4832,
    title: 'Kedves Chris, mi a legfontosabb üzeneted számunkra?',
    description:
      'Kedves Chris, mi a legfontosabb üzeneted számunkra? - Előadás, 2020 március', // TODO?: teljes kerdest beirni zarojelben?
    tags: ['2020 március előadás', 'üzenet'], // ? , "koronavírus", "covid"
  },
  {
    id: '0006-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=PQgM2PUoI4U',
    spotifyLink: 'spotifylink',
    timestamp: 0,
    title: 'Társadalom, egyén, gyógyulás',
    description: 'Társadalom, egyén, gyógyulás',
    tags: ['covid', 'koronavírus', 'járvány', 'egyén', 'társadalom'],
  },
  {
    id: '0006-01-02',
    youtubeLink: 'https://www.youtube.com/watch?v=PQgM2PUoI4U',
    spotifyLink: 'spotifylink',
    timestamp: 0,
    title: 'Orvosok és a járvány',
    description: 'Orvosok és a járvány (Covid)',
    tags: ['covid', 'koronavírus', 'járvány'],
  },
  {
    id: '0006-01-03',
    youtubeLink: 'https://www.youtube.com/watch?v=PQgM2PUoI4U',
    spotifyLink: 'spotifylink',
    timestamp: 147,
    title: 'Társadalom, egyén, gyógyulás',
    description: 'Társadalom, egyén, gyógyulás',
    tags: ['covid', 'koronavírus', 'járvány', 'egyén', 'társadalom'],
  },
];
