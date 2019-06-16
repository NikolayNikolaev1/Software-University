function draw4Squares(size) {
    if (size % 2 !== 0) {
        for (let row = 1; row <= size; row++) {
            for (let col = 1; col <= size * 2 - 1; col++) {
                if (row === 1 || row === size || row === Math.ceil(size / 2)) {
                    console.log(("+" + "-".repeat(size - 2)).repeat(2) + "+")
                    break
                } else {
                    console.log(("|" + " ".repeat(size - 2)).repeat(2) + "|")
                    break
                }
            }
        }
    } else {
        for (let row = 1; row <= size - 1; row++) {
            for (let col = 1; col <= size * 2 -1; col++) {
                if (row === 1 || row === size - 1 || row === Math.ceil(size / 2)) {
                    console.log(("+" + "-".repeat(size - 2)).repeat(2) + "+")
                    break
                } else {
                    console.log(("|" + " ".repeat(size - 2)).repeat(2) + "|")
                    break
                }
            }
        }
    }
}

draw4Squares(7)