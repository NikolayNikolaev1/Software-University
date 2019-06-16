function expressionSplit(input) {
    let regex = /[.,;() \t\n]+/

    input.split(regex).forEach(a => console.log(a))
}

expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')