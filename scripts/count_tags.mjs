/**
 * count_tags.mjs
 *
 * Reads all libraryList_part_*.ts data files, extracts every tag string,
 * counts occurrences, sorts by count (descending), and writes the result
 * to tags_count.txt in the same folder as this script.
 *
 * Usage:  node scripts/count_tags.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Data files to process ────────────────────────────────────────────────────
const dataDir = resolve(__dirname, '../data');
const dataFiles = [
  'libraryList_part_01.ts',
  'libraryList_part_02.ts',
  'libraryList_part_03.ts',
  'libraryList_part_04.ts',
];

// ── Tag extraction ────────────────────────────────────────────────────────────
// Matches every quoted string inside a `tags: [ ... ]` block.
// Strategy: find each tags array, then extract all quoted strings from it.
const TAGS_BLOCK_RE = /tags\s*:\s*\[([^\]]*)\]/gs;
const STRING_RE = /'((?:[^'\\]|\\.)*)'/g;

/** @type {Map<string, number>} */
const tagCounts = new Map();

let totalEntries = 0;

for (const filename of dataFiles) {
  const filePath = resolve(dataDir, filename);
  const source = readFileSync(filePath, 'utf-8');

  let tagsBlockMatch;
  TAGS_BLOCK_RE.lastIndex = 0; // reset between files

  while ((tagsBlockMatch = TAGS_BLOCK_RE.exec(source)) !== null) {
    const block = tagsBlockMatch[1];
    let strMatch;
    STRING_RE.lastIndex = 0;

    while ((strMatch = STRING_RE.exec(block)) !== null) {
      const tag = strMatch[1]; // content between the single quotes
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
      totalEntries++;
    }
  }

  console.log(`✔ Processed: ${filename}`);
}

// ── Sort: by count desc, then alphabetically ─────────────────────────────────
const sorted = [...tagCounts.entries()].sort(([tagA, cntA], [tagB, cntB]) => {
  if (cntB !== cntA) return cntB - cntA; // higher count first
  return tagA.localeCompare(tagB, 'hu'); // then A–Z (Hungarian locale)
});

// ── Build output text ─────────────────────────────────────────────────────────
const lines = [
  `Tag counts – AJC Library`,
  `Generated: ${new Date().toISOString()}`,
  `Unique tags: ${sorted.length}  |  Total tag usages: ${totalEntries}`,
  '',
  `${'Count'.padStart(6)}  Tag`,
  `${'------'.padStart(6)}  ---`,
  ...sorted.map(([tag, count]) => `${String(count).padStart(6)}  ${tag}`),
];

const outputPath = resolve(__dirname, 'tags_count.txt');
writeFileSync(outputPath, lines.join('\n'), 'utf-8');

console.log(
  `\n✅ Done! ${sorted.length} unique tags written to:\n   ${outputPath}`,
);
