function solve(array) {
    let result = []
    let biggestNum = array[0]

    for (let num of array) {

        if (num >= biggestNum) {
            biggestNum = num
            result.push(num)
        }
    }

    return result.join('\n')
}

console.log(solve([1,
3,
8,
4,
10,
12,
3,
2,
24]
))