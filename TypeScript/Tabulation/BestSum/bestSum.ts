// Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

// If there is a tie for the shortest combination, you may return any of the shortest

const bestSum = (targetSum: number, numbers: number[]): number[] | null => {
  let table = Array(targetSum + 1).fill(null);

  table[0] = []; // Base case

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      // If the ith index is not null
      for (let num of numbers) {
        let combination = [...table[i], num];

        if (!table[i + num] || table[i + num].length > combination.length) {
          // If the value is not false or if the current combination is shorter than what is already stored
          table[i + num] = combination; // Then we'll assign the combination to our table[i + num] as shortest combination
        }
      }
    }
  }

  return table[targetSum];
};

// Time Complexity O(n*m^2 )
// Space Complexity O(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]

console.log(bestSum(8, [2, 3, 5])); // [ 3, 5 ]

console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]

console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]

export {};
