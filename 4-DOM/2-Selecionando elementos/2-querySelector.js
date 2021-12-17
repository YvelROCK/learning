var getElementsByClassName = document.getElementsByClassName('item')
console.log(getElementsByClassName);

// querySelectorAll() vários elementos; todos os elementos
var querySelectorAll1 = document.querySelectorAll('#lista2 li')
console.log(querySelectorAll1);

var querySelectorAll2 = document.querySelectorAll('#lista2 .item')

querySelectorAll2.forEach(i => console.log(i)); // estudar

// querySelector() um elemento; o primeiro elemento
// não permite .forEach
var querySelector1 = document.querySelector('#lista'); 
console.log(querySelector1);

var querySelector2 = document.querySelector('ul');
console.log(querySelector2);


