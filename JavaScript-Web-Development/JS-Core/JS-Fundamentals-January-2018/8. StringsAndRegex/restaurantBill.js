function restaurantBill(array) {
    let products = []
    let price = 0

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            products.push(array[i])
        }
        else if (i % 2 !== 0) {
            price += Number(array[i])
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${price}`)
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])