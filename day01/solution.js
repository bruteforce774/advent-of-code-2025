// template, not actual solution

function rotateLeft(current, distance) {
  return (((current - distance) % 100) + 100) % 100;
}

function rotateRight(current, distance) {
  return (current + distance) % 100;
}

export function part1(input) {
  // Parse input
  const lines = input.trim().split("\n");

  // Set starting values
  let dial = 50;
  let zeroes = 0;

  // Loop through input, get direction and units to turn
  for (let line of lines) {
    let direction = line[0]; // 'L' or 'R'
    let turns = parseInt(line.slice(1), 10); // Decimal number of turns

    // Rotate dial accordingly

    if (direction === "L") {
      dial = rotateLeft(dial, turns);
    } else if (direction === "R") {
      dial = rotateRight(dial, turns);
    }

    // Log zeroes

    if (dial === 0) zeroes++;
  }

  return zeroes;
}

export function part2(input) {
  const lines = input.trim().split("\n");

  let dial = 50;
  let zeroes = 0;

  for (let line of lines) {
    let direction = line[0];
    let turns = parseInt(line.slice(1), 10);

    // Calculate complete rotations and partial rotation
    let completeRotations = Math.floor(turns / 100);
    zeroes += completeRotations;
    
    let partialRotations = turns % 100;

    // Rotate dial and check whether it crosses zero, if so increment zeroes
    if (partialRotations > 0) {
      if (direction === "L") {
        // Add a check that we're not starting at zero before counting a left rotation as crossing it
        if (dial > 0 && dial - partialRotations <= 0) {
          zeroes++;
        }
        dial = rotateLeft(dial, partialRotations);
      } else if (direction === "R") {
        if (dial + partialRotations >= 100) {
          zeroes++;
        }
        dial = rotateRight(dial, partialRotations);
      }
    }
  }

  return zeroes;
}
