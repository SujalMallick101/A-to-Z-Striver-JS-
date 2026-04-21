let nums = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;

function searchInRotatedSortedArray(nums, k) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === k) {
            return true;
        }

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= k && k < nums[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1
            }
        }
        else {
            if (nums[mid] < k && k <= nums[high]) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
    }
    return false;
}

console.log(searchInRotatedSortedArray(nums, k));