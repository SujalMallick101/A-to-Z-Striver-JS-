let arr=[4,2,2,6,4];
let k=6;

function countSubarraysWithGivenXorK(arr, k) {
    let map = new Map();
    let xor=0;
    let count=0;

    map.set(0,1);

    for(let i=0;i<arr.length;i++){
        xor^=arr[i];
        
        let rem=xor^k;
        if(map.has(rem)){
            count+=map.get(rem);
        }
       
        map.set(xor,(map.get(xor) || 0)+1);
    }
    return count;
}

console.log(countSubarraysWithGivenXorK(arr, k));