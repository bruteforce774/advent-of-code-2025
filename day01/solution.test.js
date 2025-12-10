import { describe, test, expect } from 'vitest';
import { part1, part2 } from './solution.js';

const exampleInput = 
`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

describe('Day 1', () => {
  describe('Part 1', () => {
    test('example input', () => {
      expect(part1(exampleInput)).toBe(3);
    });
  });

  describe('Part 2', () => {
    test('example input', () => {
      expect(part2(exampleInput)).toBe(6);
    });
  });
});
