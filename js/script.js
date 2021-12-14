"use strict";
// lesson12

let title = document.getElementsByTagName('h1')[0];
let buttonPlus = document.querySelector('.screen-btn');
let otherItemsPercent = document.querySelectorAll('.other-items.percent');
let otherItemsNumber = document.querySelectorAll('.other-items.number');

let inputRange = document.querySelector('.rollback input[type="range"]');
let inputRangeValue = document.querySelector('.rollback .range-value');

let handlerBtns = document.getElementsByClassName('handler_btn');
let startBtn = handlerBtns[0];
let resetBtn = handlerBtns[1];

let total = document.getElementsByClassName('total-input')[0];
let totalCount = document.getElementsByClassName('total-input')[1]; //Количество экранов
let totalCountOther = document.getElementsByClassName('total-input')[2]; //Стоимость доп услуг
let fullTotalCount = document.getElementsByClassName('total-input')[3]; //Полная стоимость
let totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    screenCount: 0,
    adaptive: true,
    rollback: 10, //процент отката
    rollbackCount: 0, //величина отката
    servicePricesPercent: 0, //доп услуги
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
    },
    start: function () {


        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();

        console.log(appData);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        console.dir(screens);

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const inputText = screen.querySelector('input[type=text]');

            console.log("inputText");
            console.log(inputText);
            console.log(typeof +inputText.value);
            console.log(inputText.value);

            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                screenCount: +inputText.value,
            });
        });
        console.log(appData.screens);
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
                console.log(appData.servicesPercent[label.textContent]);
            }
        });
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
                console.log(appData.servicesPercent[label.textContent]);
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
            appData.screenCount += +screen.screenCount;
        }
        //Расчет суммы доп. услуг
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice *
                (appData.servicesPercent[key] / 100);
        }
        //Полная стоимость
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
        // console.log(appData.servicePricesPercent);
        appData.rollbackCount = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    },
    // Подсчет итоговой стоимость минус сумма отката
    getServicePercentPrices: function (price, rollback) {
        let rollbackPercent = price * (rollback / 100);
        return Math.ceil(price - rollbackPercent);
    },
    // Сообщение о скидке
    // getRollbackMessage: function (price) {
    //     if (price >= 30000) {
    //         return "Даем скидку в 10%";
    //     } else if ((price >= 15000) && (price < 30000)) {
    //         return "Даем скидку в 5%";
    //     } else if ((price < 15000) && (price >= 0)) {
    //         return "Скидка не предусмотрена";
    //     } else if (price < 0) {
    //         return "Что то пошло не так";
    //     }
    // },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCount.value = appData.screenCount;
        totalCountRollback.value = appData.rollbackCount;
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
};

appData.init();
