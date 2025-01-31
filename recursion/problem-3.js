// =============================================================
/*
  Write a function called reverseString that takes a string as input and returns the string reversed. You must solve this problem using recursion.

  - Examples:
    Input: "hello"
    Output: "olleh"

    Input: "world"
    Output: "dlrow"

    Input: "" (empty string)
    Output: "" (empty string)
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function reverseString(str) {
  if (str.length <= 1) return str;

  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString(""));
