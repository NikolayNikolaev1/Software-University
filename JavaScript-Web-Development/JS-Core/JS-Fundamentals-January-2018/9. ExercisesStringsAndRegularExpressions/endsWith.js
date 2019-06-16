function check(string, substring) {
    return string.substr(string.length - substring.length, string.length) === substring ? "true" : "false"
}

console.log(check("This sentence ends with fun?", "fun?"))