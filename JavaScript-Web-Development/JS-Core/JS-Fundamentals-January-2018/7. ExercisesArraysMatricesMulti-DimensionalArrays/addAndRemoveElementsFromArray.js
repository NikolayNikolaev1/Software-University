function addAndRemove(input) {
    let counter = 1
    let output = []

    for (let command = 0; command < input.length; command++) {
        if (input[command] === "add") {
            output.push(counter)
        }
        else if (input[command] === "remove") {
            output.pop()
        }

        counter++
    }

    if (output.length === 0) {
        output.push("Empty")
    }

    return output.join('\n')
}

console.log(addAndRemove(["add", "add", "remove", "add", "add"]))