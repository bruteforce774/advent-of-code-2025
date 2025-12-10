import { describe, test, expect } from 'vitest';
import { part1, part2 } from './solution.js';

const exampleInput = `
`;

describe('Day 2', () => {
  describe('Part 1', () => {
    test('example input', () => {
      expect(part1(exampleInput)).toBe(1227775554);
    });
  });

  describe('Part 2', () => {
    test('example input', () => {
      expect(part2(exampleInput)).toBe(0);
    });
  });
});
