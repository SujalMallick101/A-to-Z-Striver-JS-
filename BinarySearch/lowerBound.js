let nums=[3,5,8,15,19];
let x=9;

//brute force
// function lowerBound(nums,x){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]<x){
//             continue;
//         }
//         else if(nums[i]>=x){
//             return i;
//         }
//     }
//     return -1;
// }

//optimal solution

function lowerBound(nums,x){
    let low=0;
    let high=nums.length-1;

    while(low<=high){
        let mid=Math.floor((low+high)/2);

        if(nums[mid]<x){
            low=mid+1;
        }
        else if(nums[mid]>=x){
            return mid;
        }
    }
    return -1;
}

console.log(lowerBound(nums,x));