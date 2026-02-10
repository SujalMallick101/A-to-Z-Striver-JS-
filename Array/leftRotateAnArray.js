const nums=[-1,0,3,6];

function leftRotateArray(nums){
    if(nums.length===0){
        return nums;
    }
    const temp=nums[0];

    for(let i=1;i<nums.length;i++){
        nums[i-1]=nums[i];
    }
    nums[nums.length-1]=temp;
    return nums;
}

console.log(leftRotateArray(nums)); 