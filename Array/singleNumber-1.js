let nums=[1,2,2,4,3,1,4,0,1,3];

function singleNumber(nums) {
    let map=new Map();

    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
    }

    for(let [key,value] of map){
        if (value===1){
            return key;
        }
    }
    return -1;
}

console.log(singleNumber(nums));