// Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.

// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// You may reuse elements of 'wordBank' as many times as needed.

const canConstruct = (target: string, wordBank: string[]): boolean => {
  let table = Array(target.length + 1).fill(false);

  table[0] = true; // Base case

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      // If my current position is true

      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          // If the 'word' matches the characters starting at position 'i'

          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

// Time Complexity O(n*m^2)
// Space Complexity O(m)

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true

console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false

console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeees",
  ])
); // false

export {};
