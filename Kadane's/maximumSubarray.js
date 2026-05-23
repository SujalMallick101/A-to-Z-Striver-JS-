let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


function maxSubArray(nums) {
    let bestEnding = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let c1 = bestEnding + nums[i];
        let c2 = nums[i];
        bestEnding = Math.max(c1, c2);
        ans = Math.max(ans, bestEnding);
    }
    return ans;
}

console.log(maxSubArray(nums));