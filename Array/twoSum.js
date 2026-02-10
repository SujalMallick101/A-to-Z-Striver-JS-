let nums=[1,6,2,10,3];
let target=7;

function twoSum(nums,target){
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],i);
    }

    let result=[];
    for(let i=0;i<nums.length;i++){
        let val=nums[i];
        let rem=target-val;
        if(map.has(rem) && map.get(rem)!==i){
            result.push(i,map.get(rem));
            break;
        }
    }
    return result;
}

console.log(twoSum(nums,target));