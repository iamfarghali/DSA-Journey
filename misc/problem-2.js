// =============================================================
/*
  [Maximum number of vowels]

  We've a string s, and we want to find the maximum number of vowels in a substring of size k, a substring is a contiguous part of a string.


  - Examples:
    maxVowels('bacacbefaobeacfe', 5)  // 4
    maxVowels("aeiou", 2) // 2

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function maxVowels(str, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0,
    maximum = 0;

  // Count vowels in the first window
  for (let i = 0; i < k; i++) if (vowels.has(str[i])) count++;

  // consider it maximum
  maximum = count;

  for (let i = 0; i < str.length - k; i++) {
    if (vowels.has(str[i])) count--;
    if (vowels.has(str[i + k])) count++;
    maximum = Math.max(maximum, count);
  }

  return maximum;
}

console.log(maxVowels("bacacbefaobeacfe", 5)); // 4
console.log(maxVowels("abciiief", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2
