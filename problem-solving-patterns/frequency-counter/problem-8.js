// =============================================================
/*
  Write a function called isPermutation that takes in two strings. The function should return true if one string is a permutation of the other. Otherwise, return false.

  Ex:
  isPermutation("abc", "cab") // true
  isPermutation("hello", "ollhe") // true
  isPermutation("test", "sett") // true
  isPermutation("abcd", "abcc") // false
  isPermutation("aabbcc", "abcabc") // true
  isPermutation("abc", "abcd") // false

*/
// =============================================================

function isPermutation(first, second) {
  // Early exit if lengths differ or the type isn't string
  if (
    typeof first !== "string" ||
    typeof second !== "string" ||
    first.length !== second.length
  ) {
    return false;
  }

  const lookup = {};

  // Count frequencies of characters in the first string
  for (const char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  // Match characters from the second string
  for (const char of second) {
    if (!lookup[char]) return false; // Character not found or extra occurrences
    lookup[char]--; // Reduce the count
  }

  return true; // All characters matched
}

console.log(isPermutation("abc", "cab")); // true
console.log(isPermutation("hello", "ollhe")); // true
console.log(isPermutation("test", "sett")); // true
console.log(isPermutation("abcd", "abcc")); // false
console.log(isPermutation("aabbcc", "abcabc")); // true
console.log(isPermutation("abc", "abcd")); // false
