let arr = [1, 1, 1, 2, 2, 3, 3];

//better approach
// function removeDuplicateFromSortedArray(arr) {
//     let i = 0;
//     let j = 1;
//     let result = [];

//     while (j < arr.length) {
//         if (arr[i] === arr[j]) {
//             j++;
//         }
//         else if (arr[i] !== arr[j]) {
//             result.push(arr[i]);
//             i = j;
//             j++;
//         }
//     }
//     result.push(arr[i]);
//     return result;
// }

//optimal 
function removeDuplicateFromSortedArray(arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        }
        else if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i + 1;
}

console.log(removeDuplicateFromSortedArray(arr));