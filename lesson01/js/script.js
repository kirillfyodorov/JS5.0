'use strict'

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
 budget: money,
 timeData: time,
 expenses: {},
 optionalExpenses: {},
 income: [],
 savings: false
}

// for (let i = 0; i < 2; i++) {
//  appData.expenses[i] = prompt("Введите обязательную статью расходов в этом месяце", "") + '" : "' + prompt("Во сколько обойдется?", "");
// }

for (let i = 0; i < 2; i++) {
 appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] = prompt("Во сколько обойдется?", "");
}

alert(appData.budget / 30);

console.log(appData);