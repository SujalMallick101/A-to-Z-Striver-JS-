let nums = [0, 0, 0, 0, 0];
let goal = 0;

//prefix sum + hash map
// function binarySubarraysWithSum(nums, goal) {
//     let map = new Map();
//     let cumSum = 0;
//     let count = 0;
//     map.set(0, 1);

//     for (let i = 0; i < nums.length; i++) {
//         cumSum += nums[i];
//         let diff = cumSum - goal;
//         if (map.has(diff)) {
//             count += map.get(diff);
//         }
//         map.set(cumSum, (map.get(cumSum) || 0) + 1);
//     }
//     return count;
// }

//sliding window
function binarySubarraysWithSum(nums, goal) {
    let l = 0;
    let h = 0;
    let sum = 0;
    let count = 0;
    let count_zeros = 0;

    while (h < nums.length) {
        sum += nums[h];
        while (l < h && (sum > goal || nums[l] === 0)) {
            if (nums[l] === 0) {
                count_zeros++;
            } else {
                count_zeros = 0;
            }

            sum -= nums[l];
            l++;
        }
        if (sum === goal) {
            count+= 1 + count_zeros;
        }
        h++;
    }
    return count;
}


console.log(binarySubarraysWithSum(nums, goal));