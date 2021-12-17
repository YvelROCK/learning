/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

/* 
    Type conversion (typecasting) vs Type coersion
    
    * Alteração de um tipo de dado para outro tipo 
*/

console.log(Number('9') + 5);

// Manipulando Strings e Números

// Transformar String em Número e Número em String

let stringChange = "123";
console.log(Number(stringChange));

let numberChange = 321;
console.log(String(numberChange));

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let wordCounter = "Contagem";
console.log(wordCounter.length);

let numberCounter = 1234;
console.log(String(numberCounter).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let numberDecimalPlace = 45613135135.43515315313;
console.log(numberDecimalPlace.toFixed(2).replace(".", ","));

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também.

let wordLowerToUpper = "programar";
console.log(wordLowerToUpper.toUpperCase());

let wordUpperToLower = "PROGRAMAR";
console.log(wordLowerToUpper.toLowerCase());

//Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espações, coloque

let phrase = "O rato roeu a roupa do rei de roma!";
let myArray = phrase.split(" ");
console.log(myArray);

let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore.toLowerCase());

// Verificar se o texto contém uma palavra x

let phraseSearch = "Três pratos de trigo para três tigres tristes";
console.log(phraseSearch.includes("tigres"));





