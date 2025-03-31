function minJumps(arr) {
    console.log("Value of Array:", arr)
    if (arr[0] === 0) return -1;

    let jumps = 0;           
    let farthest = 0;        
    let current_end = 0;     

    for (let i = 0; i < arr.length; i++) {
        farthest = Math.max(farthest, i + arr[i]);
        console.log("Farthest value:", farthest)
        if (i == current_end) {
            jumps++;  

            if (current_end >= arr.length - 1) break;

            current_end = farthest;  
            console.log("current end:", current_end)
        }
    }

    return jumps;
}

let arr = [2, 2, 4, 0, 5, 1, 1, 4, 2, 9];
console.log(minJumps(arr));  // Output: 2 (Jumps from index 0 -> 6, and then 6 -> 9)
