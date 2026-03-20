let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

function setZeroes(matrix) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                markRow(matrix, i);
                markCol(matrix, j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

function markRow(matrix, row) {
    for (let j = 0; j < matrix[0].length; j++) { // ✅ use j
        if (matrix[row][j] !== 0) {
            matrix[row][j] = -1;
        }
    }
}

function markCol(matrix, col) {
    for (let i = 0; i < matrix.length; i++) { // ✅ use i
        if (matrix[i][col] !== 0) {
            matrix[i][col] = -1;
        }
    }
}

console.log(setZeroes(matrix));