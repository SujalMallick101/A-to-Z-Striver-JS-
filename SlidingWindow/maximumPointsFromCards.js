let cardPoints = [1, 2, 3, 4, 5, 6, 1];
let k = 3;

function maxScore(cardPoints, k) {
    let totalPoints = 0;
    for (let i = 0; i < cardPoints.length; i++) {
        totalPoints += cardPoints[i];
    }
    let windowSize = cardPoints.length - k - 1;
    let l = 0;
    let minWindowSum = Number.MAX_VALUE;
    let windowSum = 0;
    for (let h = l; h <= windowSize; h++) {
        windowSum += cardPoints[h];
    }
    minWindowSum = Math.min(minWindowSum, windowSum);

    while (windowSize < cardPoints.length - 1) {
        windowSum -= cardPoints[l];
        l++;
        windowSize++;
        windowSum += cardPoints[windowSize];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    return totalPoints - minWindowSum;
}

console.log(maxScore(cardPoints, k));