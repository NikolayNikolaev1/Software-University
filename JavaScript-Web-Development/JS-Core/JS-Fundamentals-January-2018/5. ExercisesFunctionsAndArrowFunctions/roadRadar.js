function radar(input) {
    let speed = input[0]
    let zone = input[1]
    let limit = getLimit(zone)
    let infraction = getInfraction(speed, limit)

    if (infraction) {
        console.log(infraction)
    }

    function getLimit(zone) {
        switch (zone) {
            case "residential" :
                return 20
            case "city" :
                return 50
            case "interstate" :
                return 90
            case "motorway" :
                return 130
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit
        if (overSpeed <= 0) {
            return false
        } else {
            if (overSpeed <= 20) {
                return "speeding"
            } else if (overSpeed <= 40) {
                return "excessive speeding"
            } else {
                return "reckless driving"
            }
        }
    }
}

radar([21, "residential"])