// Написати функцію, яка поверне кількість днів для заданого місяця та року. 
function amountOfDays(year, month) {
    // let currentDate=new Date();
    let inputDate = new Date(year, month, 1); 
    let amountOfSeconds = (inputDate.getTime())/1000;
    let amountOfDays=amountOfSeconds/60/60/24;
    return Math.floor(amountOfDays);
}

console.log(amountOfDays(2023, 2))
//від 1 січня 1970 до 1 березня 2023