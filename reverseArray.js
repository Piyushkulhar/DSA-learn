
function reverseArray(arr) {
    let reversedArray = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    
    return reversedArray;
}

const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array));

// i = 5 - 1 = 4
// reversedArray = [5]
// i = 5 - 1 = 3
// reversedArray = [5, 4]
// i = 5 - 1 = 2
// reversedArray = [5, 4, 3]

// Example 2

// JavaScript Program to reverse an array using temporary array

// function to reverse an array
function reverseArray(arr) {
    let n = arr.length;

    // Temporary array to store elements in reversed order
    let temp = new Array(n);
    console.log("Initial temp array:", temp);

    // Copy elements from original array to temp in reverse order
    for (let i = 0; i < n; i++) {
        console.log("i in first loop:", i); // Logs the value of i
        temp[i] = arr[n - i - 1];          // This line is part of the loop now
    }

    // Copy elements back to original array
    for (let i = 0; i < n; i++) {
        console.log("i in second loop:", i); // Logs the value of i
        arr[i] = temp[i];                    // This line is part of the loop now
    }
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);

console.log("Reversed Array:", arr.join(" "));  // Join to print array as a space-separated string

