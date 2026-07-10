let firstList = [[0, 2], [5, 10], [13, 23], [24, 25]];
let secondList = [[1, 5], [8, 12], [15, 24], [25, 26]];

function intervalIntersection(firstList, secondList) {
    let i = 0;
    let j = 0;
    let ans = [];

    while (i < firstList.length && j < secondList.length) {
        if (firstList[i][1] >= secondList[j][0] && firstList[i][0] <= secondList[j][1]) {
            ans.push([Math.max(firstList[i][0], secondList[j][0]), Math.min(firstList[i][1], secondList[j][1])]);
        }
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        }
        else {
            j++;
        }
    }
    return ans;
}

console.log(intervalIntersection(firstList, secondList))