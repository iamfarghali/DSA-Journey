// =============================================================
/*
  Write a function called firstNonRepeatingChar that takes a string as input. The function should return the first character in the string that does not repeat. If every character repeats, return null.


  Ex:
  firstNonRepeatingChar("aabbccddeef") // "f"
  firstNonRepeatingChar("aabccbd") // "d"
  firstNonRepeatingChar("aabbcc") // null
  firstNonRepeatingChar("xyzxyz") // null
  firstNonRepeatingChar("x") // "x"
*/
// =============================================================

function firstNonRepeatingChar(str) {
  // Handle edge cases
  if (typeof str !== "string") return "Unsupported Input!";
  if (str.length <= 1) return str || null;

  const lookup = {};

  // Count frequency of each character
  for (const char of str) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (const char of str) {
    if (lookup[char] === 1) return char;
  }

  return null; // No non-repeating character found
}

console.log(firstNonRepeatingChar("aabbccddeef")); // "f"
console.log(firstNonRepeatingChar("aabccbd")); // "d"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("xyzxyz")); // null
console.log(firstNonRepeatingChar("x")); // "x"
console.log(firstNonRepeatingChar("")); // null
console.log(firstNonRepeatingChar(12345)); // Unsupported Input!
console.log(firstNonRepeatingChar("abcabcde")); // "d"
console.log(firstNonRepeatingChar("aaaab")); // "b"
