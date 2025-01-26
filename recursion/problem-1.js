// =============================================================
/*
 Write a function that calculates the factorial of a non-negative integer n. The factorial of a number n is the product of all positive integers less than or equal to n. It is denoted as n!.

 - Factorial Formula:
  - n! = n × (n−1) × (n−2) × … × 1
  - 0! = 1 (by definition)

*/
// =============================================================

// =============================================================
// SOLUTION
// =============================================================

function factorial(n) {
  if (!Number.isInteger(n))
    throw new Error("Input must be a non-negative integer");
  if (n < 0) throw new Error("Negative numbers are not allowed for factorial");

  // base case
  if (n === 0) return 1;

  // recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
// console.log(factorial(-5)); // Error: Negative numbers are not allowed factorial
// console.log(factorial(5.5)); // Error: Input must be a non-negative integer
