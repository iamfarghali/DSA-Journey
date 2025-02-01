function binarySearch(sortedArr, target) {
  // empty array
  if (!Array.isArray(sortedArr) || sortedArr.length === 0) return -1;

  // early exit
  if (target < sortedArr[0] || target > sortedArr[sortedArr.length - 1])
    return -1;

  let start = 0;
  let end = sortedArr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (sortedArr[middle] === target) return middle;
    if (sortedArr[middle] < target) start = middle + 1;
    else end = middle - 1;
  }
  return -1;
}

console.log(binarySearch([4, 5, 8, 9, 10, 45, 100, 101, 147], 101)); // 7
console.log(binarySearch([4, 5, 8, 9, 10, 45, 100, 101, 147], 1)); // -1
console.log(binarySearch([4, 5, 8, 9, 10, 45, 100, 101, 147], 5)); // 1
console.log(binarySearch([4, 5, 8, 9, 10, 45, 100, 101, 147], 10)); // 4
console.log(binarySearch([4, 5, 8, 9, 10, 45, 100, 101, 147], 1000)); // -1
console.log(binarySearch([4, 5, 8], 8)); // 2
console.log(binarySearch([4, 5, 8], 4)); // 0
console.log(binarySearch([4, 5, 8], -104)); // -1
console.log(binarySearch([], 4)); // -1
