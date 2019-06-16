function calculateNumberOfBoxesNeeded(numberOfBottles, capacityOfBox) {
    let numberOfBoxes = Math.ceil(numberOfBottles / capacityOfBox)

    return numberOfBoxes
}

console.log(calculateNumberOfBoxesNeeded(5, 10))