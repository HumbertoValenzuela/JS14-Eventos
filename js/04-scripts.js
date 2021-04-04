// 4. Evento Submit a un formulario. preventDefault
// función anónima o Arrow function
// Declaración de función

// el evento sucede en el form #formulario

const formulario = document.querySelector('#formulario');

// Evento de formulario submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();// quita los valores por default del form
    // en este caso es action="/buscador.html" que es la dirección.
    // y quita method="POST"
    // un form va a tratar de enviar el formulario
// otro ejemplo un enlace tiene por default abrir el enlace
    console.log(e);
    console.log(e.target.method);//post
    console.log(e.target.action);//va a /buscador

})

// Declaración de función
// formulario.addEventListener('submit', validarForms);
// function validarForms(e) {
//     e.preventDefault();
//     console.log(e);    
// }