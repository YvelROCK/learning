//switch

/*
    let expression = 'a';

    switch (expression) {
        case 'a':
            // código
            console.log('a');
            break //opcional
        case 'b':
            // código para a expressão b
            console.log('b');
            break //opcional
        default:
            console.log('default');
            break
} 
*/

function calculate(number1, operator, number2) {
    let result = '';
    
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;    
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Não implemetado');
            break;
    }
    return result;
}

console.log(calculate(4, '+', 5));
console.log(calculate(4, '**', 5));
