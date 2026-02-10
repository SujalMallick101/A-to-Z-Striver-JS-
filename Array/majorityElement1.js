let nums = [1, 1, 1, 2, 1, 2];

function majorityElement1(nums) {
    let el = null;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            el = nums[i];
            count++;
        }
        else if (nums[i] === el) {
            count++;
        }
        else {
            count--;
        }
    }
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === el) {
            c++;
        }
    }
    if (c > (Math.floor(nums.length / 2))) {
        return el;
    }
    return -1;
}

console.log(majorityElement1(nums));



