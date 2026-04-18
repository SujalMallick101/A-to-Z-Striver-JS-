let nums = [1, 3, 5, 6];
let target = 2;

//linear solution
// function searchInsertPosition(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i;
//         }
//         else if (nums[i] < target) {
//             continue;
//         }
//         else if (nums[i] > target) {
//             return i;
//         }
//     }
// }

//binary solution

function searchInsertPosition(nums, target) {
    let low = 0;;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] < target) {
            low = mid + 1;
        }
        else if (nums[mid] >= target) {
            return mid;
        }
    }
}

console.log(searchInsertPosition(nums, target));