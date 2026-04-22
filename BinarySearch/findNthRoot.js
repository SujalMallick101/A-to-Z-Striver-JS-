let n = 4;
let m = 69;

function findNthRoot(n, m) {
    let low = 0;
    let high = m;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (Math.pow(mid, n) === m) {
            return mid;
        }

        if (Math.pow(mid, n) > m) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(findNthRoot(n, m));