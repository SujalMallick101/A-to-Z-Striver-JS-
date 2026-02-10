const arr=[10,5,10];

function secondLargest(arr){
    let largest=-1
    let secondLargest=-1

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest
            largest=arr[i]
        }
        else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest(arr));