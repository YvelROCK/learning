// Navegando pelos elementos

const element = document.querySelector('body');

//mostra o filho e não mostra os espaços.
// HTML Collection
console.log(element.children);

// Mostra os filhos e os espaço vazios como text, roda o forEach e tem funções prototypes
// NodeList
console.log(element.childNodes);

// Mostra o primeiro filho e os espaço vazios como text, roda o forEach e tem funções prototypes
console.log(element.firstChild);

// Mostra o primeiro filho, não mostra os espaços.
console.log(element.firstElementChild);

// Mostra o último filho, não mostra os espaços.
console.log(element.lastChild);

// Mostra o pultimo filho, mostra espaços.
console.log(element.lastElementChild);