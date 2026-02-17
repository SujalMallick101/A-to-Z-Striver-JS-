let nums = [1, 1, 5];

function nextPermutation(nums) {
    let idx = -1;
    let n = nums.length;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }

    if (idx === -1) {
        nums.reverse();
        return nums;
    }

    for (let i = n - 1; i >= idx; i--) {
        if (nums[i] > nums[idx]) {
            let temp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = temp;
            break;
        }
    }

    let left = idx + 1;
    let right = n - 1;

    while (left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    return nums;
}

console.log(nextPermutation(nums));