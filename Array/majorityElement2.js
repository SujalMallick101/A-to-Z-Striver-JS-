//Better solution
// let nums = [1, 2, 1, 1, 3, 2, 2];

// function majorityElement(nums) {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//     }

//     let majority = nums.length / 3;
//     let result = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (map.get(nums[i]) > majority && !result.includes(nums[i])) {
//             result.push(nums[i]);
//         }
//     }
//     return result;
// }

// console.log(majorityElement(nums));

//optimized solution

let nums = [1, 2, 1, 1, , 3, 2];

function majorityElement(nums) {
    let el1 = Number.MIN_SAFE_INTEGER;
    let el2 = Number.MIN_SAFE_INTEGER;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count1 === 0 && nums[i] !== el2) {
            el1 = nums[i];
            count1 = 1;
        }
        else if (count2 === 0 && nums[i] !== el1) {
            el2 = nums[i];
            count2 = 1;
        }
        else if (nums[i] === el1) {
            count1++;
        }
        else if (nums[i] === el2) {
            count2++;
        }
        else {
            count1--;
            count2--;
        }
    }

    let result = [];
    let cnt1 = 0
    let cnt2 = 0;

    let majority = Math.floor(nums.length / 3);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === el1) {
            cnt1++;
        }
        else if (nums[i] === el2) {
            cnt2++;
        }
    }

    if (cnt1 > majority) {
        result.push(el1);
    }

    if (cnt2 > majority && el2 !== el1) {
        result.push(el2);
    }

    return result;

}

console.log(majorityElement(nums));