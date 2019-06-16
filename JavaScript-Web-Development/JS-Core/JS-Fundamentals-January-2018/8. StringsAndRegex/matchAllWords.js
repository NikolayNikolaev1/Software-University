function matchAllWords(input) {
    let regex = /\w+/g

    console.log(input.match(regex).join('|'))
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text')