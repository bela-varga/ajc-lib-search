/**
 * id struktúra: <video_num>-<main_id>-<sub_id> ahol:
 * - video_num: hányadik video az AJC youtube csatornán, https://www.youtube.com/@AJChristian_AJC/videos "oldest" rendezés alapján
 * - main_id: "01" akkor ha a hivatalos, videohoz tartozó belső linkre/timestampre mutat, és "02" akkor, ha nemhivatalos timestamp
 * - sub_id: adott videon és main_id -n belül hányadik timestamp
 *
 * NOTE: This curated data is for personal and educational use.
 * Commercial redistribution or usage of these timestamps and tags requires permission.
 * See README.md for full licensing details.
 */
import type { AudioLibSearchElement } from '../app/types/library.types';

export const audioLibraryList_part_02: AudioLibSearchElement[] = [
  // note: tag-ek AI által generálva 'Képes távolról ártani egy szellemgyógyász?'-hoz
  {
    id: '0121-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=VgijQgV79AA',
    spotifyLink: '',
    timestamp: 0,
    topicTitle: 'Képes távolról ártani egy szellemgyógyász?',
    talkTitle: 'Képes távolról ártani egy szellemgyógyász?',
    tags: [
      'teljes videó',
      'szellemgyógyászat',
      'rontás',
      'távgyógyítás',
      'ártás',
      'spiritualitás',
    ],
  },
  // note: tag-ek AI által generálva 'Hogyan lehetek túl a depresszión?'-hoz
  {
    id: '0122-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=Kxob0s59xOo',
    spotifyLink: '',
    timestamp: 0,
    topicTitle: 'Hogyan lehetek túl a depresszión?',
    talkTitle: 'Hogyan lehetek túl a depresszión?',
    tags: [
      'teljes videó',
      'depresszió',
      'lélek',
      'öngyógyítás',
      'szomorúság',
      'kilábalás',
      'pszichológia',
    ],
  },
  // note: tag-ek AI által generálva 'Min múlik egy súlyos baleset végkimenetele?'-hoz
  {
    id: '0123-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=Tb560J1I7ho',
    spotifyLink: '',
    timestamp: 0,
    topicTitle: 'Min múlik egy súlyos baleset végkimenetele?',
    talkTitle: 'Min múlik egy súlyos baleset végkimenetele?',
    tags: [
      'teljes videó',
      'baleset',
      'sors',
      'karma',
      'túlélés',
      'élet és halál',
    ],
  },
  // note: tag-ek AI által generálva '"Mindenkinek adok szeretetet, de nem tudok elfogadni. Mit csináljak?"'-hoz
  {
    id: '0124-01-01',
    youtubeLink: 'https://www.youtube.com/watch?v=4d-g1APi-JE',
    spotifyLink: '',
    timestamp: 0,
    topicTitle:
      '"Mindenkinek adok szeretetet, de nem tudok elfogadni. Mit csináljak?"',
    talkTitle:
      '"Mindenkinek adok szeretetet, de nem tudok elfogadni. Mit csináljak?"',
    tags: [
      'teljes videó',
      'szeretet',
      'elfogadás',
      'adok-kapok egyensúlya',
      'önismeret',
      'ego',
    ],
  },
  // note: tag-ek AI által generálva 'TalkTitleComesHere'-hoz
];

// for one-item video, just copy and change the following:
/*
  // note: tag-ek AI által generálva 'TalkTitleComesHere'-hoz
  {
    id: '0107-01-01',
    youtubeLink: 'youtubeLinkComesHere',
    spotifyLink: '',
    timestamp: 0,
    topicTitle: 'topicTitleComesHere',
    talkTitle: 'TalkTitleComesHere',
    tags: ['teljes videó'],
  },
/* */
