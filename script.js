"use strict";
// lesson03

let rollback = 10;
let fullPrice;

let title = prompt('Как называется ваш проект?', 'Калькулятор');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 50000);
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Слайдер');
let servicePrice1 = +prompt('Сколько это будет стоить?', 2000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'php mail');
let servicePrice2 = +prompt('Сколько это будет стоить?', 3000);

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
