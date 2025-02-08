// =============================================================
/*
  [Longest Subarray with Sum at Most K]

  Given an array of positive integers nums and an integer K, find the length of the longest contiguous subarray whose sum is at most K.


  - Examples:
    longestSubarrayAtMostK([3, 1, 2, 1, 4, 5], 6)  // 3 -> [3, 1, 2]
    longestSubarrayAtMostK([3, 1, 2, 1, 1, 4, 5], 6)  // 4 -> [1, 2, 1, 1]
  
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function longestSubarrayAtMostK(nums, k) {
  let left = -1,
    longest = 0,
    sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > k) {
      left++;
      sum -= nums[left];
    }
    longest = Math.max(longest, right - left);
  }

  return longest;
}

console.log(longestSubarrayAtMostK([3, 1, 2, 1, 4, 5], 6)); // 3
console.log(longestSubarrayAtMostK([3, 1, 2, 1, 1, 4, 5], 6)); // 4
console.log(longestSubarrayAtMostK([], 6)); // 0
