import dataFotos from './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
// Crear una nueva variable que acceda a la galeria.
const galeria = document.getElementById('galeria');

//Agregar un evento.
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    //  Condicionante para que no se ejecute un evento al momento 
    //   de seleccionar un espacio entre los cuadros de immagenes.
    if(e.target.closest('a')){
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        // Trabajar con el carrusel y las imagenes dinamicas
        //Constante categoria activa:
        const categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria.dataset.categoria = categoriaActiva;        // Cargar la categoria activa de la galeria.

        const fotos = dataFotos.fotos[categoriaActiva];

        // Para solucionar el problema de que las fotos no se carguen se accede a una nueva variable con una funcion:
        const carousel = galeria.querySelector('.galeria__carousel-slides');
        
        //Reestructurar las propiedades de la primer foto = fotos[0]
        const {id, nombre, ruta, descripcion} = fotos[0];
        
        //Importar la funcion de cargar imagen principal de galeria:
        cargarImagen(id, nombre, ruta, descripcion);

        carousel.innerHTML = '';

        fotos.forEach((foto) => {
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
                </a>
            `;
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');

    };
}); 


