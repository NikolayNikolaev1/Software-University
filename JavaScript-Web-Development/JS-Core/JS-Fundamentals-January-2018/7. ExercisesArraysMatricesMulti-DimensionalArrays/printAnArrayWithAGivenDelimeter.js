function print(array) {
    let result = []
    let delimiter = array[array.length - 1]

    for (let i = 0; i < array.length - 1; i++) {
        result.push(array[i])
    }

    return result.join(delimiter)
}

console.log(print(["hello", "there", "-"]))