function rearrange(arr) {
    let j = 0;  // Pointer to track where the next negative number should go

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is negative, we need to move it to the front
        if (arr[i] < 0) {
            // Manually swap arr[i] with arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            // Increment j to move to the next position
            j++;
        }
    }

    return arr;
}

// Example Usage
const arr = [-1, 2, 3, -4, -3, 5, 6, -2];
console.log("Rearranged Array:", rearrange(arr));
