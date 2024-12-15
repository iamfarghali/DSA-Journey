// =============================================================
/*
  Write a function called areTheySimilar that accepts two strings. The function should return true if the two strings contain the same characters with the same frequency, regardless of the order, and false otherwise.

  Ex:
    areTheySimilar("aabbcc", "ccbbaa") // true
    areTheySimilar("abc", "cba") // true
    areTheySimilar("aabbc", "aabbcc") // false
    areTheySimilar("abc", "abd") // false
*/
// =============================================================

function areTheySimilar(first, second) {
  if (
    first.length === 0 ||
    second.length === 0 ||
    first.length !== second.length
  )
    return false;

  const lookup = {};

  for (const char of first) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of second) {
    if (!lookup[char]) return false;
    lookup[char]--;
  }

  return true;
}

console.log(areTheySimilar("aabbcc", "ccbbaa")); // true
console.log(areTheySimilar("abc", "cba")); // true
console.log(areTheySimilar("aabbc", "aabbcc")); // false
console.log(areTheySimilar("abc", "abd")); // false
