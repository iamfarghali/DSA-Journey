// =============================================================
/*
  [Longest Substring with At Most K Distinct Characters]

  Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

  - Constraints:
    * 0 <= s.length <= 5 * 10^4
    * 0 <= k <= 50  
  - Examples:
    1. s = "eceba", k = 2 => Output: 3
    2. s = "aa", k = 1 => Output: 2
    3. s = "a", k = 1 => Output: 1
    4. s = "ab", k = 1 => Output: 1
    5. s = "ab", k = 2 => Output: 2
    6. s = "ab", k = 3 => Output: 2
    7. s = "abc", k = 1 => Output: 1
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function lengthOfLongestSubstringKDistinct(s, k) {
  const map = {};
  let left = 0,
    right = 0,
    longest = -Infinity;

  while (right < s.length) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    while (Object.keys(map).length > k) {
      if (map[s[left]] === 1) delete map[s[left]];
      else map[s[left]]--;
      left++;
    }
    longest = Math.max(longest, right - left + 1);
    right++;
  }
  return longest;
}

console.log(lengthOfLongestSubstringKDistinct("ab", 3)); // 2
console.log(lengthOfLongestSubstringKDistinct("eceeebadddad", 2)); // 6
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3
console.log(lengthOfLongestSubstringKDistinct("abc", 1)); // 1
console.log(lengthOfLongestSubstringKDistinct("aa", 1)); // 2
console.log(lengthOfLongestSubstringKDistinct("abcadcacacaca", 3)); // 11
