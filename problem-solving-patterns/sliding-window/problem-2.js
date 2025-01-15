// =============================================================
/*
  Write a function to find the length of the smallest contiguous subarray whose sum is greater than or equal to a given value target. If no such subarray exists, return 0.

  Ex:
    minSubarrayLength([2, 3, 1, 2, 4, 3], 7)  // 2

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

// Solution 1 O(n^2)
function minSubarrayLengthV1(arr, target) {
  if (arr.length === 0) return 0;
  let smallestArr = [];
  let tempArr = [];
  let currentVal = 0;

  for (let i = 0; i < arr.length; i++) {
    currentVal = 0;
    tempArr = [];
    tempArr.push(arr[i]);

    if (arr[i] === target) return tempArr.length;

    for (let j = i + 1; j < arr.length; j++) {
      tempArr.push(arr[j]);
      currentVal = tempArr.reduce((acc, cur) => (acc += cur));
      if (currentVal >= target) break;
    }

    if (smallestArr.length === 0 && currentVal >= target)
      smallestArr = [...tempArr];
    else if (tempArr.length < smallestArr.length && currentVal >= target)
      smallestArr = [...tempArr];
  }

  return smallestArr.length;
}

// Solution 2
function minSubarrayLength(arr, target) {
  if (arr.length === 0) return 0;

  let left = 0,
    cur = 0,
    minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    cur += arr[right];
    while (cur >= target) {
      minLength = Math.min(minLength, right - left + 1);
      cur -= arr[left];
      left += 1;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

console.log(minSubarrayLength([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubarrayLength([1, 1, 1, 1, 1, 1, 1, 1], 11)); // 0
console.log(minSubarrayLength([1, 4, 4], 4)); // 1
console.log(minSubarrayLength([4], 4)); // 1
