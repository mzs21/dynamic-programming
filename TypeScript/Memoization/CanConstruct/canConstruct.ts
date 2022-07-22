// Write a function 'canConstruct(target, wordBank)' that accepts a target string and an array of strings.

// The function should return a boolean indicating whether or not the 'target' can be constructed by concatenating elements of the 'wordBank' array.

// You may reuse elements of 'wordBank' as many times as needed.

// const canConstruct = (
//   target: string,
//   wordBank: string[],
//   memo: { [key: string]: string } = {}
// ): boolean => {
//   if (target in memo) return true; // Checking whether the 'target' is in the 'memo' or not

//   if (target === "") return true; // If the target string is empty

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       // Checking whether the 'word' - substring (in other words the prefix) of the wordBank array is in the first index

//       let suffix = target.slice(word.length); // The value will be the string starting after the substring/word/prefix
//       if (canConstruct(suffix, wordBank, memo) === true) {
//         // If the recursive call is true
//         return true; // We can construct the 'target'
//       }
//     }
//   }

//   return false;
// };

// --- Brute Force ---
// Time Complexity O(n^m * m)
// Space Complexity O(m^2)

const canConstruct = (
  target: string,
  wordBank: string[],
  memo: { [key: string]: boolean } = {}
): boolean => {
  if (target in memo) return memo[target]; // Checking whether the 'target' is in the 'memo' or not

  if (target === "") return true; // If the target string is empty

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // Checking whether the 'word' - substring (in other words the prefix) of the wordBank array is in the first index

      let suffix = target.slice(word.length); // The value will be the string starting after the substring/word/prefix
      if (canConstruct(suffix, wordBank, memo) === true) {
        // If the recursive call is true

        memo[target] = true; // We can construct the 'target', so we are storing it in the 'memo' object

        return true;
      }
    }
  }

  memo[target] = false; // We can't construct the 'target'

  return false;
};

// --- Memoized ---
// Time Complexity O(n*m^2)
// Space Complexity O(m^2)

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
