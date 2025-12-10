import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const day = process.argv[2];

if (!day) {
  console.error('Usage: npm run solve <day>');
  console.error('Example: npm run solve 1');
  process.exit(1);
}

const dayPadded = day.padStart(2, '0');
const solutionPath = path.join(__dirname, '..', `day${dayPadded}`, 'solution.js');
const inputPath = path.join(__dirname, '..', 'inputs', `day${dayPadded}.txt`);

if (!fs.existsSync(solutionPath)) {
  console.error(`Solution not found: day${dayPadded}/solution.js`);
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Input not found: inputs/day${dayPadded}.txt`);
  process.exit(1);
}

console.log(`\n🎄 Advent of Code 2025 - Day ${day} 🎄\n`);

const { part1, part2 } = await import(solutionPath);
const input = fs.readFileSync(inputPath, 'utf-8');

console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
console.log();
