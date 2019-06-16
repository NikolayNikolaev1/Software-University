function capitalize(input) {
    let arr = input.split(" ")

    for (let word of arr) {
        for (let i = 0; i < word.length; i++) {
            if (i === 0) {
                word[i].replace(word[i], word[i].toUpperCase())
            } else {
                word[i].replace(word[i].toLowerCase(), word[i])
            }
        }
    }
 //TODO
    return arr.join(' ')
}

console.log(capitalize("Was that Easy? tRY thIs onE for SiZe!"))