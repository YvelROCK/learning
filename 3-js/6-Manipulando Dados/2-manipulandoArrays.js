// Manipulando Arrays

// Criar Array com construtor

let myArray = new Array(10); //criar array com posições vazias
            //new Array['a', 'b', 'c'];  
console.log(myArray);

// Contar elemento de um array

console.log([
    'a',
    {type: "array"},
    function() { 
        return "alo"
    },
].length);

// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação";
console.log(Array.from(word));

// Exercício

let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs");

// adcionar no começo
techs.unshift("sql");

// remover do fim
//techs.pop();

// remover do começo
//techs.shift();

// pegar somente alguns elementos do array
//console.log(techs.slice(1,1));

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('html');
techs.splice(index, 1);

console.log(techs);