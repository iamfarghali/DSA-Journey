// =============================================================
/*
  [Minimum Window Substring]

  Given two strings, s and t, find the minimum window (substring) in s that contains all the characters of t (including duplicates). If no such window exists, return an empty string


  - Examples:
    minWindowSubstring('abcabcbb', 'cbb')  // 'cbb'

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function minWindowSubstring(str, target) {
  let left = 0,
    curSubStr = str.substring(0, target.length);

  const targetMap = {};
  for (let i = 0; i < target.length; i++) {
    targetMap[target[i]] = (targetMap[target[i]] || 0) + 1;
  }

  const isCurStrContainsTarStr = (curMap, tarMap) => {
    for (const char of Object.keys(tarMap)) {
      if (!(char in curMap)) return false;
      if (curMap[char] !== tarMap[char] || curMap[char] === 0) return false;
    }
    return true;
  };

  const curSubStrMap = {};
  for (let i = 0; i < curSubStr.length; i++) {
    curSubStrMap[curSubStr[i]] = (curSubStrMap[curSubStr[i]] || 0) + 1;
  }
  let minimum = Infinity;
  let minStr = "";
  let right = target.length;
  while (left < right && minimum > target.length) {
    while (isCurStrContainsTarStr(curSubStrMap, targetMap)) {
      curSubStr = curSubStr.slice(1);
      curSubStrMap[str[left]]--;
      // console.log("L ", left, curSubStr, curSubStrMap);
      minimum = Math.min(minimum, right - left);
      minStr = str.substring(left, right);
      // console.log(minimum);
      // console.log(minStr);
      left++;
    }
    // append next char
    if (right < str.length) {
      curSubStr += str[right];
      curSubStrMap[str[right]] = (curSubStrMap[str[right]] || 0) + 1;
      // console.log("R ", right, curSubStr, curSubStrMap);
      right++;
    }
  }
  return minStr;
}
console.log(minWindowSubstring("abccbb", "bb")); // 'bb'
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // 'BANC'
