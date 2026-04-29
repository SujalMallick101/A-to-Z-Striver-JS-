let nums = [-7, -3, 2, 3, 11]

function sortedSquares(nums) {

    // Find the index of the first non-negative number
    let i = 0;
    for (let b = 0; b < nums.length; b++) {
        if (nums[b] >= 0) {
            i = b;
            break;
        }
    }

    //if all numbers are positive or zero, square them and return
    if (i === 0) {
        for (let a = 0; a < nums.length; a++) {
            nums[a] = nums[a] * nums[a];
        }
        return nums;
    }

    //if all numbers are negative, square them, reverse the array and return
    if (i === nums.length) {
        for (let a = 0; a < nums.length; a++) {
            nums[a] = nums[a] * nums[a];
        }
        nums.reverse();
        return nums;
    }


    // Square the negative and non-negative numbers separately
    let j = i - 1;

    for (let k = j; k >= 0; k--) {
        nums[k] = nums[k] * nums[k];
    }

    for (let k = i; k < nums.length; k++) {
        nums[k] = nums[k] * nums[k];
    }

    let result = [];

    // Merge the two sorted arrays
    while (j >= 0 && i < nums.length) {
        if (nums[j] < nums[i]) {
            result.push(nums[j]);
            j--;
        }
        else {
            result.push(nums[i]);
            i++;
        }
    }

    while (j >= 0) {
        result.push(nums[j]);
        j--;
    }

    while (i < nums.length) {
        result.push(nums[i]);
        i++;
    }

    return result;
}

console.log(sortedSquares(nums));