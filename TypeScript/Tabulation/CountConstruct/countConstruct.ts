// Write a function 'countConstruct(targetSum, numbers)' that accepts a target string and an array of strings.

// The function should return the number of ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// You may reuse elements of 'wordBank' as many times as needed.

const countConstruct = (target: string, wordBank: string[]): number => {
  let table = Array(target.length + 1).fill(0);

  table[0] = 1; // Base case

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        // If the 'word' matches the characters starting at position 'i'

        table[i + word.length] += table[i]; // Incrementing by the number in my current position
      }
    }
  }

  return table[target.length];
};

// Time Complexity O(n*m^2)
// Space Complexity O(m)

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1

console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0

console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4

console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeees",
  ])
); // 0

export {};
