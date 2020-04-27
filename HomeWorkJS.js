'use strict';
// //TODO: HomeWork #1

// let money = prompt('Ваш бюджет на месяц?'),
//     time =  prompt('Введите дату в формате YYYY-MM-DD');

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
// };

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses[a1] = a2;
// appData.expenses[a3] = a4;
// alert((appData.budget-a2)/30);


//TODO: HomeWork #2

let money = +prompt('Ваш бюджет на месяц?'),
    time =  prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 1; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
            
    if((typeof(a)) === "string" && (typeof(a) != null) && (typeof(b) != null)
    && a != "" && b != "" && a.length <50) {
        console.log('OK');
        appData.expenses[a] = b;
    }  else {
        console.log("Введите еще раз");
        i--;
    }
};
appData.moneyForDay = appData.budget/30;
alert ("Бюджет на день составляет:"+ appData.moneyForDay +"$" );
if (appData.moneyForDay <= 300) {
    console.log("Низкий уровень достатка");
}else if (appData.moneyForDay > 300 && appData.moneyForDay <= 2000 ){
    console.log("Средний уровень достатка");
}else if (appData.moneyForDay > 2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("error 404");
}