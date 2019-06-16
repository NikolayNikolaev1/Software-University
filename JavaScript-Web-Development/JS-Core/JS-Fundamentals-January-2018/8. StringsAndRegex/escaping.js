function escaping(arr) {
    let result = '<ul>\n'

    for (let str of arr) {
        result += '  <li>' + escapeChars(str) + '</li>\n'
    }

    result += '</ul>'

    return result

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'g/, '&#39;')
    }
}

console.log(escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']))