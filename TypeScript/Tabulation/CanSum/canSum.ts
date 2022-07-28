// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// the function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

// You may use an element of the array as many times as needed.

// You may assume all input numbers are non-negative.

const canSum = (targetSum: number, numbers: number[]) => {
  let table = Array(targetSum + 1).fill(false);

  table[0] = true; // Base case

  for (let i = 0; i < targetSum; i++) {
    if (table[i] === true) {
      // If the ith index is true...
      for (let num of numbers) {
        table[i + num] = true; // [ i+ num] index will be true
      }
    }
  }
  return table[targetSum];
};

// Time Complexity O(n*m)
// Space Complexity O(m)

console.log(canSum(7, [2, 3])); // true

console.log(canSum(7, [5, 3, 4, 7])); // true

console.log(canSum(7, [2, 4])); // false

console.log(canSum(8, [2, 3, 5])); // true

console.log(canSum(300, [7, 14])); // false

export {};
