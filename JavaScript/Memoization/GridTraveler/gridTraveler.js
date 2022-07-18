"use strict";
// Say that you are a traveller on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n ?
// Write a function 'gridTraveler(m, n)' that calculates this.
// const gridTraveler = (m: number, n: number): number => {
//   if (m === 1 && n === 1) return 1; // If the grid is 1 X 1, there's only 1 step/move
//   if (m === 0 || n === 0) return 0; // If either of the value of the grid is 0, there's no step/move
//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };
// Time Complexity O(2^(n+m))
// Space Complexity O(n+m)
const gridTraveler = (m, n, memo = {}) => {
    let key = m + "," + n; // Making a key-value pair
    if (key in memo)
        return memo[key]; // Checking whether the 'key' is in the 'memo' or not
    if (m === 1 && n === 1)
        return 1; // If the grid is 1 X 1, there's only 1 step/move
    if (m === 0 || n === 0)
        return 0; // If either of the value of the grid is 0, there's no step/move
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo); // Storing the recursive nodes of the tree, to avoid duplication
    return memo[key];
};
// Time Complexity O(n*m)
// Space Complexity O(n+m)
console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
