function print(array) {
    let result = []
    let n = Number(array[array.length - 1])

    for (let i = 0; i < array.length - 1; i=i+n) {
        result.push(array[i])

        if (i + n >= array.length) {
         break
        }
    }

    return result.join('\n')
}

console.log(print(["dsa", "asd", "test", "tset", "2"]))