document.addEventListener('DOMContentLoaded', function() {
    
    const encDatos = document.querySelector('.enc-datos');
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;

        if (scroll > 35) {
            encDatos.style.top = "-35px";
            nav.style.top = "0"; 
        }else {
            encDatos.style.top = "0";
            nav.style.top = "35px";
        }
    });

    /* Manejo de modal contáctame */
    const abrir_modal = document.querySelectorAll('#abrir-modal-contacto');
    const modal_generico = document.querySelector('#modal-contacto');
    const cerrar_modal = document.querySelectorAll('.cerrar-contacto');

    abrir_modal.forEach(function(element_abrir) {
        element_abrir.addEventListener('click', function(event){
            modal_generico.style.display = 'block';
        });
    });

    cerrar_modal.forEach(function(element_cerrar) {
        element_cerrar.addEventListener('click', function(event){
            modal_generico.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal_generico) {
            modal_generico.style.display = 'none';
        }
    });

    /* Manejo de modal CV */
    const abrir_modal_cv = document.querySelectorAll('#abrir-modal-cv');
    const modal_generico_cv = document.querySelector('#modal-cv');
    const cerrar_modal_cv = document.querySelectorAll('.cerrar-cv');

    abrir_modal_cv.forEach(function(element_abrir) {
        element_abrir.addEventListener('click', function(event){
            modal_generico_cv.style.display = 'block';
        });
    });

    cerrar_modal_cv.forEach(function(element_cerrar) {
        element_cerrar.addEventListener('click', function(event){
            modal_generico_cv.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal_generico_cv) {
            modal_generico_cv.style.display = 'none';
        }
    });
});