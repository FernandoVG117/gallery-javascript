import datos from './../datos/fotos.js';
import { cargarImagen } from './cargarImagen';
// Funcionalidad de un click sobre un slide

const slideClick = (e) => {
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;

    // Definir variables:
    let ruta, descripcion, nombre;


    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id){
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });
    cargarImagen(id, nombre, ruta, descripcion);
};



export default slideClick;