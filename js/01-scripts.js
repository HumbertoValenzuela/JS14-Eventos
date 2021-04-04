// 1. Detectar cuando el HTML esta listo

// DOMContentLoaded es un evento que se ejecuta una vez que es descargado todo el HTML


// el orden para mostrar es 1 3 y 2. ¿por qué? es debido a DOMContenLoaded que espera a que el HTML este cargado.
// 1 y 2 no espera a que este cargado el HTML

// para ver todos los eventos addEventListener
// al terminar de escribir las comillas se muestran todos
// document.addEventListener('abort');

console.log(1)

document.addEventListener('DOMContentLoaded', () => {
    console.log('2 documento listo');
})

console.log(3); 