// template, not actual solution

function rotateLeft(current, distance) {
  return ((current-distance) % 100 + 100) % 100;
}

function rotateRight(current, distance) {
  return (current+distance) % 100;
}

export function part1(input) {
  const lines = input.trim().split('\n');
  let start = 50;
  let zeroes = 0;
  for(let line of lines) {
    let direction = line[0];
    let number = parseInt(line.slice(1), 10);
    if (direction === 'L') {
      start = rotateLeft(start, number);
    } else if (direction === 'R') {
      start = rotateRight(start, number);
    }
    if (start === 0) zeroes++;
  }
  return zeroes;
}

// export function part2(input) {
//   const lines = input.trim().split('\n');
// }
