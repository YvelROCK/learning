// Dependendo das condição, nós receberemos valores diferentes

// Condição então valor se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã
let pao = true;
let queijo = true;

const niceBreakfast = pao && queijo ? 'Café completo' : 'Café incompleto';

console.log(niceBreakfast)

// Maior que 18

let age = 16;
const canDrive = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir';
console.log(canDrive);