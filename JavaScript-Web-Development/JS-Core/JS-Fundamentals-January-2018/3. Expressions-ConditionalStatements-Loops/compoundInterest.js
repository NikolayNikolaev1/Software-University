function calculateCompoundInterest([principalSum, interestRatePercent, compoundingPeriodMonths, totalTimespanYears]) {
    let compoundingInterest = principalSum *
        Math.pow(1 + interestRatePercent /(100 * (12 / compoundingPeriodMonths)), 12 / compoundingPeriodMonths * totalTimespanYears)

    console.log(compoundingInterest.toFixed(2))
}

calculateCompoundInterest([100000, 5, 12, 25])