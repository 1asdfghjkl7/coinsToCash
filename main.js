const piggyBank = { pennies: 342, nickels: 345, dimes: 234, quarters: 421 }
const pValue = 0.01 * piggyBank.pennies
const nValue = 0.05 * piggyBank.nickels
const dValue = 0.10 * piggyBank.dimes
const qValue = 0.25 * piggyBank.quarters

let dollarAmount = pValue + nValue + dValue + qValue
console.log(dollarAmount);



