let nums=[1,-2,0,3];

function maximumSum(nums) {
    let maxSum=nums[0];
    let res=nums[0];
    for(let i=1;i<nums.length;i++){
        maxSum+=nums[i];
        let dummySum=maxSum;
        let sumDeleted=maxSum;
        let j=i;
        while(j>=0){
            let newSum=dummySum-nums[j];
            sumDeleted=Math.max(sumDeleted,newSum);
            j--;
        }
        res=Math.max(res,maxSum,sumDeleted);
    }
    return res;
}

console.log(maximumSum(nums));