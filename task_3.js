// Написати функцію, яка порахує факторіал натурального числа 
function factorial(number) {
    let result=1;
    for (let i=2; i<=number; i++) {
        result*=i;
    }
    return result;
}

console.log(`Factorial of 5 equals ${factorial(5)}`);