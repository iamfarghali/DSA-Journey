// =============================================================
/*
  Write a function called wordFrequencyMatch. Given two strings of words, determine if the frequency of words in the first string matches the frequency of words in the second string.

  Examples:
    wordFrequencyMatch("dog cat dog", "cat dog dog") // true
    wordFrequencyMatch("dog cat dog", "dog dog dog") // false
*/
// =============================================================

function wordFrequencyMatch(first, second) {
  if (first.length === 0 || first.length !== second.length) return false;

  const firstArr = first.trim().split(" ");
  const secondArr = second.trim().split(" ");
  const lookup = {};

  for (const word of firstArr) {
    lookup[word] = (lookup[word] || 0) + 1;
  }

  for (const word of secondArr) {
    if (lookup[word]) lookup[word]--;
    else return false;
  }

  return true;
}

console.log(wordFrequencyMatch("dog cat dog", "cat dog dog")); // true
console.log(wordFrequencyMatch("dog cat dog", "dog dog dog")); // false
