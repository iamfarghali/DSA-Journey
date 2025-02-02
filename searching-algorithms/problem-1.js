// =============================================================
/*
  Write a function called countOccurrences that counts how many times pattern appears in text as a substring.

  - Examples:
    countOccurrences("ohomghiomg", "omg"); // 2
    countOccurrences("abcabcabc", "abc"); // 3
    countOccurrences("abcd", "xyz"); // 0
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function countOccurrences(text, pattern) {
  // edge case
  if (pattern.length > text.length) return 0;

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(countOccurrences("ohomghiomg", "omg")); // 2
console.log(countOccurrences("abcabcabc", "abc")); // 3
console.log(countOccurrences("abcd", "xyz")); // 0

/*
  # countOccurrences("ohomghiomg", "omg")
  - i:0
      j:0 -> text[0 + 0] o !== pattern[0] o -> false
      j:1 -> text[0 + 1] h !== pattern[1] m -> true => BREAK
  - i:1
      j:0 -> text[1 + 0] h !== pattern[0] o -> true => BREAK
  - i:2
      j:0 -> text[2 + 0] o !== pattern[0] o -> false
      j:1 -> text[2 + 1] m !== pattern[1] m -> false
      j:2 -> text[2 + 2] g !== pattern[2] g -> false
      j === pattern.length - 1 -> count++ => 1
  - i:3
      j:0 -> text[3 + 0] m !== pattern[0] o -> true => BREAK
  - and so on ...
*/
