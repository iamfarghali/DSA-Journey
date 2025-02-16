// =============================================================
/*
  [Minimum Window Substring]

  Given two strings, str and target, find the minimum window (substring) in str that contains all the characters of target (including duplicates). If no such window exists, return an empty string


  - Examples:
    minWindowSubstring('abcabcbb', 'cbb')  // 'cbb'

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

const isCurStrContainsTarStr = (curMap, tarMap) => {
  for (const char in tarMap) {
    if (!curMap[char] || curMap[char] < tarMap[char]) return false;
  }
  return true;
};

function minWindowSubstring(str, target) {
  if (target.length > str.length) return "";

  let left = 0,
    minimum = Infinity,
    minStr = "",
    right = 0;

  const targetMap = {},
    curSubStrMap = {};

  // Build the frequency map for the target string
  for (const char of target) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }

  while (right < str.length) {
    // Expand window by adding str[right]
    curSubStrMap[str[right]] = (curSubStrMap[str[right]] || 0) + 1;

    // Shrink window while it contains the target
    while (isCurStrContainsTarStr(curSubStrMap, targetMap)) {
      let windowSize = right - left + 1;
      if (windowSize < minimum) {
        minimum = windowSize;
        minStr = str.substring(left, right + 1);
      }

      // Remove the leftmost character from the window
      curSubStrMap[str[left]]--;
      if (curSubStrMap[str[left]] === 0) delete curSubStrMap[str[left]];
      left++;
    }

    right++; // Move the right pointer to expand the window
  }

  return minStr;
}
console.log(minWindowSubstring("abccbb", "bb")); // 'bb'
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // 'BANC'
console.log(minWindowSubstring("AAADOBECODEBANC", "AABC")); // 'AADOBEC'
console.log(minWindowSubstring("abcabcbb", "cbb")); //  // 'bcb'
