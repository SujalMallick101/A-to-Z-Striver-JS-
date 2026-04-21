let arr = [5, 5, 5, 5, 5, 5];
let target = 5;

function countOccurences(arr, target) {

    function countLeft(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                ans = mid;
                high = mid - 1;
            }
            else if (arr[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return ans;
    }

    function countRight(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                ans = mid;
                low = mid + 1;
            }
            else if (arr[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return ans;
    }

    let leftAns = countLeft(arr, target);

    if (leftAns === -1) return 0;

    let rightAns = countRight(arr, target);

    return rightAns - leftAns + 1;


}

console.log(countOccurences(arr, target));