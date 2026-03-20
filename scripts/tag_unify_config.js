/**
 * tag_unify_config.ts
 *
 * Tag unification map for the AJC library.
 *
 * Format:
 *   '<tag to replace>': '<canonical tag to use instead>',
 *
 * Rules:
 *   - Keys   = tags that will be REMOVED/replaced in the data files
 *   - Values = tags that will be KEPT / inserted in their place
 *   - If a canonical tag is already present on the same entry the key tag
 *     will simply be removed (no duplicates are introduced).
 *   - The value itself must NEVER appear as a key in this map (no chains).
 *
 * Sections mirror the tag_change.md analysis document.
 */

export const tagUnifyMap = {
  // ── §1 Case / capitalisation ────────────────────────────────────────────────
  Jézus: 'jézus',
  Isten: 'isten',
  Oroszország: 'oroszország',
  Ukrajna: 'ukrajna',
  Magyarország: 'magyarország',
  AI: 'ai',
  UFO: 'ufo',
  ufó: 'ufo',
  ufók: 'ufo',
  UFÓK: 'ufo',
  'Rudolf Steiner': 'rudolf steiner',
  Krisztus: 'krisztus',
  Szeretetmozaik: 'szeretetmozaik',
  Atlantisz: 'atlantisz',
  USA: 'usa',
  Föld: 'föld',
  Kína: 'kína',
  'Tudatos Figyelem': 'tudatos figyelem',
  ADHD: 'adhd',

  // ── §2 Singular / plural ────────────────────────────────────────────────────
  kapcsolatok: 'kapcsolat',
  gondolatok: 'gondolat',
  érzések: 'érzés',
  álmok: 'álom',
  jelenségek: 'jelenség',
  szimbólumok: 'szimbólum',
  törvények: 'törvény',
  élmények: 'élmény',
  változások: 'változás',
  döntések: 'döntés',
  gyerekek: 'gyerek',
  gyermekek: 'gyerek',
  szülők: 'szülő',
  tanfolyamok: 'tanfolyam',
  kurzusok: 'kurzus',
  tanítások: 'tanítás',
  tanítványok: 'tanítvány',
  tanítók: 'tanító',
  barátok: 'barátság',
  látomások: 'látomás',
  látók: 'látó',
  rezgések: 'rezgés',
  bolygók: 'bolygó',
  válaszok: 'válasz',
  egyének: 'egyén',
  vitaminok: 'vitamin',
  könyvek: 'könyv',
  kérdések: 'kérdés',
  szomszédok: 'szomszéd',
  pénzügyek: 'pénzügy',
  technikák: 'technika',
  gyakorlatok: 'gyakorlat',
  // emotions: keep the plural 'érzelmek' (higher count)
  érzelem: 'érzelmek',
  minták: 'minta',
  hatások: 'hatás',
  lezárások: 'lezárás',
  képesség: 'képességek',
  // previous lives: keep 'előző életek'
  életek: 'előző életek',
  'előző élet': 'előző életek',

  // ── §3 Semantic synonyms ────────────────────────────────────────────────────

  // §3a Halál utáni lét
  'halál utáni lét': 'halál után',
  'halál utáni élet': 'halál után',
  'élet a halál után': 'halál után',
  'halál utáni állapot': 'halál után',
  'halál utáni tapasztalat': 'halál után',
  'halál utáni tudat': 'halál után',
  'halál utáni események': 'halál után',
  'halál utáni fejlődés': 'halál után',
  'halál utáni forma': 'halál után',

  // §3b Reinkarnáció
  újjászületés: 'reinkarnáció',
  újratestesülés: 'reinkarnáció',
  leszületés: 'reinkarnáció',
  megtestesülés: 'reinkarnáció',
  inkarnáció: 'reinkarnáció',
  'következő élet': 'reinkarnáció',

  // §3c Ego
  egó: 'ego',
  // egoizmus: 'ego',

  // §3d Nárcizmus
  narcizmus: 'nárcizmus',
  nárcisztikus: 'nárcizmus',
  'nárcisztikus kapcsolat': 'nárcizmus',
  'narcisztikus személyiségzavar': 'nárcizmus',

  // §3e Párkapcsolat
  párkapcsolatok: 'párkapcsolat',

  // §3f Sors / predesztináció
  'eleve elrendeltség': 'sors',
  predesztináció: 'sors',
  determináció: 'sors',
  'előre elrendeltség': 'sors',
  'előre megírt élet': 'sors',
  'előre megírtság': 'sors',
  'meg van írva': 'sors',

  // §3g Karma
  karmikus: 'karma',
  'karmikus adósság': 'karma',
  'karmikus terhek': 'karma',
  'csoport karma': 'karma',
  'csoportos karma': 'karma',
  'negatív karma': 'karma',

  // §3h Tudatosság
  tudatosodás: 'tudatosság',
  'tudatos élet': 'tudatosság',
  'tudatos ember': 'tudatosság',
  öntudatosság: 'tudatosság',

  // §3i Jelenlét (tudatos jelenlét / jelen pillanat)
  // 'tudatos jelenlét': 'jelenlét',
  'itt és most': 'jelenlét',
  // jelen: 'jelenlét',

  // §3j Fejlődés
  // 'személyes fejlődés': 'fejlődés',
  // 'egyéni fejlődés': 'fejlődés',
  // 'belső fejlődés': 'fejlődés',
  // 'lelki fejlődés': 'fejlődés',
  // 'szellemi fejlődés': 'fejlődés',
  // 'spirituális fejlődés': 'fejlődés',

  // §3k Gyógyulás / gyógyítás
  // gyógyítás: 'gyógyulás',
  öngyógyítás: 'gyógyulás',
  'lelki gyógyulás': 'gyógyulás',
  'kvantum gyógyítás': 'gyógyítás',
  kvantumgyógyítás: 'gyógyítás',
  szellemgyógyászat: 'gyógyítás',
  energiagyógyászat: 'gyógyítás',
  távolgyógyítás: 'gyógyítás',

  // §3l Betegség
  'testi betegségek': 'betegség',
  'mentális betegség': 'betegség',
  'pszichés betegség': 'betegség',
  'krónikus betegség': 'betegség',
  'veleszületett betegség': 'betegség',
  'daganatos betegség': 'betegség',

  // §3m Félelem
  félelemkeltés: 'félelem',

  // §3n Energia, energetika
  energiák: 'energia',
  // energetika: 'energia',
  energiamező: 'energia',
  energiacsere: 'energia',
  energiafolyam: 'energia',
  energiaközpontok: 'energia',
  'energetikai kapcsolat': 'energetika',
  'energetikai tisztítás': 'energetika',
  'energetikai hatás': 'energetika',
  'energetikai lenyomat': 'energetika',
  'energetikai változás': 'energetika',

  // §3o Manifesztáció / vonzás törvénye
  // manifesztáció: 'vonzás törvénye',
  manifestáció: 'manifesztáció',
  valóságteremtés: 'manifesztáció',
  bevonzás: 'vonzás törvénye',

  // §3p Megbocsátás
  // jóvátétel: 'megbocsátás',
  bocsánatkérés: 'megbocsátás',

  // §3q Önismeret
  önreflexió: 'önismeret',
  önmegismerés: 'önismeret',
  önvizsgálat: 'önismeret',
  önmegfigyelés: 'önismeret',
  önmegvalósítás: 'önismeret',
  önkifejezés: 'önismeret',

  // §3r Önszeretet / önértékelés – keeping separate per review note;
  // only merge clear variants:
  önbizalomhiány: 'önbizalom',

  // §3s Segítség / segítés
  // segítés: 'segítség',
  'segítő szakma': 'segítés',
  segítségnyújtás: 'segítés',
  'segítő munka': 'segítés',
  'segítő szerep': 'segítés',
  'segítség elfogadása': 'segítség',
  'szociális segítség': 'segítés',
  'mások segítése': 'segítés',
  'önzetlen segítség': 'segítség',
  // 'segítők' (8) and 'segítő' (2) kept separate as they denote persons, not the act

  // §3t Háború
  // 'orosz-ukrán háború': 'háború',
  'ukrán orosz háború': 'orosz-ukrán háború',
  'orosz ukrán háború': 'orosz-ukrán háború',
  'nyersanyag háború': 'nyersanyagháború',
  // nyersanyagháború: 'háború',
  'harmadik világháború': 'világháború',
  'III. világháború': 'világháború',
  'II. Világháború': 'világháború',
  világháború: 'világháború',

  // §3u Meditáció
  'transzcendentális meditáció': 'meditáció',
  'vezetett meditáció': 'meditáció',
  'igazi meditáció': 'meditáció',
  'halál meditáció': 'meditáció',
  békemeditáció: 'meditáció',
  'meditáció hatása': 'meditáció',

  // §3v Lelkiállapot
  'lelki állapot': 'lelkiállapot',
  lelki: 'lelkiállapot',

  // §3w Álom
  álmodás: 'álom',
  álmodozás: 'álom',
  'közös álom': 'álom',
  'tudatos álom': 'tudatos álmodás',

  // §3x Testkilépés
  'testen kívüli élmény': 'testkilépés',
  // 'test nélküli létezés': 'testkilépés',

  // §3y Megvilágosodás
  felébredés: 'megvilágosodás',
  ébredés: 'megvilágosodás',
  'spirituális ébredés': 'megvilágosodás',
  eszmélés: 'megvilágosodás',
  felébresztés: 'megvilágosodás',

  // §3z Spirituális út
  'lelki út': 'spirituális út',
  'szellemi út': 'spirituális út',

  // ── §5 Typos / inconsistent spelling ────────────────────────────────────────
  ezoterika: 'ezotéria',
  ezoterikus: 'ezotéria',
  antroposzófia: 'antropozófia',
  pszichoszomatikus: 'pszichoszomatika',
  'déjà vu': 'deja vu',
  // 'csend tábor': 'csend',
  csendtábor: 'csend tábor',
  'lelkiismeret-furdalás': 'lelkiismeretfurdalás',
  'vízöntő korszak': 'vízöntőkor',
  'nazca vonalak': 'nazca-vonalak',
  // 'nyersanyag háború' → 'háború' already handled in §3t above
  titkosügynök: 'titkos ügynök',
};
