let nums = [3, 4, 4, 7, 8, 10];
let x = 5;

//linear approach
// function floorAndCeil(nums, x) {
//     let floor = -1;
//     let ceil = -1;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === x) {
//             floor = nums[i];
//             ceil = nums[i];
//             break;
//         }
//         else if (nums[i] < x) {
//             continue;
//         }
//         else if (nums[i] > x) {
//             floor = nums[i - 1];
//             ceil = nums[i];
//             break;
//         }
//     }
//     return [floor, ceil];
// }

//binary approach
function floorAndCeil(nums, x) {
    let low = 0;
    let high = nums.length - 1;
    let floor = -1;
    let ceil = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === x) {
            floor = nums[i];
            ceil = nums[i];
            break;
        }
        else if (nums[mid] < x) {
            low = mid ;
        }
        else if (nums[mid] > x) {
            floor = nums[mid - 1];
            ceil = nums[mid];
            break;
        }
    }
    return [floor, ceil];
}

console.log(floorAndCeil(nums, x));