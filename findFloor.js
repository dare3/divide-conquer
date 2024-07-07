function findFloor(arr, findValue) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        const midValue = left + Math.floor((right - left) / 2);

        if (arr[midValue] <= findValue) {
            floor = arr[midValue];
            left = midValue + 1;
        } else {
            right = midValue - 1;
        }
    }

    return floor;
}

// Example usage
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9));  // Output: 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // Output: 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0));  // Output: -1
