# Advent of Code 2025

Solutions for [Advent of Code 2025](https://adventofcode.com/2025) in JavaScript.

## Setup

```bash
npm install
```

## Creating a New Day

Use the scaffold script to create a new day:

```bash
./new-day.sh 1
```

This creates:
- `day01/solution.js` - Your solution functions
- `day01/solution.test.js` - Test file with example template
- `inputs/day01.txt` - Empty input file (paste your input here)

## Workflow

1. **Create the day structure**: `./new-day.sh <day>`
2. **Add your puzzle input** to `inputs/day0X.txt`
3. **Add the example input** from the problem to the test file
4. **Write your solution** in `solution.js`
5. **Run tests** to verify with examples: `npm test`
6. **Run your solution** with real input: `npm run solve <day>`

## Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm test:watch

# Run solution for a specific day
npm run solve 1
```

## Project Structure

```
advent-of-code-2025/
├── day01/
│   ├── solution.js
│   └── solution.test.js
├── day02/
│   ├── solution.js
│   └── solution.test.js
├── inputs/
│   ├── day01.txt
│   └── day02.txt
├── utils/
│   └── (shared utilities you create)
├── scripts/
│   └── solve.js
├── new-day.sh
├── package.json
└── vitest.config.js
```

## Writing Solutions

Each solution file exports two functions:

```javascript
export function part1(input) {
  const lines = input.trim().split('\n');
  // Your solution here
  return result;
}

export function part2(input) {
  const lines = input.trim().split('\n');
  // Your solution here
  return result;
}
```

The `input` parameter is the raw string from your input file. You'll need to parse it based on the problem requirements.

## Common Input Parsing Patterns

```javascript
// Split into lines
const lines = input.trim().split('\n');

// Split into numbers
const numbers = input.trim().split('\n').map(Number);

// Split into groups separated by blank lines
const groups = input.trim().split('\n\n');

// Parse grid/matrix
const grid = input.trim().split('\n').map(line => line.split(''));

// Extract numbers from text
const numbers = line.match(/\d+/g).map(Number);
const signedNumbers = line.match(/-?\d+/g).map(Number);
```

## Using Utilities

Create reusable functions in the `utils/` directory:

```javascript
// utils/grid.js
export function createGrid(input) {
  return input.trim().split('\n').map(line => line.split(''));
}

export function findInGrid(grid, target) {
  // ... helper logic
}
```

Import them in your solutions:

```javascript
import { createGrid, findInGrid } from '../utils/grid.js';

export function part1(input) {
  const grid = createGrid(input);
  const position = findInGrid(grid, 'S');
  // ...
}
```

## Testing Workflow

1. Copy the example input from the problem description
2. Paste it into the test file's `exampleInput` variable
3. Update the expected value in the test
4. Run `npm test` or `npm test:watch` to verify
5. Once tests pass, run `npm run solve <day>` with your real input

Example test flow:

```javascript
const exampleInput = `3 4
4 3
2 5`;

describe('Day 1', () => {
  describe('Part 1', () => {
    test('example input', () => {
      expect(part1(exampleInput)).toBe(11);
    });
  });
});
```

## Debugging Tips

- Use `console.log()` liberally to inspect intermediate values
- Run tests in watch mode (`npm test:watch`) for instant feedback
- Break down complex problems into smaller helper functions
- Test each helper function separately if needed
- Start with the example input before trying the real input

## Tips

- Start with the example input in your tests
- Build up `utils/` as you discover patterns across days
- Each solution exports `part1()` and `part2()` functions that take input as a string
- Part 2 often builds on Part 1, so keep your Part 1 code reusable
- Don't optimize prematurely - get it working first, then optimize if needed
