function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const midPoint = Math.floor((left + right) / 2);

        if (arr[midPoint] > arr[right]) {
            // The rotation point is on the right side
            left = midPoint + 1;
        } else {
            // The rotation point is on the left side or at midPoint
            right = midPoint;
        }
    }

    return left;
}

// Example usage
console.log(findRotationCount([15, 18, 2, 3, 6, 12]));  // Output: 2
console.log(findRotationCount([7, 9, 11, 12, 5]));      // Output: 4
console.log(findRotationCount([7, 9, 11, 12, 15]));     // Output: 0
