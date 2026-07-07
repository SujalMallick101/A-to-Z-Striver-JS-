let nums = [0, 1];

function findMaxLength(nums) {
    let zero = 0;
    let one = 0;
    let res = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero++;
        }
        else {
            one++;
        }

        let diff = zero - one;

        if (diff === 0) {
            res = Math.max(res, i + 1);
        }
        else if (map.has(diff)) {
            res = Math.max(res, i - map.get(diff));
        }

        else {
            map.set(diff, i);
        }


    }
    return res;
}

console.log(findMaxLength(nums))