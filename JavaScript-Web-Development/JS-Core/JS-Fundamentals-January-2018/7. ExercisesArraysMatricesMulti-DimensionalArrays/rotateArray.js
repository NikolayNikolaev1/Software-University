function rotate(arr) {
    let rotation = arr.pop()

    for (let i = 0; i < rotation; i++) {
        let num = arr.pop()
        arr.unshift(num)
    }

    return arr.join(" ")
}

console.log(rotate(["1", "2", "3", "4", "2"]))