// =============================================================
/*
  Given a sorted array of distinct integers and a target value, write a function that returns the index of the target if it is found. If the target is not found, return the index where it would be inserted to maintain the sorted order.

  - Constraints:
    - The array is sorted in ascending order.
    - The solution must have a time complexity of O(logn).

  - Examples:
    - searchInsertPosition( [1, 3, 5, 6], 5) // 2 
    - searchInsertPosition( [1, 3, 5, 6], 2) // 1 -> '2' is not found in the array it would be inserted at index 1. 
    - searchInsertPosition( [1, 3, 5, 6], 7) // 4 
    - searchInsertPosition( [1, 3, 5, 6], 0) // 0 
  
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function searchInsertPosition(arr, target) {
  // At the end
  if (target > arr[arr.length - 1]) return arr.length;

  // At the beginning
  if (target < arr[0]) return 0;

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (arr[middle] === target) return middle;
    if (arr[middle] < target) start = middle + 1;
    else end = middle - 1;
  }

  return start;
}

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // 1
console.log(searchInsertPosition([1, 3, 5, 6], 7)); // 4
console.log(searchInsertPosition([1, 3, 5, 6], 0)); // 0
console.log(searchInsertPosition([1, 3, 5, 6], 4)); // 2
