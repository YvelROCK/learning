const h1 = document.querySelector('h1');

//maneira mais recomendada
h1.addEventListener('click', print)

/* outra maneira
    h1.onclick = print
*/


function print() {
    console.log('print')
}


/* irá ser sobrescrito
    h1.onclick = function() {
        console.log("outro momento");
    }
*/

h1.addEventListener('click', function() {
        console.log("outro momento");
})
