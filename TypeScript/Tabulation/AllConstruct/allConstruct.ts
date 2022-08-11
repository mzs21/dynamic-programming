// Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.

// The function should return a 2D array containing all the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.

// You may reuse elements of 'wordBank' as many times as needed.

const allConstruct = (target: string, wordBank: string[]): string[] => {
  let table: string[][] = Array(target.length + 1)
    .fill("")
    .map(() => []);

  table[0] = [[]] as never[]; // Base case

  for (let i = 0; i < target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        // If the 'word' matches the characters starting at position 'i'

        let newCombinations: any[] = table[i].map((subArray) => [
          ...subArray,
          word,
        ]);
        // Will take all the combinations at current position & add the 'word' to each of the combinations

        table[i + word.length].push(...newCombinations);
        // Then will add those newCombinations to the furthur index without overwriting
      }
    }
  }

  return table[target.length];
};

// Time Complexity ~O(n*m)
// Space Complexity ~O(n*m)

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

// [
//   [ 'purp', 'le' ],
//   [ 'p', 'ur', 'p', 'le' ]
// ]

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);

// [
//   [ 'ab', 'cd', 'ef' ],
//   [ 'ab', 'c', 'def' ],
//   [ 'abc', 'def' ],
//   [ 'abcd', 'ef' ]
// ]

console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

// []

console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));

// []

export {};
