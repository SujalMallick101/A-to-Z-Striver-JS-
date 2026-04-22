let n = 50;

function squareRoot(n) {
    let low = 0;
    let high = n;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid <= n) {
            ans = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ans;
}

console.log(squareRoot(n));