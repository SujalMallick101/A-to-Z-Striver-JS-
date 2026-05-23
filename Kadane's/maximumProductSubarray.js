let nums = [-2, 3, -4];

function maxProduct(nums) {
    let maxEnding = nums[0];
    let minEnding = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let c1 = maxEnding * nums[i];
        let c2 = minEnding * nums[i];
        let c3 = nums[i];

        maxEnding = Math.max(c1, c2, c3);
        minEnding = Math.min(c1, c2, c3);
        res = Math.max(res, maxEnding, minEnding);
    }
    return res;
}

console.log(maxProduct(nums));