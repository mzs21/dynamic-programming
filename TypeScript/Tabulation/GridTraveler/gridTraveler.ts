// Say that you are a traveller on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

// In how many ways can you travel to the goal on a grid with dimensions m * n ?

// Write a function 'gridTraveler(m, n)' that calculates this.

const gridTraveler = (m: number, n: number): number[][] => {
  let table = Array(m + 1) // columns
    .fill(0)
    .map(() => Array(n + 1).fill(0)); // rows

  table[1][1] = 1; // Base case

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      let current = table[i][j];

      if (j + 1 <= n) table[i][j + 1] += current; // Checking if the position is inbound & then addding to right neighbor

      if (i + 1 <= m) table[i + 1][j] += current; // Checking if the position is inbound & then adding to bottom neighbor
    }
  }

  return table[m][n];
};

// Time Complexity O(m*n)
// Space Complexity O(m*n)

console.log(gridTraveler(1, 1)); // 1

console.log(gridTraveler(2, 3)); // 3

console.log(gridTraveler(3, 2)); // 3

console.log(gridTraveler(3, 3)); // 6

console.log(gridTraveler(18, 18)); // 2333606220

export {};
