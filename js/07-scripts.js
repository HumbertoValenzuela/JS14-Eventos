// 7. Prevenir Event Bubbling con Delegation

const cardDiv = document.querySelector('.card');
const cardDiv1 = document.querySelector('.card');
// creamos un evenListener grande y de ahí ir comparando
// a que le dio clic el usuario

// tenemos info titulo card y en todos el evento se dispara
// ¿como saber a que le estamos dando click?
cardDiv.addEventListener('click', () => {
    console.log('click en card');
})

// Esta es una forma de prevenir el Event Bubbling
// para saber a que le damos clic
cardDiv1.addEventListener('click', (e) => {
    // target muestra a que le damos click
    console.log(e.target);
    // classList nos dirá cuales son las clases a que le damos clic
    console.log(e.target.classList);
    if(e.target.classList.contains('titulo')){
        console.log('Diste Click en Titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste Click en Precio');
    }
    if(e.target.classList.contains('card')){
        console.log('Diste Click en card');
    }
})