let nums = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

function segregate(nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] === 0 && nums[j] === 0) {
            i++;
        }
        else if (nums[i] === 1 && nums[j] === 1) {
            j--;
        }
        else if (nums[i] === 0 && nums[j] === 1) {
            i++;
            j--;
        }
        else {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    return nums;
}

console.log(segregate(nums));