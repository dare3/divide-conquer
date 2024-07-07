function sortedFrequency(arr, searchValue) {
    const firstValue = arr.indexOf(searchValue);
    const lastValue = arr.lastIndexOf(searchValue);

    if (firstValue === -1) {
        return -1;
    }
    return lastValue - firstValue + 1;
}

// Example usage
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // Output: 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // Output: 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // Output: 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // Output: -1
