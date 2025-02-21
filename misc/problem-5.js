// =============================================================
/*
  [Find All Anagram Indices]

  Given two strings s and p, find all starting indices of p's anagrams in s. An anagram of p is a permutation of its characters that appears as a contiguous substring in s. You need to return a list of all indices where such anagrams begin.
  - The order of characters in the anagram does not matter.
  - The length of p will always be less than or equal to s.
  - The indices should be returned in ascending order.


  - Examples:
    - findAllAnagram("cbaebabacd", "abc") // [0, 6]
      Explanation: The substrings "cba" and "bac" at indices 0 and 6 are anagrams of "abc".
    - findAllAnagram("abab", "ab") // [0, 1, 2]
      Explanation: The substrings "ab", "ba", and "ab" at indices 0, 1, and 2 are anagrams of "ab".
    - findAllAnagram("acdcaeccde", "c") // [1, 3, 6, 7]
      Explanation: The character "c" appears as an anagram at indices 1, 3, 6, and 7.
*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function findAllAnagram(s, p) {
  const pFrequency = {};
  const substrFrequency = {};

  for (const char of p) {
    pFrequency[char] = (pFrequency[char] || 0) + 1;
  }

  for (let i = 0; i < p.length; i++) {
    substrFrequency[s[i]] = (substrFrequency[s[i]] || 0) + 1;
  }

  const isAnagram = (map1, map2) => {
    for (const char in map1) {
      if (!map2[char] || map2[char] !== map1[char]) return false;
    }
    return true;
  };

  let left = 0,
    right = p.length - 1;

  const indices = [];

  while (left <= s.length - p.length) {
    if (isAnagram(substrFrequency, pFrequency)) {
      indices.push(left);
    }

    if (substrFrequency[s[left]] === 1) delete substrFrequency[s[left]];
    else substrFrequency[s[left]]--;
    left++;
    right++;
    if (right < s.length) {
      substrFrequency[s[right]] = (substrFrequency[s[right]] || 0) + 1;
    }
  }

  return indices;
}

console.log(findAllAnagram("cbaebabacd", "abc")); // [0, 6]
console.log(findAllAnagram("abab", "ab")); // [0, 1, 2]
console.log(findAllAnagram("acdcaeccde", "c")); // [1, 3, 6, 7]
