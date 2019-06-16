function split(string, delimiter) {
    string
        .split(delimiter)
        .forEach(s => console.log(s))
}

split("One-Two-Three-Four-Five", "-")