let arr=[5,1,3,4,7];
let target=12;

function tripletsWithSmallerSum(arr,target){
    arr.sort((a,b)=>a-b);

    let count=0;
    for(let i=0;i<arr.length-2;i++){
        let left=i+1;
        let right=arr.length-1;

        while(left<right){
            let sum=arr[i]+arr[left]+arr[right];

            if(sum<target){
                count+=(right-left);
                left++;
            }
            else{
                right--;
            }
        }
    }
    return count;
}

console.log(tripletsWithSmallerSum(arr,target));