// Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

// If there is a tie for the shortest combination, you may return any of the shortest

// const bestSum = (targetSum: number, numbers: number[]): number[] | null => {
//   if (targetSum === 0) return []; // As there are no elements in the array

//   if (targetSum < 0) return null; // The value of the element can't be a negative number, so we'll return null

//   let shortestCombination = null; // Initially the combination is null, at the end of code, if no combination is found then it'll still be null

//   for (let num of numbers) {
//     let remainder = targetSum - num; // Branching through the tree

//     let remainderCombination = bestSum(remainder, numbers);

//     if (remainderCombination !== null) {
//       // It means that it's possible to generate remainder

//       let combination = [...remainderCombination, num]; // The combination we got from recursive call with the 'edge' value

//       if (
//         shortestCombination === null ||
//         combination.length < shortestCombination.length
//       ) {
//         // The null value will be replaced by 'combination', then later it'll be compared when 'shortestCombination' is an array rather than a null.
//         // If the combination is shorter than the current 'shortest combination', then update it
//         shortestCombination = combination;
//       }
//     }
//   }

//   return shortestCombination;
// };

// --- Brute Force ---
// Time Complexity O(n^m * m)
// Space Complexity O(m^2)

const bestSum = (
  targetSum: number,
  numbers: number[],
  memo: { [key: string]: number[] | null } = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum]; // / Checking whether the 'targetSum' is in the 'memo' or not

  if (targetSum === 0) return []; // As there are no elements in the array

  if (targetSum < 0) return null; // The value of the element can't be a negative number, so we'll return null

  let shortestCombination = null; // Initially the combination is null, at the end of code, if no combination is found then it'll still be null

  for (let num of numbers) {
    let remainder = targetSum - num; // Branching through the tree

    let remainderCombination = bestSum(remainder, numbers, memo);

    if (remainderCombination !== null) {
      // It means that it's possible to generate remainder

      let combination = [...remainderCombination, num]; // The combination we got from recursive call with the 'edge' value

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        // The null value will be replaced by 'combination', then later it'll be compared when 'shortestCombination' is an array rather than a null.
        // If the combination is shorter than the current 'shortest combination', then update it
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination; // The value shortestCombination will be stored in memo[targetSum]

  return shortestCombination;
};

// --- Memoized ---
// Time Complexity O(n * m^2)
// Space Complexity O(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]

console.log(bestSum(8, [2, 3, 5])); // [ 5, 3 ]

console.log(bestSum(8, [1, 4, 5])); // [ 4, 4 ]

console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]
