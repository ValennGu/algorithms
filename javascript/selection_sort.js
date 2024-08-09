/**
 * Sorts an array using selecting sort.
 * @param {number[]} arr Source list
 * @returns {(number[])} Sorted array from lowest to highest
 */
const selectionSort = (arr) => {
  const sorted = [];

  while (arr.length !== 0) {
    let min = 0;

    for (let i = 1; i < arr.length + 1; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
    }

    sorted.push(arr[min]);
    arr.splice(min, 1);
  }

  return sorted;
};

// ----- Usage Examples ----- //

console.log(selectionSort([10, 6, 7, 3, 8, 5, 1, 2, 4, 9]));
console.log(selectionSort([10, 6, 10, 3, 1, 0, 1, 2, 4, 9]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
