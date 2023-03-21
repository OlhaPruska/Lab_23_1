// Реалізувати з допомогою прототипів або класів такі інформаційні об’єкти: 
// a. Пасажир 
// b. Квиток 
// c. Потяг 
// d. Продані квитки 
// Реалізувати такі можливості системи:


// a. Додавання нового пасажира в колекцію 
// b. Редагування пасажира в колекції 
// c. Видалення пасажира з колекції 
// d. Пошук одного пасажира в колекції 


// e. Додавання потяга в колекцію 
// f. Редагування потяга в колекції 
// !!!!!g. Видалення пасажира(потяга????) з колекції 
// h. Пошук одного потяга в колекції


// i. Покупка пасажиром квитка на потяг 
// j. Зміна квитка із одного потяга на інший 
// k. Скасування покупки квитка 
// l. Пошук потяга на який продали найбільше/найменше квитків 

// Усі колекції реалізувати у вигляді масивів Array

const mod = require('./custom_module');
const { addTrain } = require('./custom_module/train');

//            TRAINS
let tr_1 = mod.addTrain("Kyiv-Poltava", "E086");
let tr_2=mod.addTrain("Lviv-Kharkiv", "B098");
let  tr_3 = mod.addTrain("Kovel-Simpheropol", "A456");

mod.editTrain("Kyiv-Poltava", "E086", "Kyiv-Lviv", "E099");

let find_2=mod.findTrain("Lviv-Kharkiv", "B098");
console.log(`Прошук потяга ${tr_2.direction}, ${tr_2.code} - ${find_2!==-1? "знайдено" : "не знайдено"}`);

mod.getTrains();
mod.deleteTrain("Kyiv-Lviv",  "E099");
mod.getTrains();

//                  PASSENGERS
let pas_1=mod.addPassenger("Anastasia", "Putko", tr_1);
let pas_2=mod.addPassenger("Petro" ,"Schur", tr_3);
let pas_3=mod.addPassenger("Dmytro", "Petrenko", tr_1);
let pas_4=mod.addPassenger("Petro", "Chornyi", tr_2);
let pas_5=mod.addPassenger("Uliana", "Bayrak", tr_1);
mod.getPassengersFromTrain(tr_1);
mod.deletePasenger("Anastasia", "Putko", tr_1);
mod.getPassengersFromTrain(tr_1);
mod.editPassenger("Petro" ,"Schur","Mykola","Veresen", tr_3);
let find_pas=mod.findPassenger("Dmytro", "Petrenko", tr_1);
console.log(`Пошук пасажира ${pas_5.name} ${pas_5.surname} - ${find_pas!==-1? "found":"not found"}`);


//                  TICKETS
let t_1=mod.buyTicket(45, 3,pas_1, tr_1);
let t_2=mod.buyTicket(11,12,pas_2,tr_1);
let t_3=mod.buyTicket(52,10,pas_4,tr_1);
let t_4=mod.buyTicket(34,2,pas_5,tr_2);
let t_5=mod.buyTicket(44,9,pas_3,tr_3);

mod.getTicket(tr_1);
mod.deleteTicket(11,12,pas_2,tr_1);
mod.getTicket(tr_1);
mod.changeTicket(34,2,pas_5,tr_2,tr_1);
mod.getTicket(tr_1);

