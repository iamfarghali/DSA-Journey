// =============================================================
/*
  Write a function called hasDuplicate. Given an array, determine if the array contains any duplicates. The function should return true if there are duplicates and false otherwise.

  Examples:
    hasDuplicate([1, 2, 3, 4, 5]) // false
    hasDuplicate([1, 2, 3, 4, 1]) // true
*/
// =============================================================

function hasDuplicate(arr) {
  // In case of an empty array or one element array
  if (arr.length <= 0) return false;

  const seen = {}; // This is the frequency counter

  for (const item of arr) {
    if (seen[item]) return true;
    seen[item] = 1; // Mark the item as seen
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 5])); // false
console.log(hasDuplicate([1, 2, 3, 4, 1])); // true
console.log(hasDuplicate([1, 1, 3, 4, 5, 6, 6])); // true
