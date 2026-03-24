let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rotateMatrix90(matrix) {
    // Transpose the matrix
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < m; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // reverse each row

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;

}

console.log(rotateMatrix90(matrix));