// =============================================================
/*
  Write a function called findTargetDifference that accepts a sorted array of integers and a target difference.
  The function should determine if there exists a pair of numbers in the array such that the absolute difference between them equals the target difference.

  If such a pair exists, return the pair as an array [smaller, larger]. If no such pair exists, return undefined.

  Ex:
    findTargetDifference([1, 3, 5, 8, 12], 4); 
    // Output: [1, 5] (because 5 - 1 = 4)

    findTargetDifference([2, 3, 5, 6, 9, 12], 7); 
    // Output: [2, 9] (because 9 - 2 = 7)

    findTargetDifference([1, 3, 5, 6, 7], 10);
    // Output: undefined (no pair with a difference of 10)

    findTargetDifference([], 5);
    // Output: undefined (empty array)

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

// Solution 1
/*
  - Time Complexity:
    - O(n^2)
  - Space Complexity:
    - O(1)
*/
function findTargetDifferenceV1(arr, target) {
  // Edge case
  if (arr.length === 0) return undefined;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === target) return [arr[i], arr[j]];
    }
  }

  return undefined;
}

// Solution 2
/*
  - Time Complexity:
    - O(n)
  - Space Complexity:
    - O(1)
*/
function findTargetDifferenceV2(arr, target) {
  // Edge case
  if (arr.length === 0) return undefined;

  let start = 0,
    end = 1;

  while (end < arr.length) {
    const diff = arr[end] - arr[start];
    if (diff === target) return [arr[start], arr[end]];
    else if (diff < target) end++;
    else start++;

    // Avoid crossing pointers
    if (start === end) end++;
  }

  return undefined;
}

console.log(findTargetDifferenceV2([1, 3, 5, 7, 12], 4)); // [1, 5]
console.log(findTargetDifferenceV2([1, 3, 4, 8, 12], 4)); // [4, 8]
console.log(findTargetDifferenceV2([1, 3, 3, 8, 12], 4)); // [8, 12]
console.log(findTargetDifferenceV2([-1, 2, 3, 5, 9, 12], 7)); // [2, 9]
console.log(findTargetDifferenceV2([1, 3, 5, 6, 7], 10)); // undefined
console.log(findTargetDifferenceV2([], 5)); // undefined
