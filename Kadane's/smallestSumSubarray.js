let arr = [3, -4, 2, -3, -1, 7, -5];

function minSubArray(arr) {
    let bestEnding = arr[0];
    let ans = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let c1 = bestEnding + arr[i];
        let c2 = arr[i];
        bestEnding = Math.min(c1, c2);
        ans = Math.min(ans, bestEnding);
    }
    return ans;
}

console.log(minSubArray(arr));