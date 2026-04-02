let arr = [15, -2, 2, -8, 1, 7, 10, 23];

//brute force
// function largetSubarrayWithSum0(arr){
//     let count=0;
//     let maxCount=0;

//     for(let i=0;i<arr.length;i++){
//         let sum=0;
//         for(let j=i;j<arr.length;j++){
//             sum+=arr[j];
//             if(sum===0){
//                 count=j-i+1;
//                 maxCount=Math.max(maxCount,count);
//             }
//         }
//     }
//     return maxCount;
// }

// console.log(largetSubarrayWithSum0(arr));

//optimized approach

function largetSubarrayWithSum0(arr) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === 0) {
            maxLen = Math.max(maxLen, i + 1);
        }
        let rem = sum - 0;
        if (map.has(rem)) {
            let len = i - map.get(rem);
            maxLen = Math.max(maxLen, len);
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return maxLen;
}

console.log(largetSubarrayWithSum0(arr));