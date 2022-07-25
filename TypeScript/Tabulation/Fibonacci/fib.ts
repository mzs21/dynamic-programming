// Write a function "fib(n)" that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

const fib = (n: number) => {
  let table = Array(n + 1).fill(0); // Creating an array of n+1 length & filling every index with 0

  table[1] = 1; // Setting the 2nd index of the array with the value of 1

  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};

// Time Complexity O(n)
// Space Complexity O(n)

console.log(fib(6)); // 8

console.log(fib(7)); // 13

console.log(fib(8)); // 21

console.log(fib(50)); // 12586269025

console.log(fib(1476)); // 1.3069892237633987e+308

export {};
