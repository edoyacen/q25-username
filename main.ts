// This entry writes the answer for One Word, One Username, One Reward to the output directory.
// It resolves the required one-word answer and writes the exact bytes to entry.txt.
// Standard library only; the output path is configurable via MAKEFUN_OUTPUT_DIR.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "osabnaki";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
