// =============================================================
/*
  Write a function called 'same', which accepts two arrays.
  The function should return 'true' if every value in the array
  has its corresponding value squared in the second array.
  The frequncey of values must be the same.
*/
// =============================================================

/*
  - every value in arr1 has its corresponding value squared in arr2
    arr1 = [1, 2, 3]
    arr2 = [1, 9, 4]
    result ==> true
  - frequncey of values must be the same
    - C1
      arr1 = [1, 2, 3, 4]
      arr2 = [1, 4, 9]
      result ==> false
    - C2
      arr1 = [1, 2, 3, 4, 2, 3]
      arr2 = [1, 4, 9, 16, 4, 1]
      result ==> false
    - C3 
      arr1 = [1, 2, 3, 4, 2, 3]
      arr2 = [1, 4, 9, 9, 16, 4]
      result ==> true
  - our frequncey maps should look like these
  {
    1:1,
    2:1,
    3:2,
  }
  
  {
    1:1,
    4:1,
    9:2
  }
*/

function same(arr1, arr2) {
  // Two arrays must be the same size and not to be empty
  if (arr1.length === 0 || arr2.length === 0 || arr1.length !== arr2.length)
    return false;

  const map1 = {},
    map2 = {};

  arr1.forEach((num) => (map1[num] = (map1[num] || 0) + 1));
  arr2.forEach((num) => (map2[num] = (map2[num] || 0) + 1));

  for (const num of Object.keys(map1)) {
    const squaredNum = num ** 2;
    if (!(squaredNum in map2)) return false;
    if (map2[squaredNum] !== map1[num]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [1, 9, 4])); // true
console.log(same([1, 2, 3], [9, 4])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false
