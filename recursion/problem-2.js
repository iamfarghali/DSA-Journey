// =============================================================
/*
 Write a function called sumOfDigits that takes a positive integer n and returns the sum of its digits. You must solve it using recursion.

- Examples:
  - sumOfDigits(123) → 6 (1 + 2 + 3 = 6)
  - sumOfDigits(4567) → 22 (4 + 5 + 6 + 7 = 22)
  - sumOfDigits(9) → 9

- Constraints:
 - If n is 0, return 0.
 - Assume n is always a positive integer.

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function sumOfDigits(n) {
  // Handle negative numbers
  if (n < 0) return sumOfDigits(-n);

  // base case
  if (n === 0) return 0;

  // recursive case
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(4567)); // 22
console.log(sumOfDigits(-4567)); // 22
console.log(sumOfDigits(9)); // 9
console.log(sumOfDigits(0)); // 0
