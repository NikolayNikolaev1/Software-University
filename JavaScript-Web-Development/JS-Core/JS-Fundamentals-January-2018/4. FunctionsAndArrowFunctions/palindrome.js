function isPalindrome(input) {
    let reversed = input.split('')
        .reverse()
        .join("")

    if (reversed === input) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("unitinu"));