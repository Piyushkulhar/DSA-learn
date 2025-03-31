function NewreverseArray(arr) {
    let n = arr.length;
    let tempArr = new Array(n);

    for(let i = 0; i < n; i++) {
        tempArr[i] = arr[n - i - 1]
    }
    return tempArr;
}

const arr = [1,3,5,6,7,8];
tempArr = NewreverseArray(arr);
console.log("Revered array values:", tempArr.join(' '));
