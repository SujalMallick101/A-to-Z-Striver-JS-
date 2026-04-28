let nums = [2, 7, 11, 15];
let target = 9;

//find elements

function twoSum2(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (i < j) {
        let sum = nums[i] + nums[j];

        if (sum === target) {
            return [i + 1, j + 1];
        }
        else if (sum > target) {
            j--;
        }
        else {
            i++;
        }
    }

    return [-1, -1];
}

console.log(twoSum2(nums, target));