function calculateDistance([firstSpeed, secondSpeed, time]) {
    let timeInHours = time / 60 / 60 * 1000
    let firstDistance = firstSpeed * timeInHours
    let secondDistance = secondSpeed * timeInHours
    let finalDistance = Math.abs(firstDistance - secondDistance)

    console.log(finalDistance)
}

calculateDistance([11, 10, 120])