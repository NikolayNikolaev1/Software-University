function countOccurrences(string, text) {
    let counter = 0

    while (true) {
        let startIdenx = text.indexOf(string)

        if (startIdenx < 0) {
            break
        }

        counter++
        text = text.substr(startIdenx + 1)
    }

    return counter
}

console.log(countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'))