"use strict";
// lesson12

let title = document.getElementsByTagName('h1')[0];
let buttonPlus = document.querySelector('.screen-btn');
let otherItemsPercent = document.querySelectorAll('.other-items.percent');
let otherItemsNumber = document.querySelectorAll('.other-items.number');

let inputRange = document.querySelector('.rollback input[type="range"]');
let inputRangeValue = document.querySelector('.rollback .range-value');

let handler_btns = document.getElementsByClassName('handler_btn');
let startBtn = handler_btns[0];
let resetBtn = handler_btns[1];

let total = document.getElementsByClassName('total-input')[0];
let totalCount = document.getElementsByClassName('total-input')[1];
let totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
let totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},
    //Проверка - это число
    isThisA_Number: function (enteredNumber) {
        return (!isNaN(parseFloat(enteredNumber)) && isFinite(enteredNumber));
    },
    //Проверка - это строка
    isThisA_String: function (enteredString) {
        if (isNaN(Number(enteredString))) {
            return true;
        } else {
            return false;
        }
    },
    //Обработка заголовка
    processingTitle: function (str) {
        str = str.trim().toLowerCase();
        appData.title = str[0].toUpperCase() + str.slice(1);
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
        } while (!appData.isThisA_String(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?', 'Простые');
            } while (!appData.isThisA_String(name));

            let price = 0;
            do {
                price = prompt('Сколько будет стоить данная работа?', 25000);
            } while (!appData.isThisA_Number(price));

            appData.screens.push({ id: i, name: name, price: price });
        }

        // Доп. услуги
        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какой дополнительный тип услуги нужен?", 'Слайдер');
            } while (!appData.isThisA_String(name));

            let price = 0;

            do {
                price = prompt('Сколько это будет стоить?', 2000);
            } while (!appData.isThisA_Number(price));

            appData.services[name] = parseFloat(price);
        }

        appData.screenPrice = parseFloat(appData.screenPrice);
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        // Сумма доп. услуг
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    // Переопределение свойств
    propertyOverrides: function () {
        appData.processingTitle(appData.title);
        //Сумма стоимости верстки и стоимости дополнительных услуг
        appData.getFullPrice();
        //Откат посреднику
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    },
    //Подсчет итоговой стоимость минус сумма отката
    getServicePercentPrices: function (price, rollback) {
        let rollbackPercent = price * (rollback / 100);
        return Math.ceil(price - rollbackPercent);
    },
    //Подсчет итоговой стоимость минус сумма отката
    getServicePercentPrices: function (price, rollback) {
        let rollbackPercent = price * (rollback / 100);
        appData.servicePercentPrice = Math.ceil(price - rollbackPercent);
    },
    // Сообщение о скидке
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if ((price >= 15000) && (price < 30000)) {
            return "Даем скидку в 5%";
        } else if ((price < 15000) && (price >= 0)) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        }
    },
    getFullPrice() {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    //Вывод в консоль
    logger: function () {
        console.log("Заголовок: " + appData.title);
        console.log("Полная стоимость: " + appData.fullPrice);
        console.log("Сумма дополнительных услуг: " + appData.allServicePrices);
        console.log("Cкидка пользователю: " + appData.getRollbackMessage(appData.fullPrice));
        console.log("Стоимость за вычетом процента отката посреднику: " + appData.servicePercentPrice);

        console.log(appData.services);
        console.log(appData.screens);
    },
    start: function () {
        // appData.asking();         
        appData.addPrices();
        appData.propertyOverrides();
        appData.logger();
    },
}

// appData.start();
