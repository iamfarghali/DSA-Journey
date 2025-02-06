// =============================================================
/*
  Given a sorted array of integers, write a function that returns the starting -the first pos- and ending -the last pos- position of a given target value. If the target is not found in the array, return [-1, -1].


  - Examples:
    - firstLastPosition([5, 7, 7, 8, 8, 10], 8) // [3, 4] 
    - firstLastPosition([5, 7, 7, 8, 8, 8, 10], 8) // [3, 5] 
    - firstLastPosition([5, 7, 8, 8, 8, 10], 8) // [2, 5] 
    - firstLastPosition([5, 7, 7, 8, 8, 10], 6) // [-1, -1] 
    - firstLastPosition([5, 7, 7, 8, 10], 8) // [3, 3] 
    - firstLastPosition([], 0) // [-1, -1] 
  
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function firstLastPosition(nums, target) {
  if (nums.length === 0 || target < nums[0] || target > nums[nums.length - 1])
    return [-1, -1];

  function findPosition(isFirst) {
    let start = 0,
      end = nums.length - 1,
      position = -1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (nums[middle] === target) {
        position = middle;
        if (isFirst) end = middle - 1;
        else start = middle + 1;
      } else if (nums[middle] < target) start = middle + 1;
      else end = middle - 1;
    }
    return position;
  }

  const first = findPosition(true);
  if (first === -1) return [-1, -1]; // Target not found
  const last = findPosition(false);
  return [first, last];
}

console.log(firstLastPosition([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(firstLastPosition([5, 7, 7, 8, 8, 8, 10], 8)); // [3, 5]
console.log(firstLastPosition([5, 7, 8, 8, 8, 8, 10], 8)); // [2, 5]
console.log(firstLastPosition([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(firstLastPosition([5, 7, 7, 8, 10], 8)); // [3, 3]
console.log(firstLastPosition([], 0)); // [-1, -1]
