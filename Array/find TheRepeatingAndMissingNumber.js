let nums = [3, 5, 4, 1, 1];

//brute force
// function findTheRepeatingAndMissingNumber(nums) {
//     let n = nums.length;
//     let result = [];
//     let val;
//     let map = new Map();

//     for (let i = 1; i <= n; i++) {
//         if (!nums.includes(i)) {
//             val = i;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//     }

//     for (let [key, value] of map) {
//         if (value > 1) {
//             result.push(key);
//         }
//     }

//     result.push(val);
//     return result;

// }

//better approach
// function findTheRepeatingAndMissingNumber(nums) {
//     let n = nums.length;
//     let result = [];
//     let val;


//     for (let i = 1; i <= n; i++) {
//         if (!nums.includes(i)) {
//             val = i;
//         }
//     }

//     nums.sort((a, b) => a - b);

//     let val2=nums[0];
//     let val3;

//     for(let i=1;i<n;i++){
//         if(val2===nums[i]){
//             val3=val2;
//             break;
//         }
//         val2=nums[i];
//     }

//     result.push(val3);
//     result.push(val);
//     return result;

// }

//optimal approach
function findTheRepeatingAndMissingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let sum = 0;

    let result = [];

    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    let missing = expectedSum - sum;

    nums.sort((a, b) => a - b);
    let val = nums[0];
    let repeating;

    for (let i = 1; i < n; i++) {
        if (val === nums[i]) {
            repeating = val;
            break;
        }
        val = nums[i];
    }

    missing = missing + repeating;

    result.push(repeating);
    result.push(missing);
    return result;

}

console.log(findTheRepeatingAndMissingNumber(nums));

