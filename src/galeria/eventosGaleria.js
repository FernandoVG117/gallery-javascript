// Para trabajar con la funcionalidad de los botones, se podria hacer un evento por cada uno, sin embargo,
// no es el procedimiento optimo, por lo que se utilizará la "propagacion de eventos" y asi con menos codigo
import cerrarGaleria from "./cerrarGaleria";

import slideClick from "./slideClick";

import { cargarAnteriorSiguiente } from "./cargarImagen";

import carousel from "./carousel";

// desarrollar su operación.
const galeria = document.getElementById('galeria');

// agregar el evento:
galeria.addEventListener('click', (e) =>{
    const boton = e.target.closest('button');

    // -- CERRAR GALERIA --
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }; 

    // -- CAROUSEL SLIDE CLICK --
    if(e.target.dataset.id){
        slideClick(e);
    };

    // -- SIGUIENTE IMAGEN --
    if (boton?.dataset?. accion === 'siguiente-imagen') {
        cargarAnteriorSiguiente('siguiente');
    };

    // -- ANTERIOR IMAGEN --
    if (boton?.dataset?. accion === 'anterior-imagen') {
        cargarAnteriorSiguiente('anterior');
    };

    // -- SIGUIENTE SLIDE --
    if (boton?.dataset?. accion === 'siguiente-slide') {
        carousel('adelante');
    };

    // -- ANTERIOR SLIDE --
    if (boton?.dataset?. accion === 'anterior-slide') {
        carousel('atras');
    };


});