// =============================================================
/*
  Given two strings, Write a function to determine if the second
  string is an anagram of the first.
  Anagram: a word, phrase or name formed by rearranging the letters
  of the another, such as cinema -> iceman
*/
// =============================================================

/*
  - So an anagram means that the two strings formed from the same letters
  and each letter of those letters has the same frequency in each string

  - Example 1: 
    str1 = cinema 
    str2 = iceman
    str1Frq = { 'c':1, 'i':1, 'n':1, 'e':1, 'm':1, 'a':1 }
    str1Frq = { 'i':1, 'c':1, 'e':1, 'm':1, 'a':1, 'n':1 }

  - Example 2: 
    str1 = anagram 
    str2 = nagaram
    str1Frq = { 'a':3, 'n':1, 'g':1, 'r':1, 'm':1 }
    str2Frq = { 'n':1, 'a':3, 'g':1, 'r':1, 'm':1 }
*/

// Time Complexity: O(3n) -> O(n)
function validAnagramV1(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Frequncies = {},
    str2Frequncies = {};

  // O(n)
  for (const char of str1) {
    str1Frequncies[char] = (str1Frequncies[char] || 0) + 1;
  }

  // O(n)
  for (const char of str2) {
    str2Frequncies[char] = (str2Frequncies[char] || 0) + 1;
  }

  // O(n)
  for (const char in str1Frequncies) {
    if (str1Frequncies[char] !== str2Frequncies[char]) return false;
  }

  return true;
}

// Time Complexity: O(2n) -> O(n)
function validAnagramV2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1Frequncies = {},
    str2Frequncies = {};

  // O(n)
  for (let i = 0; i < str1.length; i++) {
    const charStr1 = str1[i];
    const charStr2 = str2[i];
    str1Frequncies[charStr1] = (str1Frequncies[charStr1] || 0) + 1;
    str2Frequncies[charStr2] = (str2Frequncies[charStr2] || 0) + 1;
  }

  // O(n)
  for (const char in str1Frequncies) {
    if (str1Frequncies[char] !== str2Frequncies[char]) return false;
  }

  return true;
}

// Time Complexity: O(2n) -> O(n)
function validAnagramV3(str1, str2) {
  if (str1.length !== str2.length) return false;

  const length = str1.length;
  const lookup = {};

  // O(n)
  for (let i = 0; i < length; i++) {
    const char = str1[i];
    lookup[char] = (lookup[char] || 0) + 1;
  }

  // O(n)
  for (let i = 0; i < length; i++) {
    const char = str2[i];
    if (!lookup[char]) return false;
    lookup[char]--;
  }

  return true;
}

console.log("====================== validAnagramV1 =======================");
console.log(validAnagramV1("", "")); // true
console.log(validAnagramV1("aza", "zza")); // false
console.log(validAnagramV1("anagram", "nagaram")); // true
console.log(validAnagramV1("rat", "car")); // false
console.log(validAnagramV1("awesome", "awesom")); // false
console.log(validAnagramV1("qwerty", "qeywrt")); // true

console.log("====================== validAnagramV2 =======================");
console.log(validAnagramV2("", "")); // true
console.log(validAnagramV2("aza", "zza")); // false
console.log(validAnagramV2("anagram", "nagaram")); // true
console.log(validAnagramV2("rat", "car")); // false
console.log(validAnagramV2("awesome", "awesom")); // false
console.log(validAnagramV2("qwerty", "qeywrt")); // true

console.log("====================== validAnagramV3 =======================");
console.log(validAnagramV3("", "")); // true
console.log(validAnagramV3("aza", "zza")); // false
console.log(validAnagramV3("anagram", "nagaram")); // true
console.log(validAnagramV3("rat", "car")); // false
console.log(validAnagramV3("awesome", "awesom")); // false
console.log(validAnagramV3("qwerty", "qeywrt")); // true
