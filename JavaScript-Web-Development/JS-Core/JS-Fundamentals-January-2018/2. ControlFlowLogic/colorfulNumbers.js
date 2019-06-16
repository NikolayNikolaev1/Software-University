function colorfulNumbers(number) {
    let result = '<ul>\n'

    for (let i = 1; i <= number; i++) {
        let color = ""

        if (i % 2 === 0) {
            color = "blue"
        }
        else if (i % 2 !== 0) {
            color = "green"
        }
        result += `<li><span style='color:${color}'>${i}</span>></li>>\n`
    }

    result += "</ul>"

    return result
}

console.log(colorfulNumbers(10))