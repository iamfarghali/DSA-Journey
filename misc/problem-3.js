// =============================================================
/*
  [Longest substring without repeating characters]

  Given a string s, find the longest substring without repeating characters.


  - Examples:
    lengthOfLongest('abcabcbb')  // 3
    lengthOfLongest("bbbb") // 1

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function lengthOfLongest(s) {
  let left = -1,
    charSet = new Set(),
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      left++;
      charSet.delete(s[left]);
    }
    charSet.add(s[right]);
    longest = Math.max(longest, right - left);
    console.log(charSet);
  }

  return longest;
}

console.log(lengthOfLongest("abcabcbb")); // 3
console.log(lengthOfLongest("tmmzuxt")); // 5
console.log(lengthOfLongest("bbbb")); // 1
console.log(lengthOfLongest("cbccbcbb")); // 2
console.log(lengthOfLongest("pwwkew")); // 3
console.log(lengthOfLongest("dvdf")); // 3
console.log(lengthOfLongest("abcdefgh")); // 8
