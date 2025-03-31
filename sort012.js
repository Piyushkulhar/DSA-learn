// function Sort012(arr) {    
//     let n = arr.length;
//     let temp = arr.slice()
//     finalArr = []

//     while (temp.length > 0) {
//         let mini = Infinity;  

//         for (let i = 0; i < temp.length; i++) {
//             if (temp[i] < mini) {
//                 mini = temp[i];
//             }
//         }
        
//         let index = temp.indexOf(mini);
//         if (index !== -1) {
//             console.log(temp);
//             temp.splice(index, 1);     
//             finalArr.push(mini);       
//         }
//     }
//     console.log("Sorted final array:", finalArr);
// }

// const arr = [0,1,2,0,1];

// Sort012(arr);


class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(arr) {
        // your code here
        
        let start = 0;
        let end = arr.length-1;
        let mid = 0;
        
        while(mid<=end){
            if(arr[mid]==0){
                let temp = arr[start];
                console.log("Temp:", temp);
                arr[start] = arr[mid];
                arr[mid] =temp;
                console.log("Array:", arr);
                start++;
                mid++;
            }else if(arr[mid]==1){
                mid++;
            }else{
                let temp = arr[end];
                arr[end] = arr[mid];
                arr[mid] = temp;
                end--;
            }
        }
    }
}

const solution = new Solution();
let arr = [2, 0, 1, 2, 1, 0];
solution.sort012(arr);
console.log(arr);