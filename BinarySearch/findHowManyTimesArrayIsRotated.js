let nums = [4, 5, 6, 7, 0, 1, 2, 3];

//linear approach
// function findHowManyTimesArrayIsRotated(nums) {
//     let count = 1;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < nums[i - 1]) {
//             break;
//         }
//         count++;
//     }
//     return count;
// }

//binary approach
function findHowManyTimesArrayIsRotated(nums){
    let low=0;
    let high=nums.length-1;

    while(low<high){
        let mid=Math.floor((low+high)/2);

        if(nums[mid]>nums[high]){
            low=mid+1;
        }else{
            high=mid;
        }
    }
    return low;
}

console.log(findHowManyTimesArrayIsRotated(nums));