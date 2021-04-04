// 6. Qué es el Event Bubbling
// Los eventos se propagan como si fuera una burbuja
// Event Bubbling es cúando se activa un evento pero ese
// evento se propaga por muchos otros lugares, dando un 
// resultado no esperado

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


// en este ejemplo al hacer click en .titulo, se dispara
// el evento titulo pero además se disparan automaticamente
// card y info. esto es debido a que titulo es hijo de los otros elementos. 
// pero si haces click en card, solo se dispara card y no los otros info y titulo
cardDiv.addEventListener('click', () => {
    console.log('click en card');
});

infoDiv.addEventListener('click', () => {
    console.log('click en infoDiv');
});

titulo.addEventListener('click', () => {
    console.log('click en titulo');
});


// Para detener el Event Bubbling, se coloca e de evento 
// y agregar stopPropagation y esto detiene la propagacion del event Bubbling
const header = document.querySelector('.header');
const navegacion = document.querySelector('.navegacion');

header.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en header');
});

navegacion.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en navegacion');
});
