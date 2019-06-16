function extractText(text) {
    let result = []

    while (true) {
        let start = text.indexOf('(')
        if (start < 0)
            break
        let end = text.indexOf(')')
        result.push(text.substring(start + 1, end))
        text = text.substring(end + 1)
    }

    return result.join(", ")
}

console.log(extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'))