"use strict";

let title = 'Название проекта';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1000;
let rollback = 10;
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

// lesson03

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?');
screenPrice = +prompt('Сколько будет стоить данная работа?');
adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

//Итоговая стоимость работы
fullPrice = screenPrice + servicePrice1 + servicePrice2;

//Откат посреднику
let rollbackPercent = fullPrice * (rollback / 100);

let servicePercentPrice  = Math.ceil(fullPrice - rollbackPercent);
console.log("Итого за работу: " + servicePercentPrice);

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
}else if ((fullPrice >= 15000) && (fullPrice < 30000)) {
    console.log("Даем скидку в 5%");
}else if ((fullPrice < 15000) && (fullPrice >= 0)) {
    console.log("Скидка не предусмотрена");
}else if (fullPrice < 0) {
    console.log("Что то пошло не так")
}
