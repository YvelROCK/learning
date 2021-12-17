// const e let são locais e só funcionam no escopo onde foram criadas

// console.log('> existe y antes do bloco? ', y)

{
    // console.log('> existe y antes? ', y)
    let y = 0
    console.log('> existe y depois? ', y)
}

//console.log('> existe y depois do bloco? ', y)

const y = 1;
console.log(y);
{
    const y = 0;
    console.log('> existe y?', y);
}
