// =============================================================
/*
  Write a function called findClosestPair that accepts two sorted arrays of integers and a target number. The goal is to find a pair of numbers (one from each array) whose sum is closest to the target number. Return the pair as an array [num1, num2].
  If there are multiple pairs with the same closest sum, return any one of them.

  Ex:
    findClosestPair([1, 3, 7, 10, 15], [2, 4, 6, 8], 13) // [7, 6]
    findClosestPair([-1, 2, 4, 6], [0, 3, 5, 9], 8) // [-1, 9]
    findClosestPair([1, 2], [3, 4], 50) // [2, 4]

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

// O(n^2)
function findClosestPairV1(first, second, target) {
  if (first.length === 0 || second.length === 0) return null;

  let closestToTarget = 0;
  let pair = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      current = first[i] + second[j];

      if (current === target) return [first[i], second[j]];

      if (Math.abs(closestToTarget - target) > Math.abs(current - target)) {
        closestToTarget = current;
        pair = [first[i], second[j]];
      }
    }
  }

  return pair;
}

// O(n + m) n -> length of first, m -> length of second
function findClosestPair(first, second, target) {
  if (first.length === 0 || second.length === 0) return null;

  let start = 0,
    end = second.length - 1,
    closestToTarget = -Infinity,
    pair = [];

  while (start < first.length && end >= 0) {
    let current = first[start] + second[end];

    if (current === target) return [first[start], second[end]];

    if (Math.abs(closestToTarget - target) > Math.abs(current - target)) {
      closestToTarget = current;
      pair = [first[start], second[end]];
    }

    if (current < target) start++;
    else end--;
  }

  return pair;
}

console.log(findClosestPair([1, 3, 7, 10, 15], [2, 4, 6, 8], 13)); // [7, 6]
console.log(findClosestPair([-1, 2, 4, 6], [0, 3, 5, 9], 8)); // [-1, 9]
console.log(findClosestPair([1, 2], [3, 4], 50)); // [2, 4]
console.log(findClosestPair([1, 4, 5], [10, 20, 30], 18)); // [1, 20]
console.log(findClosestPair([-1, 3, 8, 2, 9, 5], [4, 1, 2, 10, 5, 20], 24)); //  [3, 20]
