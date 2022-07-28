// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.

// the function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

// You may use an element of the array as many times as needed.

// You may assume all input numbers are non-negative.

const canSum = (targetSum: number, numbers: number[]) => {
   let table = Array(targetSum + 1).fill(false);

  
    if(targetSum < 0) return false; // targetSum can't be negative

    for(let num of numbers){
        let remainder = targetSum - num;    // Branching through the tree

      if(canSum(remainder, numbers) === true) {
        // Recursively calling 'canSum' until base case is found & if it's possible to generate remainder using the 'numbers' array
        return true;
      };
    }

    return false; // if the above possibilities don't work, we'll return false
}

// Time Complexity O(n*m)
// Space Complexity O(m)

console.log(canSum(7, [2, 3])); // true

console.log(canSum(7, [5, 3, 4, 7])); // true

console.log(canSum(7, [2, 4])); // false

console.log(canSum(8, [2, 3, 5])); // true

console.log(canSum(300, [7, 14])); // false

export { };
