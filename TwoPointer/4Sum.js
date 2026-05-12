let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let target2 = target - nums[i];

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = nums.length - 1;


            while (left < right) {
                let sum = nums[j] + nums[left] + nums[right];

                if (sum === target2) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (right > left && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
                else if (sum < target2) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
    }
    return result;
}

console.log(fourSum(nums, target));