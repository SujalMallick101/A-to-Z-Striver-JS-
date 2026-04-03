let intervals = [[1, 3], [3, 6], [8, 10], [15, 18]];

//brute force approach
// function mergeOverlappingSubintervals(intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);

//     let ans = [];
//     let i = 0;
//     let n = intervals.length;

//     while (i < n) {
//         let start = intervals[i][0];
//         let end = intervals[i][1];

//         let j = i + 1;
//         while (j < n && intervals[j][0] <= end) {
//             end = Math.max(end, intervals[j][1]);
//             j++;
//         }
//         ans.push([start, end]);
//         i = j;
//     }
//     return ans;
// }

// console.log(mergeOverlappingSubintervals(intervals));

//optimal solution

function mergeOverlappingSubintervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];

    for (let interval of intervals) {
        if (ans.length === 0 || ans[ans.length - 1][1] < interval[0]) {
            ans.push(interval);
        }
        else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], interval[1]);
        }
    }
    return ans;
}

console.log(mergeOverlappingSubintervals(intervals));