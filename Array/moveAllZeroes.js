let arr=[1,2,0,1,0,4,0];

function moveAllZeroesToEnd(arr){
    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[i]!==0){
            i++;
            j++;
        }
        else if(arr[i]===0 && arr[j]!==0){
            arr[i]=arr[j];
            arr[j]=0;
            i++;
            j++;
        }
        else{
            j++;
        }
    }
    return arr;
}

console.log(moveAllZeroesToEnd(arr));