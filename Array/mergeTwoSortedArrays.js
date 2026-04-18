let nums1 = [-5, -2, 4, 5];
let nums2 = [-3, 1, 8];
let m = nums1.length;
let n = nums2.length;


//brute force approach

// function mergeTwoSortedArrays(nums1, nums2) {
//     let result = new Array(nums1.length + nums2.length).fill(0);

//     let i = 0;
//     let j = 0;

//     for (let k = 0; k < result.length; k++) {
//         if (i < nums1.length && j < nums2.length) {
//             if (nums1[i] < nums2[j]) {
//                 result[k] = nums1[i];
//                 i++;
//             } else {
//                 result[k] = nums2[j];
//                 j++;
//             }
//         }
//         else if (i < nums1.length) {
//             result[k] = nums1[i];
//             i++;
//         }
//         else if (j < nums2.length) {
//             result[k] = nums2[j];
//             j++;
//         }
//     }
//     return result;
// }

//optimal solution

function mergeTwoSortedArrays(nums1, m, nums2, n) {
    for (let i = m; i < (m + n); i++) {
        nums1[i] = 0;
    }

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    for (let l = 0; l < (m + n); l++) {
        if (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
                k--;
            }
            else {
                nums1[k] = nums2[j];
                j--;
                k--;
            }
        }
        else if (i >= 0) {
            nums1[k] = nums1[i];
            i--;
            k--;
        }
        else if (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    return nums1;
}

console.log(mergeTwoSortedArrays(nums1, m, nums2, n));
