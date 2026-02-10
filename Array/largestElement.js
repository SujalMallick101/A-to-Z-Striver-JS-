const arr=[8,10,5,7,9]

function largestElement(arr){
    let largest=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

console.log(largestElement(arr));