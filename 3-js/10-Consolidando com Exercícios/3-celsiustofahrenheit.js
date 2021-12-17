function conversor(unit) {
    let existC = unit.toUpperCase().includes('C'); //verificar se exist C ou c
    let existF = unit.toUpperCase().includes('F'); //verificar se exist F ou f
    let temperature = unit; // Armazena a string para depois ser convertida em float
    temperature = parseFloat(temperature); // Convertendo a String armazenada em float
    
    // Verificar se o dado fornecido é válido
        //exemplo de dado inválido: '88.5cf', '88.5'  
    // Estudar throw, try and catch
    if ((!existC && !existF) || (existC && existF)) {
        throw new Error('Grau não identificado');
    }
    
    //console.log(temperature);
    
    if (existC == false) {
        temperature = (temperature - 32) * (5 / 9);
        //console.log(temperature);
    } else if (existC == true) {
        temperature = (temperature * (9 / 5)) + 32;
        //console.log(temperature);
    } 
    return temperature;
}

// Ainda irá dar erro se uma letra for acrescentada entre o float
// ex: 8c8.f5
console.log(conversor('88.5c'));





































/* 
Entendendo o parseFloat

let temperatura = '82.8C';
temperatura = parseFloat(temperatura);
console.log(temperatura);
*/


/* 
Remover um índice específico de um array

temperatura = temperatura.split('');
let buscar = 'C';
let indice = temperatura.indexOf(buscar);
while(indice >= 0) {
    temperatura.splice(indice, 1);
    indice = temperatura.indexOf(buscar);
}

Entendendo o join

temperatura = temperatura.join('')
temperatura = temperatura.
console.log(temperatura);
*/