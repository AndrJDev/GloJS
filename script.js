"use strict";
// lesson05

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

let service1; 
let service2;

const isThisA_Number = function (enteredNumber) { 
    return (!isNaN(parseFloat(enteredNumber)) && isFinite(enteredNumber));    
}

const asking = function () { 
    title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', 50000);                
    }while (!isThisA_Number(screenPrice));    

    screenPrice = parseFloat(screenPrice);
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let sum = 0;
    let price = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги " + i  + " нужен?", 'Слайдер');
        }else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги " + i  + " нужен?", 'php mail');
        }                
        do {
            price = prompt('Сколько это будет стоить?', 2000);                        
            console.log(price);
        }while (!isThisA_Number(price));                            
                
        sum += parseFloat(price);       
    }    
    return sum;
}

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
    return screenPrice + allServicePrices;
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

asking();

//Cумма всех дополнительных услуг
allServicePrices = getAllServicePrices();
//Сумма стоимости верстки и стоимости дополнительных услуг
fullPrice = getFullPrice();
//Откат посреднику
servicePercentPrice  = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("Сумма дополнительных услуг: " + allServicePrices);

console.log("Cкидка пользователю: " + getRollbackMessage(fullPrice));
console.log(getTitle(title));
console.log("Стоимость за вычетом процента отката посреднику: " + servicePercentPrice);
console.log(screens);
console.log(screens.split(', '));
