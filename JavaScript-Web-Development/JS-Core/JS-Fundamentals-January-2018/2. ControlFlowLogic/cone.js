function calculateConeVolumeAndSurfaceArea(radius, height) {
    let l = Math.sqrt(radius * radius + height * height)
    let volume = Math.PI * radius * radius * (height / 3)
    let surfaceArea = (Math.PI * radius * radius) + (Math.PI * radius * l)

    console.log("volume = " + volume)
    console.log("area = " + surfaceArea)
}

calculateConeVolumeAndSurfaceArea(3, 5)