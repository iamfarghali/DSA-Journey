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

// O(n^2)
function maxSubarraySum1(arr, n) {
  if (n > arr.length) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let stop = n + i;
    if (stop >= arr.length) {
      const diff = stop - arr.length;
      stop = stop - (diff + 1);
    }

    let sum = arr[i];
    for (let j = i + 1; j < stop; j++) {
      sum += arr[j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// O(n^2)
function maxSubarraySum2(arr, n) {
  if (n > arr.length) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    max = Math.max(max, temp);
  }
  return max;
}

// O(n)
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  let max = 0,
    temp = 0;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  temp = max;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
