let nums = [2, -5, 1, -4, 3, -2];

function maxAbsoluteSum(nums) {
    let maxSum=nums[0];
    let minSum=nums[0];
    let res=Math.abs(nums[0]);

    for(let i=1;i<nums.length;i++){
        maxSum=Math.max(nums[i],maxSum+nums[i]);
        minSum=Math.min(nums[i],minSum+nums[i]);

        res=Math.max(res,Math.abs(maxSum),Math.abs(minSum));
    }
    return res;
}

console.log(maxAbsoluteSum(nums));