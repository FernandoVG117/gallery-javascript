const galeria = document.getElementById('galeria');
const cerrarGaleria = () => {
    galeria.classList.remove('galeria--active');
        //Regresar el scroll a la pagina principal:
    document.body.style.overflow = '';

};

export default cerrarGaleria;