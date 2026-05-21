let nums = [1, 2, 1, 2, 3];
let k = 2;

function helper(nums, k) {
    let l = 0;
    let h = 0;
    let count = 0;
    let map = new Map();

    while (h < nums.length) {
        let num = nums[h];
        map.set(num, (map.get(num) || 0) + 1);
        while (map.size > k) {
            let leftNum = nums[l];
            map.set(leftNum, map.get(leftNum) - 1);
            if (map.get(leftNum) === 0) {
                map.delete(leftNum);
            }
            l++;
        }
        count += h - l + 1;
        h++;
    }
    return count;
}

function subarraysWithKDistinct(nums, k) {
    return helper(nums, k) - helper(nums, k - 1);
}

console.log(subarraysWithKDistinct(nums, k));