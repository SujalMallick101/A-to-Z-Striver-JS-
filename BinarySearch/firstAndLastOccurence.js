let nums = [5, 7, 7, 8, 8, 10];
let target = 5;

//brute force
// function firstAndLastOccurence(nums, target) {
//     let first = -1;
//     let last = -1;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             first = i;
//             break;
//         }
//     }

//     if (first === -1) {
//         return [-1, -1];
//     }

//     for (let i = first + 1; i < nums.length; i++) {
//         if (nums[i] === target) {
//             last = i;
//         }
//     }

//     if (last !== -1) {
//         return [first, last];
//     }

//     else if (last === -1) {
//         return [first, first];
//     }

// }

//optimal solution
function firstAndLastOccurence(nums, target) {
    function findFirst(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                ans = mid;
                high = mid - 1;
            }
            else if (nums[mid] < target) {
                low = mid + 1;
            }
            else if (nums[mid] > target) {
                high = mid - 1;
            }
        }
        return ans;
    }

    function findLast(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                ans = mid;
                low = mid + 1;
            }
            else if (nums[mid] < target) {
                low = mid + 1;
            }
            else if (nums[mid] > target) {
                high = mid - 1;
            }
        }
        return ans;
    }

    return [findFirst(nums, target), findLast(nums, target)];
}

console.log(firstAndLastOccurence(nums, target));