// =============================================================
/*
  Write a function called countPairsWithSum that accepts a sorted array of integers and a target sum, and returns the number of distinct pairs of values in the array that add up to the target sum.

  Ex:
    countPairsWithSum([1, 1, 2, 3, 3, 4, 5], 6);
    // Output: 2
    // Explanation: The pairs are (1, 5) and (2, 4).

    countPairsWithSum([1, 2, 3, 4, 5], 10);
    // Output: 0
    // Explanation: No pairs add up to 10.

    countPairsWithSum([1, 2, 2, 3, 3, 4, 5], 5);
    // Output: 2
    // Explanation: The pairs are (1, 4) and (2, 3).


*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function countPairsWithSum(arr, target) {
  let left = 0,
    right = arr.length - 1,
    count = 0;
  const lookup = {};

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      const pair = `${arr[left]},${arr[right]}`;
      // To filter distinct pairs of values
      if (arr[left] !== arr[right] && !lookup[pair]) {
        lookup[pair] = 1;
        count++;
      }
      left++;
      right--;
    } else if (sum < target) left++;
    else right--;
  }
  return count;
}

console.log(countPairsWithSum([1, 1, 2, 3, 3, 4, 5], 6)); // 2
console.log(countPairsWithSum([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairsWithSum([1, 2, 2, 3, 3, 4, 5], 5)); // 2
