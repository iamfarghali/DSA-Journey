function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("i:", i, "j:", j, "Arr:", arr);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break; // Exit early if no swaps
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSort([5, 4, 1, 6, 3])); // [1, 3, 4, 5, 6]
