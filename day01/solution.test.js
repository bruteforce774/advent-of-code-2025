import { describe, test, expect } from 'vitest';
import { part1, part2 } from './solution.js';

const exampleInput = `1
2
3
4
5`;

describe('Day 1', () => {
  describe('Part 1', () => {
    test('example input', () => {
      expect(part1(exampleInput)).toBe(15); // 1+2+3+4+5 = 15
    });
  });

  describe('Part 2', () => {
    test('example input', () => {
      expect(part2(exampleInput)).toBe(6); // 2+4 = 6
    });
  });
});
