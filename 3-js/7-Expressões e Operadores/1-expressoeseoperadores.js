/* Expressões e Operadores
-Expressions
-Operators
    Binary
    Unary
    Ternary
*/
// ponto e vírgula podem ou não ser usado no final de cada expressão

/* Caso em que o ponto e vírgula no fim faz diferença 
let number = 1;

(function() {
    console.log('alo')
})()
*/

//Unary
let u = 1;

console.log(++u);

//Binary
let b = 1;

console.log(b + 1);

//Ternary

console.log(true ? 'alo' : 'nada');


//Operadores de comparação
//Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1;
let two = 2;

// == igual a
console.log("== igual a");
console.log( two == 1 );
console.log( one == "1" );

// != diferente de
console.log("!= diferente de");
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// === estritamente igual a
console.log("=== estritamente igual a");
console.log(one === "1");
console.log(one === 1);

// !== estritamente diferente de
console.log("!== estritamente diferente de")
console.log(two !== "2");
console.log(two !== 2);

// > Maior que
console.log("> Maior que");
console.log(two > one);

// >= Maior ou igual
console.log(">= Maior ou igual");
console.log(one >= 1);
console.log(two >= 1);

// < Menor 
console.log("< Menor ");
console.log(one < two);

//<= Menor ou igual
console.log("<= Menor ou igual");
console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);
