let nums = [1, 2, 1, 1, 3, 2, 2];

function majorityElement(nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let majority = nums.length / 3;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) > majority && !result.includes(nums[i])) {
            result.push(nums[i]);
        }
    }
    return result;
}

console.log(majorityElement(nums));