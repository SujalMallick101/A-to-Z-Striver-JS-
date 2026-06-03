let nums = [4, 5, 0, -2, -3, 1];
let k = 5;

function subarraySum(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = ((sum % k) + k) % k;
        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(rem, (map.get(rem) || 0) + 1);
    }
    return count;
}

console.log(subarraySum(nums, k))