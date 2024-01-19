import dataCategories from './datos/categorias';

//Reestructurar el objeto por categorias:
const { categorias } = dataCategories;

// Construir e insertar una categoria en la pagina:
const contenedorCategorias = document.getElementById('categorias');

        //Crear las categorias por forEach():
categorias.forEach((categoria) => {
    //Para crear el elemento necesitamos 3 pasos: 

    //(1): Crear un elemento:
    const nuevaCategoria = document.createElement('a');

    //(2): Crear una plantilla:
    const plantilla = `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
    </div>
    `;

    //(3): establecer la construccion del elemento:
    nuevaCategoria.innerHTML = plantilla;

    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;

    contenedorCategorias.append(nuevaCategoria);
});