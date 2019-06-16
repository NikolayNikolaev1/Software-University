function calculateQuadraticEquation(a, b, c) {
    let d = b ** 2 - (4 * a * c)
    let bNeg = 0

    if (b < 0) {
        bNeg = Math.abs(b)
    }
    else {
        bNeg = -Math.abs(b)
    }

    if (d < 0) {
        console.log("No")
    }
    else if (d === 0) {
        console.log(bNeg / (2 * a))
    }
    else if (d > 0) {
        let x1 = (bNeg + Math.sqrt(d)) / (2 * a)
        let x2 = (bNeg - Math.sqrt(d)) / (2 * a)

        console.log(Math.min(x1, x2))
        console.log(Math.max(x1, x2))
    }
}

calculateQuadraticEquation(6, 11, -35)