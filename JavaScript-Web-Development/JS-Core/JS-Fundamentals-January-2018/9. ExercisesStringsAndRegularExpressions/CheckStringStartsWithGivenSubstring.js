function check(string, substring) {
    if (string.substring(0, substring.length) === substring) {
        return "true"
    } else {
        return "false"
    }
}

console.log(check("How have you been?", "how"))