const arr=[5,4,6,7,8];
let n=arr.length;

function checkArrayIsSorted(arr,n){
    flag=true;
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            flag=false;
            break;
        }
    }
    return flag;
}

console.log(checkArrayIsSorted(arr,n));