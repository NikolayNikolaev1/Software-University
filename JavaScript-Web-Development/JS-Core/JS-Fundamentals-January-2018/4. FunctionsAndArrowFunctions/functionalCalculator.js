function calc(a, b, op) {
    let add = function (a, b) {
        return a + b
    }

    let substract = function (a, b) {
        return a - b
    }

    let multyply = function (a, b) {
        return a * b
    }

    let divide = function (a, b) {
        return a / b
    }

    switch (op) {
        case "+" :
            console.log(add(a, b))
            break
        case "-" :
            console.log(substract(a, b))
            break
        case "*" :
            console.log(multyply(a, b))
            break
        case "/" :
            console.log(divide(a, b))
            break
    }
}

calc(18, -1, '*')