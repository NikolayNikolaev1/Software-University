function biggestElement(matrix) {
    let min = Number.NEGATIVE_INFINITY

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > min) {
                min = matrix[row][col]
            }
        }
    }

    return min
}

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))