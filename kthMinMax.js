function findKthMinMax(arr, K) {    
    // Step 1: Sort the array in ascending order

    let sortedArr = arr.slice().sort(); // Create a sorted copy of the array
    console.log(sortedArr);
    // Step 2: Find the Kth minimum (Kth smallest element)
    let kthMin = sortedArr[K - 1]; // Since the array is 0-indexed, Kth min is at index K-1
    
    // Step 3: Find the Kth maximum (Kth largest element)
    let kthMax = sortedArr[sortedArr.length - K]; // The Kth max is at index array.length - K
    
    return { kthMin, kthMax };
}

const arr = [12, 3, 5, 7, 19, 1, 8];
const K = 3;

const { kthMin, kthMax } = findKthMinMax(arr, K);
console.log(`Kth Minimum: ${kthMin}`); // Output: Kth Minimum: 5
console.log(`Kth Maximum: ${kthMax}`); // Output: Kth Maximum: 12

