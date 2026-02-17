let nums = [2, 4, 5, -1, -3, -4];

function rearrangeArrayBySign(nums) {
    let posIdx = 0;
    let negIdx = 1;
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 || nums[i] === 0) {
            res[posIdx] = nums[i];
            posIdx += 2;
        } else {
            res[negIdx] = nums[i];
            negIdx += 2;
        }
    }
    return res;
}

console.log(rearrangeArrayBySign(nums));