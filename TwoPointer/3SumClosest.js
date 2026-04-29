let nums = [-1, 2, 1, -4];
let target = 1;


function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);

    let maxDiff = Infinity;
    let result = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        let sum = nums[i] + nums[left] + nums[right];

        let diff = Math.abs(sum - target);

        if (diff < maxDiff) {
            maxDiff = diff;
            result = sum;
        }

        if (sum === target) {
            return sum;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return result;
}

console.log(threeSumClosest(nums, target));