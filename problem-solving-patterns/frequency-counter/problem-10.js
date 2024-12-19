// =============================================================
/*
  Write a function called sameCharacterFrequency that takes in two positive integers. The function should return true if the two numbers have the same frequency of digits. Otherwise, it should return false.


  Ex:
  sameCharacterFrequency(182, 281) // true
  sameCharacterFrequency(34, 14) // false
  sameCharacterFrequency(3589578, 5879385) // true
  sameCharacterFrequency(22, 222) // false

*/
// =============================================================

function sameCharacterFrequency(first, second) {
  first = `${first}`;
  second = `${second}`;
  if (first.length !== second.length) return false;

  const lookup = {};

  for (const digit of first) {
    lookup[digit] = (lookup[digit] || 0) + 1;
  }

  for (const digit of second) {
    if (!lookup[digit]) return false;
    lookup[digit]--;
  }

  return true;
}

console.log(sameCharacterFrequency(182, 281)); // true
console.log(sameCharacterFrequency(34, 14)); // false
console.log(sameCharacterFrequency(3589578, 5879385)); // true
console.log(sameCharacterFrequency(22, 222)); // false
