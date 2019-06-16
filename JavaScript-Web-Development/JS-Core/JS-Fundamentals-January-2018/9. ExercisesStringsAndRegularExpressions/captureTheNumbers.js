function captureTheNumbers(input) {
    let regex = /[0-9]+/g
    let arr = input.join()
    let result = arr.match(regex)

    return result.join(' ')
}

console.log(captureTheNumbers(["The300",
    "What is that?",
    "I think it’s the 3rd movie.",
    "Lets watch it at 22:45"]))