let title = 'Название проекта';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1000;
let rollback = 50;
let fullPrice = 50000;
let adaptive = true;

//Вывести в консоль тип данных значений переменных 
//title, fullPrice, adaptive;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

// Вывести в консоль длину строки screens
console.log(screens.length);

// Вывести в консоль 
//“Стоимость верстки экранов (screenPrice) рублей” 
//“Стоимость разработки сайта (fullPrice) рублей”
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");

// Привести строку screens к нижнему регистру 
// разбить строку на массив, вывести массив в консоль
console.log(screens.toLocaleLowerCase().split(", "));

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))
console.log("Процент отката посреднику за работу " + (fullPrice * (rollback / 100)));