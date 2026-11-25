// famous-last-words-63e2b0b4: the entry is one line of plain text, the
// funniest last words a phone says as its battery hits 1 percent.
// This program writes that single line to /output/entry.txt, where the
// gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The phone dies the way it lived: burning up in its owner's pocket
// while he swears he only checked the time. No will, no farewell to the
// charger, no pun on one percent — just a phone calling out the lie it
// heard a hundred times a day, with its very last breath. The punch
// lands on the last clause, and the line needs no setup to make sense.
const LINE =
  "I die as I lived: burning up in his pocket while he swore he only checked the time.";

if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-199`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
