// Runs `tsc` for type-checking, then keeps only the diagnostics that belong to
// files inside `src/`. Everything coming from `_carma_monorepo` (pulled in via the
// @carma-* path aliases) is dropped, because that is upstream source and out of scope
// for this repo. Exits 1 if there is at least one error in src/, otherwise 0.

const { spawnSync } = require('node:child_process');

const tscArgs = [
  'tsc',
  '--noEmit',
  '--composite',
  'false',
  '--pretty',
  'false',
  '-p',
  'tsconfig.app.json',
];

const result = spawnSync('npx', tscArgs, {
  encoding: 'utf8',
  shell: process.platform === 'win32',
});

if (result.error) {
  console.error('Failed to run tsc:', result.error);
  process.exit(2);
}

const output = `${result.stdout || ''}${result.stderr || ''}`;
const lines = output.split(/\r?\n/);

// A diagnostic header looks like: src/foo/bar.tsx(12,34): error TS1234: message
// Continuation lines (e.g. "  The file is in the program because:") are indented and
// belong to the header above them.
const headerRe = /^(\S.*?)\(\d+,\d+\):\s+(error|warning)\s+TS\d+:/;
const isSrc = (path) => /^src[\\/]/.test(path);

const kept = [];
let keepingBlock = false;

for (const line of lines) {
  const match = line.match(headerRe);
  if (match) {
    keepingBlock = isSrc(match[1]);
    if (keepingBlock) kept.push(line);
  } else if (keepingBlock && /^\s/.test(line)) {
    // Indented continuation of a kept diagnostic.
    kept.push(line);
  }
}

const errorCount = kept.filter((line) => headerRe.test(line)).length;

if (errorCount > 0) {
  console.log(kept.join('\n'));
  console.log(`\n${errorCount} TypeScript error(s) in src/.`);
  process.exit(1);
}

console.log('No TypeScript errors in src/.');
process.exit(0);
