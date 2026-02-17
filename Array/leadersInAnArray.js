let nums = [1,2,5,3,1,2];

function leaders(nums) {
    let n = nums.length;
    let result = [];
    result.push(nums[n-1]);
    let max=nums[n-1];

    for(let i=n-2;i>=0;i--){
        if(nums[i]>max){
            result.push(nums[i]);
            max=nums[i];
        }
    }

    return result;

}

console.log(leaders(nums));