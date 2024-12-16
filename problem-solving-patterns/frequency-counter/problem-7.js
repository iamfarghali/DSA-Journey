// =============================================================
/*
  Write a function called validSquare that accepts two arrays of numbers. The function should return true if one array contains the squares of the numbers in the other array, regardless of the order. The frequency of values must match exactly. Otherwise, return false.

  Ex:
  validSquare([1, 2, 3], [1, 4, 9]) // true
  validSquare([1, 2, 3], [1, 4, 4]) // false
  validSquare([1, 2, 1], [1, 4, 1]) // true
  validSquare([1, 2, 3], [1, 9])    // false
  validSquare([], [])               // true
*/
// =============================================================

// Helper function to check if arr1's numbers match arr2's squares
function isValid(original, squared) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const num of original) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (const num of squared) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    const squareKey = key ** 2;
    if (frequencyCounter2[squareKey] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

function validSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // Check both possibilities
  return isValid(arr1, arr2) || isValid(arr2, arr1);
}

console.log(validSquare([1, 2, 3], [1, 4, 9])); // true
console.log(validSquare([1, 2, 3], [1, 4, 4])); // false
console.log(validSquare([1, 2, 1], [1, 4, 1])); // true
console.log(validSquare([1, 2, 3], [1, 9])); // false
console.log(validSquare([], [])); // true
