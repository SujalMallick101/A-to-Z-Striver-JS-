let nums=[-3,2,1];
let k=6;

function longestSubarrayWithSumK(nums, k) {
    let sum=0;
    let maxLen=0;
    let map=new Map();

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum==k){
            maxLen=Math.max(maxLen,i+1);
        }
        let rem=sum-k;
        if(map.has(rem)){
            let len=i-map.get(rem);
            maxLen=Math.max(maxLen,len);
        }
        if(!map.has(sum)){
            map.set(sum,i);
        }
    }
    return maxLen;
}

console.log(longestSubarrayWithSumK(nums,k));