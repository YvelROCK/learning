const buttonOppenModal = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

/* Opção 1
buttonOppenModal.onclick = function() {
    modalWrapper.classList.toggle('invisible');
}
*/

// Opção 2
buttonOppenModal.addEventListener('click', function() {
    modalWrapper.classList.remove('invisible');
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modalWrapper.classList.add('invisible');
    }
})









