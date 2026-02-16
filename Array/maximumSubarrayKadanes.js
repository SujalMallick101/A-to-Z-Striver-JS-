let arr=[-2,-3,-1,-8];

function maxSubarray(nums) {
    let sum = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(max, sum);
    }

    return max;
}

let nums = [-2, -3, -7, -2, -10, -4];
console.log(maxSubarray(nums));
