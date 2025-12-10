#!/bin/bash

# Check if day number is provided
if [ -z "$1" ]; then
  echo "Usage: ./new-day.sh <day>"
  echo "Example: ./new-day.sh 1"
  exit 1
fi

DAY=$1
DAY_PADDED=$(printf "%02d" $DAY)
DAY_DIR="day${DAY_PADDED}"

# Check if day already exists
if [ -d "$DAY_DIR" ]; then
  echo "Error: $DAY_DIR already exists!"
  exit 1
fi

echo "Creating $DAY_DIR..."

# Create day directory
mkdir -p "$DAY_DIR"

# Create solution.js
cat > "$DAY_DIR/solution.js" << 'EOF'
export function part1(input) {
  const lines = input.trim().split('\n');
  
  // TODO: Implement solution
  
  return 0;
}

export function part2(input) {
  const lines = input.trim().split('\n');
  
  // TODO: Implement solution
  
  return 0;
}
EOF

# Create solution.test.js
cat > "$DAY_DIR/solution.test.js" << EOF
import { describe, test, expect } from 'vitest';
import { part1, part2 } from './solution.js';

const exampleInput = \`
\`;

describe('Day ${DAY}', () => {
  describe('Part 1', () => {
    test('example input', () => {
      expect(part1(exampleInput)).toBe(0);
    });
  });

  describe('Part 2', () => {
    test('example input', () => {
      expect(part2(exampleInput)).toBe(0);
    });
  });
});
EOF

# Create empty input file
touch "inputs/day${DAY_PADDED}.txt"

echo "✅ Created $DAY_DIR/"
echo "✅ Created $DAY_DIR/solution.js"
echo "✅ Created $DAY_DIR/solution.test.js"
echo "✅ Created inputs/day${DAY_PADDED}.txt"
echo ""
echo "Next steps:"
echo "  1. Paste your input into inputs/day${DAY_PADDED}.txt"
echo "  2. Add example input to $DAY_DIR/solution.test.js"
echo "  3. Start solving!"
echo ""
echo "Run tests: npm test"
echo "Run solution: npm run solve ${DAY}"
