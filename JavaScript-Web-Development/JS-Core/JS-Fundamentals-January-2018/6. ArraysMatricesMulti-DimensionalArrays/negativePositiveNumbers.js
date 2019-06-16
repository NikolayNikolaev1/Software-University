function negativePositiveNumber(arr) {
    let result = []

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    return result.join('' + '\n')
}

console.log(negativePositiveNumber([3, -2, 0, -1]));