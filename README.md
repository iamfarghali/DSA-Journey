# My Data Structure & Algorithms Journey

## Problem Solving Patterns

### Frequency Counter

This pattern uses hash-maps (e.g. objects) to collect values and their frequncies.
This can often avoid nested loops or O(n^2) operations with arrays/strings

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
