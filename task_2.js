// Написати функцію, яка поверне усі перестановки слова


function permutations(str, now='', arr=[]) {
    if(str) {
        for(let i=0; i<str.length; i++){
            permutations(str.slice(0, i) + str.slice(i+1), now + str[i], arr);
        } 
    } else {
        if(!arr.includes(now)) {
            arr.push(now);
        }
            
    }
    return arr;
}
console.log(permutations('low'))