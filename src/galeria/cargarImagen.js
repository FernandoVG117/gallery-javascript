// Importar la informacion de /fotos.js
import data from './../datos/fotos' 

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
    // cambio de la ruta, nombre, descripcion y id de la imagen activa.
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;

    //obtener la categoria de las fotos para cambiar el borde de imagen actual.
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    
    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === id) {
            indexImagenActual = index;
        }
    });

    // Marcar la imagen del carousel activa:
    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        
        // Eliminar la clase --active de cualquier slide. (IMPORTANTE: querySelector() )
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        
        // Obtener los elementos del carousel. (IMPORTANTE: querySelectorAll() )
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
        
        /*
            NOTA: Se hizo en la funcion de cargar imagen para poder citarla cuando se vincule a los botones
            laterales de cambio de imagen, ahorrando asi codigo en un futur proximo.
        */
    };
    
};

// Crear una funcion para cargar las imagenes siguientes/anterior
const cargarAnteriorSiguiente = (direccion) => {
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if (foto.id === idImagenActual) {
            indexImagenActual = index;
        };
    });

    if (direccion === 'siguiente') {
        if (fotos[indexImagenActual + 1]) {
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        };
    } else if (direccion === 'anterior') {
        if (fotos[indexImagenActual - 1]) {
            const {id, nombre, ruta, descripcion} = fotos[indexImagenActual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
};

export { cargarImagen, cargarAnteriorSiguiente };

//La funcion se puede utilizar para la secuencia de cambio de imagen en el carousel.