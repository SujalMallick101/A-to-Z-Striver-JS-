let nums = [4, 5, 6, 7, 6, 1, 2, 3];


function findMinimumInRotatedSortedArray(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        }
        else {
            high = mid;
        }

    }

    return nums[low];
}

console.log(findMinimumInRotatedSortedArray(nums));