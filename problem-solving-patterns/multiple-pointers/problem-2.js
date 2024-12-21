// =============================================================
/*
    Write a function called countUniqueValues which accepts a sorted array,
    and counts the unique values in the array, there can be negative numbers
    in the array, but it will always be sorted.

    Ex:
      countUniqueValues([1, 1, 1, 1, 2])  // 2
      countUniqueValues([-1, 0, 1, 3, 3])  // 4
      countUniqueValues([])  // 0
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

// Solution 1
/*
  - Time Complexity:
    - O(n) Loop over the array
    - O(k) Extract the keys
  - Space Complexity:
    - O(k) for storing unique keys in object
  - NOTES:
    - Works for unsorted array
*/
function countUniqueValuesV1(arr) {
  if (arr.length === 0) return 0;
  const lookup = {};
  for (const num of arr) {
    lookup[num] = (lookup[num] || 0) + 1;
  }
  return Object.keys(lookup).length;
}

// Solution 2
/*
  - Time Complexity:
    - O(n) Loop over the array and populate the Set
  - Space Complexity:
    - O(k) for storing unique values in the Set
  - NOTES:
    - Works for unsorted array as well
*/
function countUniqueValuesV2(arr) {
  return new Set(arr).size;
}

// Solution 3 [Using multiple pointers]
/*
  - Time Complexity:
    - O(n) Loop over the array
  - Space Complexity:
    - O(1)
  - NOTES:
    - Extremely space-efficient
    - Very fast as it avoids creating new data structures
    - Only works for sorted arrays
    - Modifies the input array, which may not be desirable in some cases
*/
function countUniqueValuesV3(arr) {
  if (arr.length === 0) return 0;

  let start = 0,
    end = 1;

  while (end < arr.length) {
    if (arr[start] === arr[end]) end++;
    else {
      start++;
      arr[start] = arr[end];
    }
  }
  return start + 1;
}

console.log(countUniqueValuesV3([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValuesV3([-1, 0, 1, 3, 3])); // 4
console.log(countUniqueValuesV3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesV3([])); // 0
