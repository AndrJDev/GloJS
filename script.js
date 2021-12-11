"use strict";
// lesson10
// Работа с DOM

// Восстановить порядок книг.
const books = document.querySelectorAll('.books');
const booksElements = document.querySelectorAll('.book');
// console.log(books);

let book2 = booksElements[0];
let book1 = booksElements[1];
let book6 = booksElements[2];
let book4 =  booksElements[3];
let book3 =  booksElements[4];
let book5 =  booksElements[5];

books[0].append(book1); 
books[0].append(book2); 
books[0].append(book3); 
books[0].append(book4); 
books[0].append(book5); 
books[0].append(book6); 

// Заменить картинку заднего фона на другую из папки image
let bodyNode = document.getElementsByTagName('body')[0];
function changeBgImg(){
    bodyNode.style.backgroundImage = "url('/image/you-dont-know-js.jpg')";
}
changeBgImg();

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
// console.dir(book3);
// console.dir(book3.innerHTML);

let html = book3.innerHTML;
html = html.replace("Пропопипы", "Прототипы");
book3.innerHTML = html;

// Удалить рекламу со страницы
let reclam = document.querySelectorAll('.adv');
reclam[0].style.display = 'none';

// Восстановить порядок глав во второй и пятой книге 
//(внимательно инспектируйте индексы элементов, поможет dev tools)

// book2
let book2_ul = book2.children[1];

let book2_li_01 = book2.children[1].children[0];
let book2_li_02 = book2.children[1].children[1];
let book2_li_pC = book2.children[1].children[2];
let book2_li_1= book2.children[1].children[3];
let book2_li_4 = book2.children[1].children[4];
let book2_li_5 = book2.children[1].children[5];
let book2_li_2 = book2.children[1].children[6];
let book2_li_pA = book2.children[1].children[7];
let book2_li_3 = book2.children[1].children[8];
let book2_li_pB = book2.children[1].children[9];
let book2_li_pD = book2.children[1].children[10];

book2_ul.append(book2_li_01); 
book2_ul.append(book2_li_02);
book2_ul.append(book2_li_1); 
book2_ul.append(book2_li_2); 
book2_ul.append(book2_li_3); 
book2_ul.append(book2_li_4); 
book2_ul.append(book2_li_5); 
book2_ul.append(book2_li_pA); 
book2_ul.append(book2_li_pB);
book2_ul.append(book2_li_pC); 
book2_ul.append(book2_li_pD);

// book5
let book5_ul = book5.children[1];

let book5_li_01 = book5_ul.children[0];
let book5_li_02 = book5_ul.children[1];
let book5_li_4 = book5_ul.children[2];
let book5_li_2= book5_ul.children[3];
let book5_li_3 = book5_ul.children[4];
let book5_li_pA = book5_ul.children[5];
let book5_li_5 = book5_ul.children[6];
let book5_li_6 = book5_ul.children[7];
let book5_li_pB = book5_ul.children[8];
let book5_li_1 = book5_ul.children[9];
let book5_li_pC = book5_ul.children[10];

book5_ul.append(book5_li_01); 
book5_ul.append(book5_li_02); 

book5_ul.append(book5_li_1); 
book5_ul.append(book5_li_2); 
book5_ul.append(book5_li_3); 
book5_ul.append(book5_li_4); 
book5_ul.append(book5_li_5); 
book5_ul.append(book5_li_6); 

book5_ul.append(book5_li_pA); 
book5_ul.append(book5_li_pB); 
book5_ul.append(book5_li_pC); 

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

// скопировать гл 7 изменить ее название и встаить после нее 
let book6_ul = book6.children[1];
let book6_li_7 = book6_ul.children[8];
let book6_li_8 = book6_li_7.cloneNode(true);

let htmlText = book6_li_8.innerHTML;
htmlText = htmlText.replace("Глава 7: Метапрограммирование", "Глава 8: За пределами ES6");
book6_li_8.innerHTML = htmlText;

book6_li_7.after(book6_li_8);
