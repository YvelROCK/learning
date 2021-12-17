
// function hoisting

 
sayMyName();

function sayMyName() {
    console.log('Levy')
}

// "como se" isso acontecesse

/*
function sayMyName() {
    console.log('Levy')
}

sayMyName();
*/

// Nessa situação irá dar erro

/*
sayMyName();

const sayMyName = function() {
    console.log('Levy')
}
*/

// Fazer o mesmo com var também irá dar erro, mas por motivos diferentes.