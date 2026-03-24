let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

function setZeroes(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let row = new Array(n).fill(0);
    let col = new Array(m).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] === 1 || col[j] === 1) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}



console.log(setZeroes(matrix));