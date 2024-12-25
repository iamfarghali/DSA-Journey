// =============================================================
/*
  Write a function called maxSubarraySum that accepts an array of integers and a number called n, The function should calculate the max sum of n consecutive
  elements in the array.

  Ex:
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)  // 10
    maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)  // 17
    maxSubarraySum([4, 2, 1, 6], 1)  // 6
    maxSubarraySum([4, 2, 1, 6, 2], 4)  // 13
    maxSubarraySum([], 4)  // null
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    let stop = n + i;

    if (stop >= arr.length) {
      const diff = stop - arr.length;
      stop = stop - (diff + 1);
    }

    if (i < arr.length - 1) {
      for (let j = i + 1; j < stop; j++) {
        sum += arr[j];
      }
    }
    max = Math.max(max, sum);
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
