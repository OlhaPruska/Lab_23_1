// Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій. 
function createArray (originalString, separator) {
    let resultArray=originalString.split(separator);
    console.log(`Original string : ${originalString}`);
    console.log(`Created array consists ${resultArray.length} words`);
    console.log(resultArray.join('/'));

}

createArray("Reading practice to help you understand simple texts", ' ');