function sort(array) {
    return array
        .sort((a, b) => a.length-b.length)
        .sort((a,b) => a-b)
        .join('\n')
}

console.log(sort(["test",
        "Deny",
        "omen",
        "Default"]))

