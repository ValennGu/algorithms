/**
 * Searches using Binary Search algorithm.
 * @param {number[]} arr Source list
 * @param {number} item Search item
 * @returns {(number|null)} Source list index if the value is found or null if not
 */
const binarySearch = (arr, item) => {
  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    const midIndex = Math.floor((lowIndex + highIndex) / 2);

    if (arr[midIndex] == item) {
      return midIndex;
    } else if (arr[midIndex] < item) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }

  return null;
};

// ----- Usage Examples ----- //

const dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(dataset, 1)); // 0
console.log(binarySearch(dataset, 5)); // 4
console.log(binarySearch(dataset, 7)); // 6
console.log(binarySearch(dataset, 10)); // 9
console.log(binarySearch(dataset, 11)); // null
