function processOddNumbers(arr) {
    console.log(arr
        .filter((el, i) => i % 2 !== 0)
        .map(el => el * 2)
        .reverse())
}

processOddNumbers([3, 0, 10, 4, 7, 3])