let intervals = [[1, 3], [6, 9]];
let newInterval = [2, 5];

function insert(intervals, newInterval) {
    let arr = [];
    let insert = false;

    //insert the new interval in the correct position
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= newInterval[0] && insert == false) {
            arr.push(newInterval);
            insert = true;
        }
        arr.push(intervals[i]);
    }

    if (insert == false) {
        arr.push(newInterval);
    }

    //merge the intervals
    let ans = [];
    let [start, end] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let [currStart, currEnd] = arr[i];
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

console.log(insert(intervals, newInterval))