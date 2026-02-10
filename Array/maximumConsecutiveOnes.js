let nums=[1,1,0,0,1,1,0];

function findMaxConsecutiveOnes(nums) {
    let count=0;
    let maxCount=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++;
            maxCount=Math.max(maxCount,count);
        }
        else{
            count=0;
        }
    }
    return maxCount;
}

console.log(findMaxConsecutiveOnes(nums));