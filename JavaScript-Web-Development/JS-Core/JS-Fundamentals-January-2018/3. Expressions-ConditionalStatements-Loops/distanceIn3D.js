function calculateDistanceBetweenTwoPoints([x1, y1, z1, x2, y2, z2]) {
    let firstPoint = {x:x1, y:y1, z:z1}
    let secondPoint = {x:x2, y:y2, z:z2}

    let distanceX = Math.pow(firstPoint.x - secondPoint.x, 2)
    let distanceY = Math.pow(firstPoint.y - secondPoint.y, 2)
    let distanceZ = Math.pow(firstPoint.z - secondPoint.z, 2)

    console.log(Math.sqrt(distanceX + distanceY + distanceZ))
}

calculateDistanceBetweenTwoPoints([3.5, 0, 1, 0, 2, -1])