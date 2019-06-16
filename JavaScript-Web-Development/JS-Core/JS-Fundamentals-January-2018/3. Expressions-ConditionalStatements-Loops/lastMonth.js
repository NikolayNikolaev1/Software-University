function calculateLastMonth([day, month, year]) {
    let date = new Date(year, month - 1, 1)
    let oneDay = 24 * 60 * 60 * 1000
    let lastDay = new Date(date.getTime() - oneDay)

    return lastDay.getDate()
}

console.log(calculateLastMonth([13, 12, 2004]))