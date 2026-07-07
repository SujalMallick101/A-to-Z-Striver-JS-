let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let [start, end] = intervals[0];
    let ans = [];

    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i];
        if (end >= currStart) {
            end = Math.max(end, currEnd);
        }
        else {
            ans.push([start, end]);
            [start, end] = [currStart, currEnd];
        }
    }

    ans.push([start, end]);
    return ans;

}

console.log(merge(intervals))