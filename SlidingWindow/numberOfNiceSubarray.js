let nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
let k = 2;

function atMost(nums, k) {
    let l = 0;
    let count = 0;
    let oddCount = 0;

    for (let h = 0; h < nums.length; h++) {
        if (nums[h] % 2 !== 0) {
            oddCount++;
        }
        while (oddCount > k) {
            if (nums[l] % 2 !== 0) {
                oddCount--;
            }
            l++;
        }
        count += (h - l + 1);
    }
    return count;
}

function numberOfNiceSubarrays(nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
}

console.log(numberOfNiceSubarrays(nums, k));