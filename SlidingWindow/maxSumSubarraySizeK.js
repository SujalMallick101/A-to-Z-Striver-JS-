let arr = [100, 200, 300, 400];
let k = 2;

function maxSumSubarraySizeK(arr, k) {
    let l = 0;
    let h = k - 1;

    let sum = 0;
    for (let i = l; i <= h; i++) {
        sum += arr[i];
    }
    let maxSum = sum;


    while (h < arr.length - 1) {
        l++;
        h++;
        sum -= arr[l - 1];
        sum += arr[h];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

console.log(maxSumSubarraySizeK(arr, k));