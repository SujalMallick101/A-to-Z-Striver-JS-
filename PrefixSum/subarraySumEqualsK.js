let nums = [1, 1, 1];
let k = 2;

function subarraySum(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log(subarraySum(nums, k))