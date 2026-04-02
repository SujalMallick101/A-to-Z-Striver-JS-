let nums = [2, -2, 0, 3, -3, 5];

//brute force

// function threeSum(nums){
//     let result=[];

//     for(let i=0;i<nums.length-2;i++){
//         for(let j=i+1;j<nums.length-1;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k]===0){
//                     result.push([nums[i],nums[j],nums[k]]);
//                 }
//             }
//         }
//     }

//     return result;
// }

// console.log(threeSum(nums));

//optimal solution

function threeSum(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return result;
}

console.log(threeSum(nums));



