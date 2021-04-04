// 3. Eventos sobre los Inputs

const busqueda = document.querySelector('.busqueda');

// AL presionar un botón del teclado
busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo');
})

// AL soltar un botón del teclado
busqueda.addEventListener('keyup', () => {
    console.log('Soltó el botón');
})

// Muy común en la validación de formulario
// Al estar en el input, y luego salir del input. Por medio de teclado o mouse
busqueda.addEventListener('blur', () => {
    console.log('saliste del input');
})

// Se activa al copiar con ctrl + c y copiar click derecho con el mouse opción copiar
busqueda.addEventListener('copy', () => {
    console.log('Copiaste ');
})

// Se activa al pegar con ctrl + v y pegar click derecho con el mouse opción pegar
busqueda.addEventListener('paste', () => {
    console.log('Pegaste algo');
})

// Se activa al cortar con ctrl + x y cortar click derecho con el mouse opción cortar
busqueda.addEventListener('cut', () => {
    console.log('Cortar algo');
})

// Se activa al cortar, pegar, copiar, keyup, keydown. menos el blur, este no
busqueda.addEventListener('input', () => {
    console.log('Cortar algo');
})

busqueda.addEventListener('input', (evento) => {
    console.log(evento);//muestra el evento y todas caracte
    console.log(evento.type);//El type es un input
    console.log(evento.target);//que input en especifico estoy escribiendo
})

// Saber que esta escribiendo el usuario
busqueda.addEventListener('input', (evento) => {
    
    console.log(evento.target.value);//muestra lo que escribiendo en el input
    if(evento.target.value === ''){
        console.log('fallo la validación');
    }
})