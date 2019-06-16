function calculatePointInRectangle([x, y, xMin, xMax, yMin, yMax]) {
    return x >= xMin && x <= xMax && y >= yMin && y <= yMax ? "inside" : "outside"
}

console.log(calculatePointInRectangle([8, -1, 2, 12, -3, 3]))