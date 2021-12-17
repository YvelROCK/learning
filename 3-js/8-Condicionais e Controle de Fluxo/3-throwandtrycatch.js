// throw

function sayMyName (name = '') {
    if (name === '') {
        throw 'Nome é obrigatório';
    }

    console.log('Depois do erro');
}


//try...catch
try {
    sayMyName()
} catch (error) {
    console.log(error);
}

console.log('após o try/catch');
console.log(error);
