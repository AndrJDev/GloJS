"use strict";
// lesson07
// Работа с объектами

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback : 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: '',
    service2: '',
    isThisA_Number : function (enteredNumber) { 
        return (!isNaN(parseFloat(enteredNumber)) && isFinite(enteredNumber));    
    },    
    //Обработка заголовка
    getTitle : function (str) {
        str = str.trim().toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
    },
    // Вопросы пользователю
    asking : function () { 
        appData.title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
        console.log('Привет аскинг');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', 50000);                
        }while (!appData.isThisA_Number(appData.screenPrice));    
    
        appData.screenPrice = parseFloat(appData.screenPrice);
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    // Переопределение свойств
    propertyOverrides : function () {         
        appData.title = appData.getTitle(appData.title);
        //Cумма всех дополнительных услуг
        appData.allServicePrices = appData.getAllServicePrices();
        //Сумма стоимости верстки и стоимости дополнительных услуг
        appData.fullPrice = appData.getFullPrice();
        //Откат посреднику
        appData.servicePercentPrice  = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);       
    },
    // Доп. услуги
    getAllServicePrices : function () {
        let sum = 0;
        let price = 0;
    
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги " + i  + " нужен?", 'Слайдер');
            }else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги " + i  + " нужен?", 'php mail');
            }                
            do {
                price = prompt('Сколько это будет стоить?', 2000);                        
                console.log(price);
            }while (!appData.isThisA_Number(price));                            
                    
            sum += parseFloat(price);       
        }    
        return sum;
    },
    //Подсчет итоговой стоимость минус сумма отката
    getServicePercentPrices : function (price, rollback) {    
        let rollbackPercent = price * (rollback / 100);        
        return Math.ceil(price - rollbackPercent);
    },
    //Подсчет итоговой стоимость минус сумма отката
    getServicePercentPrices : function (price, rollback) {    
        let rollbackPercent = price * (rollback / 100);        
        return Math.ceil(price - rollbackPercent);
    },
    // Сообщение о скидке
    getRollbackMessage : function(price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        }else if ((price >= 15000) && (price < 30000)) {
            return "Даем скидку в 5%";
        }else if ((price < 15000) && (price >= 0)) {
            return "Скидка не предусмотрена";
        }else if (price < 0) {
            return "Что то пошло не так";
        }
    },
    getFullPrice() {
        return appData.screenPrice + appData.allServicePrices;
    },
    //Вывод в консоль
    logger : function () { 
        console.log("Сумма дополнительных услуг: " + appData.allServicePrices);

        console.log("Cкидка пользователю: " + appData.getRollbackMessage(appData.fullPrice));
        console.log(appData.getTitle(appData.title));
        console.log("Стоимость за вычетом процента отката посреднику: " + appData.servicePercentPrice);
        
        console.log(appData.screens);
        console.log(appData.screens.split(', '));      

        // Вывести в консоль из метода logger все свойства и методы объекта appData с помощью цикла for in  
        for (let key in appData) {
            console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
        }            
    },    
    start : function () { 
        console.log("start сработал");
        appData.asking();                
        appData.propertyOverrides();
        appData.logger(); 
    },
} 

appData.start();
