function diagonalSums(matrix) {
    let normalDiagonal =  0
    let backDiagonal = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                normalDiagonal += matrix[row][col]
                backDiagonal += matrix[row][matrix.length - 1 - row]
            }
        }
    }

    console.log(normalDiagonal + " " +  backDiagonal)
}

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)