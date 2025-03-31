// function MinValue(arr){
//     let n = arr.length;
//     let min = Infinity;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min
// }

// function MaxValue(arr){
//     let n = arr.length;
//     let max = -Infinity;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// const arr = [10,4,2,6,9,1];

// console.log("Minimum Value of array:", MinValue(arr))
// console.log("Maximum Value of array:", MaxValue(arr))



function MinValue(arr) {
    let n = arr.length;
    let min = Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

function MaxValue(arr) {
    let n = arr.length;
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
const arr = [1,2,3,4,5,6,7,8,9,10]

console.log("Minimum value:", MinValue(arr))
console.log("Minimum value:", MaxValue(arr))

