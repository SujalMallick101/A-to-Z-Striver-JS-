let n = 4;
let nums = [7, 15, 6, 3];
let h = 8;

function koko(nums, h) {
    let low = 1;
    let high = Math.max(...nums);
    let ans = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let k = requireTime(mid, nums);
        if (k <= h) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}

function requireTime(mid, nums) {
    let totalHours = 0;
    for (let i = 0; i < nums.length; i++) {
        totalHours += Math.ceil(nums[i] / mid);
    }
    return totalHours;
}

console.log(koko(nums, h));