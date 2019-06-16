function drawTable(num) {

    html = `<table border="1">\n`;
    html += `<tr><th>x</th>`;

    for (let i = 1; i <= num; i++)
        html += `<th>${i}</th>`;

    html += `</tr>\n`;


    for (let i = 1; i <= num; i++) {
        html += `<tr><th>${i}</th>`;

        for (let j = 1; j <= num; j++) {
            html += `<td>${i * j}</td>`;
        }

        html += `</tr>\n`;
    }


    html +='</table>';
    return html;
}