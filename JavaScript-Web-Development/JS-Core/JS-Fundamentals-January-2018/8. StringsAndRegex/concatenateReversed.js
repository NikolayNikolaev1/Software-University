function concatenateReversed(input) {
    console.log(input
        .join('')
        .split('')
        .reverse()
        .join(''))
}

concatenateReversed(['I', 'am', 'student'])