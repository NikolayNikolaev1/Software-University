function calculateImperialUnits(number) {
    let foot = number / 12
    let inches = number % 12

    console.log(Math.floor(foot) + "'-" + inches + "\"")
}

calculateImperialUnits(11)