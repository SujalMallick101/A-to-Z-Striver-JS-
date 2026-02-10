const nums=[1,2,3,4,5,6];

function leftRotateArrayByKPlaces(nums,k){
    const n=nums.length;
    k=k%n;
    let temp=[];

    for(let i=0;i<n;i++){
        temp[(i-k+n)%n]=nums[i];
    }
    for(let i=0;i<temp.length;i++){
        nums[i]=temp[i];
    }
    return nums;
}

console.log(leftRotateArrayByKPlaces(nums,2));



