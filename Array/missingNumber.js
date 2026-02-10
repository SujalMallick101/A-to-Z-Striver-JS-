let arr = [0, 2, 3, 5, 4];

function missingNumber(arr) {
    let n = arr.length;
    let total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let result = total - sum;
    return result;
}

console.log(missingNumber(arr));