"use strict";
// lesson04

let title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 50000);
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Слайдер');
let servicePrice1 = +prompt('Сколько это будет стоить?', 2000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'php mail');
let servicePrice2 = +prompt('Сколько это будет стоить?', 3000);

let rollback = 10;
let fullPrice;

let allServicePrices;
let servicePercentPrice;

//Подсчет итоговой стоимость минус сумма отката
const getServicePercentPrices = function (price, rollback) {    
    let rollbackPercent = price * (rollback / 100);        
    return Math.ceil(price - rollbackPercent);
}

const getTitle = function (str) {
    str = str.trim().toLowerCase();
    return str[0].toUpperCase() + str.slice(1);
}

function getFullPrice() {
    return screenPrice + servicePrice1 + servicePrice2;
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    }else if ((price >= 15000) && (price < 30000)) {
        return "Даем скидку в 5%";
    }else if ((price < 15000) && (price >= 0)) {
        return "Скидка не предусмотрена";
    }else if (price < 0) {
        return "Что то пошло не так";
    }
}

//Сумма стоимости верстки и стоимости дополнительных услуг
fullPrice = getFullPrice();

//Откат посреднику
servicePercentPrice  = getServicePercentPrices(fullPrice, rollback);

//Cумма всех дополнительных услуг
allServicePrices = getAllServicePrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("Cкидка пользователю: " + getRollbackMessage(fullPrice));

console.log(getTitle(title));
console.log("Стоимость за вычетом процента отката посреднику: " + servicePercentPrice);
console.log(screens);
console.log(screens.split(', '));
