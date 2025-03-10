function Sort012(arr) {    
    let n = arr.length;
    let temp = arr.slice()
    finalArr = []

    while (temp.length > 0) {
        let mini = Infinity;  

        for (let i = 0; i < temp.length; i++) {
            if (temp[i] < mini) {
                mini = temp[i];
            }
        }
        
        let index = temp.indexOf(mini);
        if (index !== -1) {
            console.log(temp);
            temp.splice(index, 1);     
            finalArr.push(mini);       
        }
    }
    console.log("Sorted final array:", finalArr);
}

const arr = [0,1,2,0,1];

Sort012(arr);

