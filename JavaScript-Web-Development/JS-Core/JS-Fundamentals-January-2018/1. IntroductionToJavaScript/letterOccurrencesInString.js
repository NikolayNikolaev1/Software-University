function letterOccurrencesInString(input, letter) {
    let counter = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] == letter) {
            counter++
        }
    }

    console.log(counter)
}

letterOccurrencesInString("hello", "l")