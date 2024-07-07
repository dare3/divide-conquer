function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let midValue = Math.floor((left + right) / 2);
        
        // If middle element is 0, move left to search for earlier zeroes
        if (arr[midValue] === 0) {
            right = midValue - 1;
        } else {  // If middle element is 1, move right
            left = midValue + 1;
        }
    }
    
    // left now is the index of the first 0 in the array
    return arr.length - left;
}

// Example usage:
let arr = [1, 1, 1, 1, 0, 0];
console.log(countZeroes(arr));  // Output: 2

