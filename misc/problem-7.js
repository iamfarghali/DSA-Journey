// =============================================================
/*
  [Subarray Product Less Than K]

  Given an array of positive integers `nums` and an integer `k`, return the number of (contiguous) subarrays where the product of all the elements in the subarray is strictly less than `k`.

  Constraints:
  - `1 <= nums.length <= 3 * 10^4`
  - `1 <= nums[i] <= 1000`
  - `0 <= k <= 10^6`

  Examples:

  Example 1:
  Input: nums = [10, 5, 2, 6], k = 100
  Output: 8
  Explanation: The 8 subarrays that have product less than 100 are:
  [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

  Example 2:
  Input: nums = [1, 2, 3], k = 0
  Output: 0
  Explanation: There are no subarrays with a product less than 0.

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function numSubarraysProductLessThanK(nums, k) {
  let right = 0,
    left = 0,
    counter = 0,
    product = 1;
  const arr = [];
  while (left < nums.length - 1) {
    if (nums[right] < k) {
      counter++;
      arr.push([nums[right]]);
    }
    //  Input: nums = [10, 5, 2, 6], k = 100
    if (right < nums.length) product *= nums[right];
    if (product < k && left !== right && right < nums.length) {
      counter++;
      arr.push([nums[left], nums[right]]);
    }
    while (product >= k || right === nums.length) {
      product /= nums[left];
      console.log(left, nums[left], product);
      if (product < k) {
        counter++;
        if (right < nums.length) arr.push([nums[left + 1], nums[right]]);
        else {
          if (left + 1 < nums.length) arr.push([nums[left], nums[left + 1]]);
        }
      }
      left++;
      if (left === nums.length) break;
    }
    right++;
  }
  console.log(arr);
  return counter;
}

console.log(numSubarraysProductLessThanK([10, 5, 2, 6], 100));
