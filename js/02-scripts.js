// 2. Eventos con el Mouse

// para ver todos los eventos addEventListener
// al terminar de escribir las comillas se muestran todos
// document.addEventListener('abort');

const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click en navegación');
})

// Sucede cuando el mouse se coloca sobre .navegación
nav.addEventListener('mouseenter', () => {
    console.log('Mouse encima de la zona');
    // cuando el evento se activo cambiar el style   
    nav.style.backgroundColor = 'white';
})

// Sucede cuando el mouse sale de la .navegación
nav.addEventListener('mouseout', () => {
    console.log('Mouse sale de la zona');
     // cuando el evento se activo cambiar el style
    nav.style.backgroundColor = 'red';
})

// Sucede al hacer click sin soltar el botón del mouse en la .navegación
nav.addEventListener('mousedown', () => {
    console.log('click sin soltar el mouse');
})

// Sucede al hacer click y soltar el botón del mouse en la .navegación
nav.addEventListener('mouseup', () => {
    console.log('click y soltar el mouse');
})

// Sucede al hacer doble click en el botón del mouse en .navegación
nav.addEventListener('dblclick', () => {
    console.log('Doble click botón mouse');
})
