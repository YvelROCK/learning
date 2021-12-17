/*
Utilizado na manipulação do DOM, o innerHTML retorna todo o texto e o html que existem 
no elemento. Ele retorna todo o html existente, retornando também às tags, e não somente
o texto
*/
let exemploInner = document.querySelector("p");

console.log("------ USANDO innerHTML ------");
console.log(exemploInner.innerHTML);


/*
Já o innerText retorna apenas o texto. Ele ignora todas as tags HTML que estão dentro do 
elemento, mas ainda assim, “entende” o css do elemento, retornando apenas textos visíveis. 
Utiliza-se quando queremos buscar apenas o texto visível disponível no elemento.
*/
console.log("------ USANDO innerText ------");
console.log(exemploInner.innerText);

/*
textContent:
O textContent funciona de forma muito semelhante ao innerText, porém, retornando todo o 
conteúdo de texto, incluindo o texto oculto pelo css, bem como as quebras de linha (\n). 
Utilizamos o textContent quando queremos buscar todo o texto disponível no elemento.
*/
console.log("------ USANDO textContent ------");
console.log(exemploInner.textContent);