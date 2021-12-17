//Alterando estilos
//classList

const element = document.querySelector("body");

// adciona a class
element.classList.add("active", "green");

// remove a class
//element.classList.remove("active");

// remove ou adciona a class dependendo se ela existe ou não.
element.classList.toggle("active");