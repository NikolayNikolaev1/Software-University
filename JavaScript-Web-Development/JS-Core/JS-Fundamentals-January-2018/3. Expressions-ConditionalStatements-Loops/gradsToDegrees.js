function gradToDegrees(grad) {
    grad = grad % 400
    let degree = grad * 0.9
    let degreeOutput = degree < 0 ? 360 + degree : degree

    return degreeOutput
}

let output = gradToDegrees(['850'])
console.log(output)