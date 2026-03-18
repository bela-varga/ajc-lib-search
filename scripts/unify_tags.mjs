/**
 * unify_tags.mjs
 *
 * Reads the tag unification config (tag_unify_config.ts), then walks through
 * all libraryList_part_*.ts data files and:
 *   1. Replaces every tag listed as a key in `tagUnifyMap` with its value.
 *   2. De-duplicates the resulting tag array per entry (in case the canonical
 *      tag was already present alongside the one being replaced).
 *   3. Writes the modified file back in-place.
 *
 * Safety:
 *   - Operates purely in the `tags: [...]` arrays – nothing else is touched.
 *   - Backs up each file to <filename>.bak before writing (pass --no-backup
 *     to skip).
 *   - Runs in dry-run mode by default; pass --write to actually save changes.
 *
 * Usage:
 *   node scripts/unify_tags.mjs            # dry-run (shows diff summary)
 *   node scripts/unify_tags.mjs --write    # apply changes
 *   node scripts/unify_tags.mjs --write --no-backup
 */

import { readFileSync, writeFileSync, copyFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { tagUnifyMap } from './tag_unify_config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── CLI flags ─────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN = !args.includes('--write');
const NO_BACKUP = args.includes('--no-backup');

if (DRY_RUN) {
  console.log('🔍  DRY-RUN mode – no files will be changed. Pass --write to apply.\n');
} else {
  console.log('✏️   WRITE mode – files will be modified in-place.\n');
}

if (!tagUnifyMap) {
  console.error('❌  Could not load tagUnifyMap from tag_unify_config.js');
  process.exit(1);
}

console.log(
  `📋  Config loaded: ${Object.keys(tagUnifyMap).length} replacements.\n`,
);

// ── Data files (auto-discovered) ─────────────────────────────────────────────
const dataDir = resolve(__dirname, '../data');
const dataFiles = readdirSync(dataDir)
  .filter((f) => f.startsWith('libraryList_part_'))
  .sort();

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Process a single `tags: [ ... ]` block string and return the modified version
 * plus a list of changes made.
 */
function processTagsBlock(block) {
  // Extract each quoted tag value (single-quoted strings).
  // We collect them, transform, then rebuild the block preserving formatting.
  const changes = [];

  const newBlock = block.replace(/'((?:[^'\\]|\\.)*)'/g, (match, tag) => {
    if (tagUnifyMap[tag]) {
      const canonical = tagUnifyMap[tag];
      if (canonical !== tag) {
        changes.push({ from: tag, to: canonical });
        return `'${canonical}'`;
      }
    }
    return match; // unchanged
  });

  return { newBlock, changes };
}

/**
 * After replacements some blocks may contain duplicate canonical tags
 * (when the canonical was already present alongside the replaced tag).
 * This function de-duplicates the tag array for one entry.
 */
function cleanTagsBlock(block) {
  // Collect all tags in order, skipping duplicates.
  const seen = new Set();
  const tags = [];

  const matches = block.matchAll(/'((?:[^'\\]|\\.)*)'/g);
  for (const [, tag] of matches) {
    if (!seen.has(tag)) {
      seen.add(tag);
      tags.push(tag);
    }
  }

  // Preserve the original indentation style by inspecting the first tag.
  const indentMatch = block.match(/\n(\s+)'/);
  const isMultiLine = indentMatch !== null;
  const indent = indentMatch ? indentMatch[1] : '';

  if (isMultiLine) {
    if (tags.length === 0) return '[]';
    return '[\n' + tags.map((t) => `${indent}'${t}',`).join('\n') + '\n' + indent.slice(2) + ']';
  } else {
    // Single-line: e.g.  ['tag1', 'tag2']
    return '[' + tags.map((t) => `'${t}'`).join(', ') + ']';
  }
}

// ── Process each file ─────────────────────────────────────────────────────────
let totalReplacements = 0;
let totalFiles = 0;

for (const filename of dataFiles) {
  const filePath = resolve(dataDir, filename);
  const source = readFileSync(filePath, 'utf-8');

  let modified = source;
  let fileReplacements = 0;

  // Match each `tags: [ ... ]` block (including multi-line arrays).
  const TAGS_BLOCK_RE = /tags\s*:\s*(\[(?:[^\]]*)\])/gs;

  modified = modified.replace(TAGS_BLOCK_RE, (fullMatch, arrayContent) => {
    const { newBlock, changes } = processTagsBlock(arrayContent);

    fileReplacements += changes.length;

    if (changes.length === 0) return fullMatch; // nothing to do

    const cleaned = cleanTagsBlock(newBlock);

    return fullMatch.replace(arrayContent, cleaned);
  });

  if (fileReplacements === 0) {
    console.log(`  ─ ${filename}: no changes`);
    continue;
  }

  totalFiles++;
  totalReplacements += fileReplacements;

  console.log(`  ✔ ${filename}: ${fileReplacements} replacement(s)`);

  if (!DRY_RUN) {
    if (!NO_BACKUP) {
      copyFileSync(filePath, filePath + '.bak');
    }
    writeFileSync(filePath, modified, 'utf-8');
  }
}

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Files with changes : ${totalFiles}
  Total replacements : ${totalReplacements}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

if (DRY_RUN && totalReplacements > 0) {
  console.log('\n  Run with --write to apply these changes.');
}
