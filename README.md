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

The sliding window pattern is a common technique in problem solving, used to optimize solutions for problems involving contiguous data, like arrays or strings. It is especially helpful when working with problems that require tracking a subset of elements or maintaining a window of data.

**Core Idea**
The sliding window pattern involves maintaining a "window" (a range of elements) that slides over the data structure. Instead of recalculating the result for every subset of data (which could be inefficient), you update the result dynamically as the window moves.

**When to use it:**

- When dealing with contiguous subarrays or substrings.
- When you need to find something like:
  - The maximum or minimum of a subarray.
  - The sum or product of elements in a subarray.
  - The length of the longest/shortest subarray meeting a certain condition.

**How it works:**

- **Define a window**:
  The window represents a subset of the data, typically represented by two pointers (start and end) that track its boundaries.
- **Expand the window**:
  Gradually increase the size of the window by moving one of the pointers (usually the end pointer).
- **Shrink the window** (optional):
  Adjust the start pointer to shrink the window when necessary (e.g., when the window becomes invalid or exceeds constraints).
- **Maintain a result**:
  Keep track of the desired result (e.g., maximum sum, longest substring) by updating it as the window slides.

**Why use it:**

- **Efficiency**: Reduces the need for nested loops, lowering time complexity from O(n^2) to O(n) in many cases.
- **Space-saving**: Operates within the input array or string, minimizing additional memory usage.

**Example Scenarios:**

- **Fixed-size window**:
  Problems where the window size is known (e.g., the maximum sum of a subarray of size k).
- **Dynamic-size window**:
  Problems where the window size varies (e.g., finding the smallest subarray with a sum greater than k).
- **Variable constraints**:
  Problems involving constraints like distinct elements or a specific character frequency in a substring.

### Divide & Conquer

The divide and conquer pattern is a powerful problem-solving approach that involves breaking a problem into smaller, more manageable subproblems, solving each subproblem independently, and then combining their solutions to solve the original problem. This pattern is often used to solve problems efficiently, especially those that can be broken into overlapping or non-overlapping parts.

**Key Steps in Divide and Conquer:**

- Divide: Split the problem into smaller subproblems. These subproblems should ideally be similar in nature to the original problem.
- Conquer: Solve each subproblem independently. If the subproblem is small enough, solve it directly (base case). Otherwise, apply the divide and conquer strategy recursively.
- Combine: Merge the solutions of the subproblems to form the solution to the original problem.

**When to use it:**

- The problem can be broken into smaller, independent subproblems.
- Solving subproblems recursively is easier than solving the original problem directly.
- There is a clear way to combine the solutions of subproblems.
- Efficiency matters, and breaking the problem down can reduce complexity.

**Common Applications:**

- Sorting Algorithms:
  - Merge Sort and Quick Sort split the array into smaller subarrays, sort them, and then combine the results.
- Searching Algorithms:
  - Binary Search repeatedly divides the search space in half to find the target value.
- Matrix Multiplication:
  - Strassen's Algorithm divides matrices into smaller submatrices for efficient multiplication.
- Divide and Conquer in Geometry:
  - Finding the closest pair of points in a plane by dividing the points and solving for smaller regions.
- Dynamic Programming Overlapping Problems:
  - Techniques like the Master Theorem can analyze divide-and-conquer recursions to estimate runtime.

**Advantages:**

- Reduces problem complexity.
- Leverages recursion for simplicity.
- Many problems with inherent subproblem structures can be solved efficiently this way.

**Disadvantages:**

- May involve extra space due to recursion (stack usage).
- Combining solutions can sometimes be non-trivial or expensive.

## Recursion

Recursion is a problem-solving technique where a function calls itself to solve smaller instances of the same problem. It breaks a problem down into smaller subproblems of the same type until it reaches a base case (a condition where the function stops calling itself). Recursion is particularly useful for problems that can be defined in terms of smaller, similar subproblems.

**Key Components of Recursion:**

- **Base Case**: The condition that stops the recursion. Without a base case, the recursion would continue indefinitely, leading to a stack overflow.
- **Recursive Case**: The part of the function where it calls itself to break the problem into smaller pieces.
- **Progress Toward Base Case**: Each recursive call should move closer to the base case to ensure that the recursion terminates.

**How Recursion Solves Problems:**

- Identify the problem's repetitive structure or self-similarity.
- Define the base case to handle the smallest, simplest version of the problem.
- Define the recursive case to reduce the problem size and call the function with smaller inputs.
- Combine the results of the recursive calls to solve the larger problem.

**When to Use Recursion:**

- Problems have a natural hierarchical or tree-like structure.
- Subproblems are smaller instances of the original problem.
- Iterative solutions are too complex or less intuitive.
- Problems involve exploring multiple possibilities (e.g., backtracking, divide and conquer).

**Common Applications:**

- Tree Traversal:
  - Navigating through nodes of a tree (e.g., pre-order, in-order, post-order traversal).
- Divide and Conquer Algorithms:
  - Problems like merge sort, quick sort, and binary search naturally use recursion.
- Mathematical Computations:
  - Calculating factorials, Fibonacci sequences, or powers.
- Graph Algorithms:
  - Depth-first search (DFS) uses recursion to explore nodes.
- Dynamic Programming:
  - Problems like the knapsack problem or finding the nth Fibonacci number using recursion with memoization.
- Backtracking:
  - Solving puzzles like Sudoku, the N-Queens problem, or finding permutations.

**Advantages:**

- Intuitive and Cleaner Code: Recursion can simplify the implementation of complex problems by breaking them into manageable parts.
- Powerful for Tree/Graph Problems: Recursion is natural when dealing with problems that have a hierarchical structure.

**Disadvantages:**

- Risk of Stack Overflow: Recursive functions use the call stack, and excessive recursion depth can cause errors.
- Performance Overhead: Recursive calls can be slower than iterative approaches due to function call overhead.
- Memory Usage: Each recursive call consumes memory, which can become significant for deep recursion.

## Searching Algorithms

### Linear Search

The linear search algorithm is a straightforward method used to find a target element within a list or array by checking each element one by one from the beginning to the end. Here's how it works conceptually:

- Start at the Beginning:
  Begin at the first element of the list.

- Check Each Element:
  For each element in the list, compare it with the target value you are looking for.

- Determine a Match:
  If a match is found: Stop the search and return the position (or the element itself) as the result.
  If no match is found: Move on to the next element.

- Continue Until End:
  Continue this process until either a match is found or you have checked every element in the list.

- Result if Not Found:
  If you reach the end of the list without finding the target, the algorithm concludes that the target element is not present in the list.

- Key Points:

  - Simplicity:
    Linear search is simple to understand and implement.

  - Time Complexity:
    In the worst case, every element in the list must be checked, leading to a time complexity of
    O(n), where 𝑛 is the number of elements in the list.

  - Use Cases:
    This algorithm is most effective for small or unsorted lists. For larger or sorted lists, more efficient search algorithms (like binary search) might be preferable.
