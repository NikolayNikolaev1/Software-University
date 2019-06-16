function calculateMoviePrices(input) {
    let price = ""
    movieTitle = input[0].toLowerCase()
    weekday = input[1].toLowerCase()

    if (movieTitle === "the godfather") {
        switch (weekday) {
            case "monday" :
                price = 12
                break
            case "tuesday" :
                price = 10
                break
            case "wednesday" :
                price = 15
                break
            case "thursday" :
                price = 12.50
                break
            case "friday" :
                price = 15
                break
            case "saturday" :
                price = 25
                break
            case "sunday" :
                price = 30
                break
            default :
                price = "error"
                break
        }
    }
    else if (movieTitle === "schindler's list") {
        switch (weekday) {
            case "monday" :
                price = 8.50
                break
            case "tuesday" :
                price = 8.50
                break
            case "wednesday" :
                price = 8.50
                break
            case "thursday" :
                price = 8.50
                break
            case "friday" :
                price = 8.50
                break
            case "saturday" :
                price = 15
                break
            case "sunday" :
                price = 15
                break
            default :
                price = "error"
                break
        }
    }
    else if (movieTitle === "casablanca"){
        switch (weekday) {
            case "monday" :
                price = 8
                break
            case "tuesday" :
                price = 8
                break
            case "wednesday" :
                price = 8
                break
            case "thursday" :
                price = 8
                break
            case "friday" :
                price = 8
                break
            case "saturday" :
                price = 10
                break
            case "sunday" :
                price = 10
                break
            default :
                price = "error"
                break
        }
    }
    else if (movieTitle === "the wizard of oz") {
        switch (weekday) {
            case "monday" :
                price = 10
                break
            case "tuesday" :
                price = 10
                break
            case "wednesday" :
                price = 10
                break
            case "thursday" :
                price = 10
                break
            case "friday" :
                price = 10
                break
            case "saturday" :
                price = 15
                break
            case "sunday" :
                price = 15
                break
            default :
                price = "error"
                break
        }
    }
    else {
        price = "error"
    }

    return price
}

console.log(calculateMoviePrices("The Godfather", "Friday"))