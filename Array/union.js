let nums1 = [1, 2, 3, 4, 5];
let nums2 = [1, 2, 7];

let n = nums1.length;
let m = nums2.length;

let result = [];

function union(nums1, nums2) {
    let i = 0, j = 0;

    while (i < n && j < m) {
        if (nums1[i] < nums2[j]) {
            if (!result.includes(nums1[i])) {
                result.push(nums1[i]);
            }
            i++;
        }
        else if (nums2[j] < nums1[i]) {
            if (!result.includes(nums2[j])) {
                result.push(nums2[j]);
            }
            j++;
        }
        else {
            if (!result.includes(nums1[i])) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        }
    }
    while (i < n) {
        if (!result.includes(nums1[i])) {
            result.push(nums1[i]);
        }
        i++;
    }
    while (j < m) {
        if (!result.includes(nums2[j])) {
            result.push(nums2[j]);
        }
        j++;
    }
    return result;
}

console.log(union(nums1, nums2));