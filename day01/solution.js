// template, not actual solution

export function part1(input) {
  const lines = input.trim().split('\n');
  
  // Example: Sum all numbers in the input
  const sum = lines.reduce((total, line) => {
    return total + parseInt(line, 10);
  }, 0);
  
  return sum;
}

export function part2(input) {
  const lines = input.trim().split('\n');
  
  // Example: Sum only even numbers
  const sum = lines.reduce((total, line) => {
    const num = parseInt(line, 10);
    return num % 2 === 0 ? total + num : total;
  }, 0);
  
  return sum;
}
