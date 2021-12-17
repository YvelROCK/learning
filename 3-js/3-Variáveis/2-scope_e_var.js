/*
#Scope
* Escopo determina a visibilidade de alguma variável no JS.

#Block statement
```js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
*/

{
    let z = 0
    console.log(z)
}

/*
## var
```js
// var é global e local. E poderá funcionar fora de um escopo de bloco
// hoisting iça apenas a variável e não a atribuição, por isso undefined no primeiro
console.log abaixo.
*/

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do bloco? ', x)
