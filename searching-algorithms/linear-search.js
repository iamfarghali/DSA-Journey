function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([4, 8, 9, 1, 0, 14], 14)); // 5
console.log(linearSearch([10, 5, 12, 4, 8, 9, 1, 0, 14], 99)); // -1
