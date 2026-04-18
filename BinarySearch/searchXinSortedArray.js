let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;

function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > target) {
            high = mid - 1;
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

console.log(search(nums, target));