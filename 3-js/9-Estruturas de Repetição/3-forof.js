// for...of
// Percorre os dados que estão nos indices dos arrays e os caracteres de uma string

let string = 'Levy';

let array = [
    'Nathalia', 
    'Levy', 
    'Isaac'
];

let object = {
    name: 'Nathalia',
    age: 22
}

for (let char of string) {
    console.log(char);
}

for (let data of array) {
    console.log(data);
}

// Erro?
for (let what of object) {
    console.log(what);  
}

