function evenPositionElement(arr) {
    console.log(arr.filter((element, i) => {
        return i % 2 === 0
    }).join(' '))
}

(evenPositionElement(['20', '30', '40']))