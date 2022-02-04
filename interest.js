var initialBalace = 100000;
var annualRate = 5 / 100;
var time = 3;
let finalAmmount = initialBalace + initialBalace * annualRate * time;
let profit = finalAmmount - initialBalace;
console.log("Final Account is :", finalAmmount);
console.log(`Profit=` + profit);