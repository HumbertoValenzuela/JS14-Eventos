// Evitar la propagación con contenido creado...
// Mostrar como agregar funciones hacia un elemento
// ir parrafo3
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
// en 07-scripts creamos un evenListener grande y de ahí comparar
// a que le dabamos click
// Pero otra forma de hacerlo, es agregandole una funcion a este contenido que estamos generando
// resumiendo, estamos contenido scripting y estamos asociando una funcion cuando le damos clic
// parrafo3.onclick = nuevaFuncion

// si necesitas pasar parametros, la sintaxis varía
parrafo3.onclick = function () {
    nuevaFuncion(1)
}
// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

// esta técnica funciona bien cuando genero contenido HTML en JS
function nuevaFuncion() {
    console.log('desde nueva función');
} 