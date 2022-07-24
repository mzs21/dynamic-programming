"use strict";
// Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
// The function should return a 2D array containing all the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.
// You may reuse elements of 'wordBank' as many times as needed.
// const allConstruct = (target: string, wordBank: string[]): string[][] => {
//   if (target === "") return [[]]; // If the target string is empty
//   let result = [];
//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       // Checking whether the 'word' - substring (in other words the prefix) of the wordBank array is in the first index
//       let suffix = target.slice(word.length); // The value will be the string starting after the substring/word/prefix
//       let suffixWays = allConstruct(suffix, wordBank); // Calling recursively
//       let targetWays = suffixWays.map((way) => [word, ...way]); // Adding the edge with the node or in other words adding the 'word' before every sub array.
//       result.push(...targetWays); // Building up the array
//     }
//   }
//   return result;
// };
// --- Brute Force ---
// Time Complexity O(n^m)
// Space Complexity O(m)
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo)
        return memo[target]; // Checking whether the 'target' is in the 'memo' or not
    if (target === "")
        return [[]]; // If the target string is empty
    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            // Checking whether the 'word' - substring (in other words the prefix) of the wordBank array is in the first index
            let suffix = target.slice(word.length); // The value will be the string starting after the substring/word/prefix
            let suffixWays = allConstruct(suffix, wordBank, memo); // Calling recursively
            let targetWays = suffixWays.map((way) => [word, ...way]); // Adding the edge with the node or in other words adding the 'word' before every sub array.
            result.push(...targetWays); // Building up the array
        }
    }
    memo[target] = result; // Storing the result
    return result;
};
// --- Memoized ---
// Time Complexity O(n*m)
// Space Complexity O(m)
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// [
//   [ 'purp', 'le' ],
//   [ 'p', 'ur', 'p', 'le' ]
// ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
]));
