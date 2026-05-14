let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
let k = 3;

function longestOnes(nums, k) {
    let l = 0;
    let h = 0;
    let res = 0;
    let zeros = 0;

    while (h < nums.length) {
        if (nums[h] === 0) {
            zeros++;
        }
        while (zeros > k) {
            if (nums[l] === 0) {
                zeros--;
            }
            l++;
        }
        let len = h - l + 1;
        res = Math.max(res, len);
        h++;
    }

    return res;

}
console.log(longestOnes(nums, k));