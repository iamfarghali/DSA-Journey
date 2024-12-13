// =============================================================
/*
  Write a function called commonElements that accepts two arrays of integers. The function should return the number of elements that appear in both arrays. The frequency of elements in both arrays must be the same for them to count as common.

  Examples:
    commonElements([1, 2, 3, 4], [3, 4, 5, 6]) // 2
    commonElements([1, 2, 2, 3], [2, 2, 3, 3]) // 2
    commonElements([1, 2, 3], [4, 5, 6]) // 0
*/
// =============================================================

/* 
  So we check for a value that exists in the two arrays and with same frequencey
  For example: commonElements([1, 2, 2, 3], [2, 2, 3, 3])

  - Frequency map for arr1
    {
      1:1,
      2:2,
      3:1
    }
    - Frequency map for arr2
    {
      2:2,
      3:2
    }
    
  That means:
    - 1 not common exists only in arr1
    - 2 common exits in arr1 and arr2 with same frequency
    - 3 not common exits in arr1 and arr2 BUT with different frequencies
*/

function commonElements(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return 0;

  let totalCommon = 0;

  const arr1Map = {},
    arr2Map = {};

  for (const num of arr1) {
    arr1Map[num] = (arr1Map[num] || 0) + 1;
  }

  for (const num of arr2) {
    arr2Map[num] = (arr2Map[num] || 0) + 1;
  }

  for (const num in arr1Map) {
    if (arr2Map[num] && arr2Map[num] === arr1Map[num]) {
      totalCommon += arr1Map[num]; // accumulate num's frequencies
    }
  }

  return totalCommon;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // 2
console.log(commonElements([1, 2, 2, 3], [2, 2, 3, 3])); // 2
console.log(commonElements([1, 2, 3], [4, 5, 6])); // 0
