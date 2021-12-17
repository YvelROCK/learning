//
/*
    FALSY
    Quando um valor é considerado false em contextos onde o booleano é obrigatório
    (Condicionais e Loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log ( null ? 'verdadeiro' : 'false');

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde o booleano é obrigatório
    (Condicionais e Loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log ( Infinity ? 'verdadeiro' : 'false');    
