let total = 0;

const sum = function(number1, number2){
    /*a variável total abaixo é diferente da que está acima e possui valor 0, pois está 
    dentro do escopo*/
    let total = number1 + number2;
    return total;
}

let number1 = 22;
let number2 = 52;

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);

