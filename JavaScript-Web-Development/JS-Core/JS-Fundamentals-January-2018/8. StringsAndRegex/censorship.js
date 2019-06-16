function censorship(text, array) {
    for (let str of array) {
        let regex = new RegExp(str, 'g')
        let dashes = '-'.repeat(str.length)
        text = text.replace(regex, dashes)
    }

    return text
}

console.log(censorship('roses are red, violets are blue', [', violets are', 'red']))