// =============================================================
/*
    Write a function called sumZero which accepts a sorted array of integers
    The function should find the first pair where the sum is 0
    Return an array that includes both values that sum to 0
    Or undefined if a pair doesn't exist.

    Ex:
      sumZero([-3, -2, -1, 0, 1, 2, 3])  // [-3,3]
      sumZero([2, 0, 1, 3])  // undefined
      sumZero([1, 2, 3])  // undefined
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

/*
  - # 1
    - Let's start with a basic solution:
      - Loop over the array 
      - Inside each iteration
        - Hold the current index value
        - For each element, loop through the rest of the array from the following position
          - Compare the sum of two values if 0 return the pair if not continue until the end of the array if there is no sum to 0 pair return undefined
    - This is O(n^2) solution
  - # 2
    - Time to improve with Multiple Pointers
      - Initiate two pointers
        - At the start --> i = 0
        - At the end --> j = arr.length
      - Loop through the array
        - Compare the sum of two values of current positions
        - If === 0 ---> return the pair in array
        - If < 0   --> move the left/start pointer to make sum gets close to 0
        - If > 0   ---> move the right/end pointer to make sum gets close to 0
    - This is O(n) solution
*/

/*
  - Example: [-4, -3, -2, 0, 1, 2, 5, 10]
  ----------------------------------------

    *                       *
  [-4, -3, -2, 0, 1, 2, 5, 10]
  - (-4 + 10) = 6 > 0  --> Move the end pointer to get close to 0
    *                   *
  [-4, -3, -2, 0, 1, 2, 5, 10]
  - (-4 + 5) = 1 > 0  --> Move the end pointer to get close to 0
    *                *
  [-4, -3, -2, 0, 1, 2, 5, 10]
  - (-4 + 2) = -2 < 0  --> Move the start pointer to get close to 0
        *            *
  [-4, -3, -2, 0, 1, 2, 5, 10]
  - (-3 + 2) = -1 < 0  --> Move the start pointer to get close to 0
            *        *
  [-4, -3, -2, 0, 1, 2, 5, 10]
  - (-2 + 2) = 0 === 0  --> return [-2, 2]

  - Why get close to 0 ? becuase it's the target. It may be any number else.

*/

// O(n^2)
function sumZeroV1(arr) {
  if (arr.length === 0) return undefined;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return undefined;
}

// O(n)
function sumZero(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === 0) return [arr[start], arr[end]];
    if (sum < 0) start++;
    if (sum > 0) end--;
  }

  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
