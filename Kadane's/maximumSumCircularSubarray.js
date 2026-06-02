let nums=[1,-2,3,-2];

function maximumSum(nums) {
    let maxSumEnding=nums[0];
    let minSumEnding=nums[0];
    let maxSum=nums[0];
    let minSum=nums[0];
    let totalSum=nums[0];

    for(let i=1;i<nums.length;i++){
        totalSum+=nums[i];

        maxSumEnding=Math.max(nums[i],maxSumEnding+nums[i]);
        maxSum=Math.max(maxSum,maxSumEnding);

        minSumEnding=Math.min(nums[i],minSumEnding+nums[i]);
        minSum=Math.min(minSum,minSumEnding);
    }

    if(maxSum<0){
        return maxSum;
    }

    return Math.max(maxSum,totalSum-minSum);

}

console.log(maximumSum(nums));