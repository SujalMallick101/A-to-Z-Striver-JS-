let nums = [1, 2, 4, 4];
let target = 4;

function minimumSizeSubarraySum(nums, target) {
    let l = 0;
    let h = 0;
    let sum = 0;
    let res = Number.MAX_SAFE_INTEGER;

    while (h < nums.length) {
        sum += nums[h];
        while (sum >= target) {
            let len = h - l + 1;
            res = Math.min(res, len);
            sum -= nums[l];
            l++
        }
        h++;
    }
    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}

console.log(minimumSizeSubarraySum(nums, target));