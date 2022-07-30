// Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null

// If there are multiple combinations possible, you may return any single one.

// const howSum = (targetSum: number, numbers: number[]) => {
//   if (targetSum === 0) return []; // As there are no elements in the array

//   if (targetSum < 0) return null; // The value of the element can't be a negative number, so we'll return null

//   for (let num of numbers) {
//     let remainder = targetSum - num;

//     let remainderResult = howSum(remainder, numbers);

//     if (remainderResult !== null) {
//       // Meaning it's possible to generate combination
//       return [...remainderResult, num]; // We'll return the array that we got from recursive call with the 'edge' value
//     }
//   }

//   return null; // As we can't generate any combination
// };

// --- Brute Force ---
// Time Complexity O(n^m * m)
// Space Complexity O(m)

const howSum = (
  targetSum: number,
  numbers: number[],
  memo: { [key: string]: number[] | null } = {}
): number[] | null => {
  if (targetSum in memo) return memo[targetSum]; // / Checking whether the 'targetSum' is in the 'memo' or not

  if (targetSum === 0) return []; // As there are no elements in the array

  if (targetSum < 0) return null; // The value of the element can't be a negative number, so we'll return null

  for (let num of numbers) {
    let remainder = targetSum - num; // Branching through the tree

    let remainderResult = howSum(remainder, numbers, memo);

    if (remainderResult !== null) {
      // Meaning it's possible to generate combination
      memo[targetSum] = [...remainderResult, num]; // We'll return the array that we got from recursive call with the 'edge' value & store in the memo object

      return memo[targetSum];
    }
  }

  memo[targetSum] = null; // As we can't generate any combination, so 'memo' will have a null value

  return null; // As we can't generate any combination
};

// --- Memoized ---
// Time Complexity O(n*m^2)
// Space Complexity O(m^2)

console.log(howSum(7, [2, 3])); // [ 3, 2, 2 ]

console.log(howSum(7, [5, 3, 4, 7])); // [ 4, 3 ]

console.log(howSum(7, [2, 4])); // null

console.log(howSum(8, [2, 3, 5])); // [ 2, 2, 2, 2 ]

console.log(howSum(300, [7, 14])); // null

export {};