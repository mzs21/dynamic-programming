// Write a function "fib(n)" that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// Without Memoization

// const fib = (n: number): number =>  {
//   if (n <= 2) return 1; // As the first two numbers of the sequence is 1.

//   return fib(n - 1) + fib(n - 2);
// };

// Time Complexity O(2^n)
// Space Complexity O(n)

// console.log(fib(6)); // 8

// console.log(fib(7)); // 13

// console.log(fib(8)); // 21
// // The upper 3 will print instantly
// console.log(fib(50)); // 12586269025 // But this one will take time

// With Memoization

// JS/TS object, keys will be arg to fn, value will be the return value

const fib = (n: number, memo: { [key: string]: number } = {}): number => {
  if (n in memo) return memo[n]; // Checking wheather 'n' is in 'memo' or not

  if (n <= 2) return 1; // As the first two numbers of the sequence is 1

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); // Storing the result in the nth place of memo, so that duplication doesn't happen

  return memo[n];
};

// Time Complexity O(n)
// Space Complexity O(n)

console.log(fib(6)); // 8

console.log(fib(7)); // 13

console.log(fib(8)); // 21

console.log(fib(50)); // 12586269025

console.log(fib(1476)); // 1.3069892237633987e+308
