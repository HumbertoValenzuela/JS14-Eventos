// 5. Eventos al dar scroll con el mouse
// scroll ocurre en la ventana global, es decir , en window
// window.screenY es de arriba y abajo
// window.screenx es horizontal

// escuchar por un scroll
window.addEventListener('scroll', () => {
    console.log('scrolling'); // scrolling realizado. si llega al Inicio o final no aumenta el scrolling
    const scrollPX = window.scrollY; //en Pixeles, aumenta y dismuye los pixeles
    console.log(scrollPX);

    // Realizando scroll y al pasar por la clase .premium hacer algo
    const premium = document.querySelector('.premium');
    // OMRect {x: 0, y: 8.06640625, width: 1017.5, height: 447.98828125, top: 8.06640625, …}
    // muestra cuanto falta para llegar a la ubicación
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
    if (ubicacion.top < 702) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, dar más Scroll');
    }
})