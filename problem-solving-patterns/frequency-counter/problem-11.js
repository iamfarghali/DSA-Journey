// =============================================================
/*
  Write a function called canFormPalindrome that takes a string as input and returns true if the string can be rearranged to form a palindrome, and false otherwise.

  Note:
  A string can be rearranged to form a palindrome if at most one character has an odd frequency.


  Ex:
  canFormPalindrome("civic") // true
  canFormPalindrome("ivicc") // true 
  canFormPalindrome("hello") // false
  canFormPalindrome("aabb") // true
  canFormPalindrome("aabbc") // true
  canFormPalindrome("abc") // false
*/
// =============================================================

function canFormPalindrome(str) {
  if (typeof str !== "string" || str.length === 0) return false;

  const lookup = {};

  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  let oddCharCount = 0;
  for (const char in lookup) {
    if (lookup[char] % 2 !== 0) oddCharCount++;
    if (oddCharCount > 1) return false;
  }

  return true;
}

console.log(canFormPalindrome("civic")); // true
console.log(canFormPalindrome("ivicc")); // true
console.log(canFormPalindrome("hello")); // false
console.log(canFormPalindrome("aabb")); // true
console.log(canFormPalindrome("aabbc")); // true
console.log(canFormPalindrome("abc")); // false
console.log(canFormPalindrome("")); // false (edge case)
console.log(canFormPalindrome("a")); // true
