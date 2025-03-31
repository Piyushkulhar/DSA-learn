// function rotateArray(arr) {
        
//     let lastElement = arr[arr.length - 1];
    
//     for (let i = arr.length - 2; i >= 0; i--) {
//         console.log("Value of I:", i);
//         arr[i + 1] = arr[i];
//     }
    
//     arr[0] = lastElement;

//     return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(rotateArray(arr)); // Output: [5, 1, 2, 3, 4]


function rotateArray(arr) {
    
    let lastElement = arr.pop();
    
    arr.unshift(lastElement);

    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr)); // Output: [5, 1, 2, 3, 4]
