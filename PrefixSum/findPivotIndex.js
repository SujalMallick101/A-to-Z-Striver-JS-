let nums = [2,1,-1 ];

//best approach
// function pivotIndex(nums) {
//     let prefixSum = [];
//     let suffixSum = [];

//     prefixSum[0] = 0;
//     suffixSum[nums.length - 1] = 0;

//     for (let i = 1; i < nums.length; i++) {
//         prefixSum[i]= prefixSum[i - 1] + nums[i - 1];
//     }

//     for (let i = nums.length - 2; i >= 0; i--) {
//         suffixSum[i] = suffixSum[i + 1] + nums[i + 1];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (prefixSum[i] === suffixSum[i]) {
//             return i;
//         }
//     }
//     return -1;
// }

//optimized approach

function pivotIndex(nums) {
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        leftSum = leftSum + nums[i-1] || 0;
        rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
}

console.log(pivotIndex(nums))