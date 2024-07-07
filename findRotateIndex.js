function findRotatedIndex(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const midValue = Math.floor((left + right) / 2);

        if (arr[midValue] === x) {
            return midValue;
        }

        // Check which part of the array is sorted
        if (arr[left] <= arr[midValue]) {
            // Left part is sorted
            if (arr[left] <= x && x < arr[midValue]) {
                right = midValue - 1;
            } else {
                left = midValue + 1;
            }
        } else {
            // Right part is sorted
            if (arr[midValue] < x && x <= arr[right]) {
                left = midValue + 1;
            } else {
                right = midValue - 1;
            }
        }
    }

    return -1; // Number not found
}

// Example usage
console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1
