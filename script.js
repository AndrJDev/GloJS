"use strict";
// lesson06
// Загадывание случайного числа от 1 до 100

let requiredNumber = 30;

const isThisA_Number = function (num) { 		
    return (!isNaN(parseFloat(num)) && isFinite(num));    
}

const asking = function (message) {     
    
    let num = prompt(message);

    if (typeof num === 'string') {				
		num = parseFloat(num);
		if (isNaN(num)) {
            asking("Введите число!" );
		}else {
            if (num > requiredNumber) {        
                asking("Загаданное число меньше. Попробуйте еще");
            }
            if (num < requiredNumber) {                
                asking("Загаданное число меньше. Попробуйте еще");
            }  
            if (num === requiredNumber) {   
                //Конец игры             
                alert("Поздравляю, Вы угадали!!!");
            }  
        }            		
	}else {
		if (!isThisA_Number(num)) {
            //Отмена
            alert("Игра Окончена!" );			
		}		
	}
    
}

asking('Угадай число от 1 до 100');
