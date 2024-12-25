# My Data Structure & Algorithms Journey

## Problem Solving Patterns

### Frequency Counter

This pattern uses hash-maps (e.g. objects) to collect values and their frequncies.
This can often **avoid nested loops or O(n^2)** operations with arrays/strings

**When to use it:**

- Comparing two arrays or strings for equality or similarity
- Identifying duplicats or unique values in a dataset
- Counting occurrences of elements efficiently

**How to Build a Frequency Map:**

- Start with an empty map (like an object or dictionary).
- Iterate through the dataset.
- For each element:
  - If the element is not in the map, add it with a value of 1.
  - If it is already in the map, increase its count by 1.

**Example:** For a string "banana":

- Start with an empty map: {}.
- Process each character:
  - b → { 'b': 1 }
  - a → { 'b': 1, 'a': 1 }
  - n → { 'b': 1, 'a': 1, 'n': 1 }
  - a → { 'b': 1, 'a': 2, 'n': 1 }
  - n → { 'b': 1, 'a': 2, 'n': 2 }
  - a → { 'b': 1, 'a': 3, 'n': 2 }
  - Final frequency map: { 'b': 1, 'a': 3, 'n': 2 }

### Multiple Pointers

This pattern is a problem-solving technique that involves **creating pointers (or indices) that move through a data structure**, typically in opposite directions or based on certain conditions. It is commonly _used to optimize problems that require searching, comparing, or analyzing data **in pairs or subsets**._

**When to use it:**

- When working with **sorted** arrays or strings.
- When looking for a specific **pair or subset of values** (e.g., two numbers that sum to a target).
- When you want to reduce the time complexity of a solution that might otherwise require nested loops.

**How it works:**

- Set up Pointers:
  - Place one pointer at the start of the array (or string) and another at the end
  - Alternatively,you may have multiple pointers that start at different points and
    move based on conditions
- Move Pointers
  - Move the pointers toward each other, away from each other, or adjust them based on
    the condition you're checking.
- Terminate When Condition is Met:
  - Stop when a specific condition is satisfied, such as finding a pair values or fully
    traversing the data.

**Why use it:**

- The multiple pointers pattern replaces brute force solutions that use nested loops
  (O(n²)) with a more efficient linear or near-linear approach (O(n)).
- It reduces unnecessary comparisons or computations by focusing on only the relevant parts of the dataset.

**Example Scenarios:**

- Finding a Pair That Sums to Zero (Two-Sum Variant):
  Use one pointer at the start of a **sorted array** and another at the end.
  Move the pointers based on the sum of the two values (e.g., increase the left pointer
  if the sum is too small or decrease the right pointer if it's too large).
- Counting Unique Values in a Sorted Array:
  Use one pointer to traverse the array and another to track the position of unique values.
- Reversing a String/Array:
  Use one pointer at the start and another at the end, swapping elements as they
  move toward each other.

### Sliding Window
