

const seleccionarCiudad = document.querySelectorAll('[data-cards]');
const cards = document.querySelectorAll('.card-ciudad-go4it');
const tituloEscuelas = document.querySelector('#tituloEscuelas');
const ciudadImagen = document.querySelectorAll('.ciudades-go4it');

const documentoBrochure = document.querySelectorAll('[data-doc]')




cards.forEach(ocultar => {
    if (ocultar.dataset.ciudad.includes('limerick')) {
        ocultar.classList.remove('d-none')

    } else {
        ocultar.classList.add('d-none')
    }
})


function toggleCiudad(e) {
    const ciudadActual = e.currentTarget;
    const ciudad = ciudadActual.dataset.ciudad;

    //Imagen
    ciudadImagen.forEach(ciudadClicked => {
        if (ciudadClicked.dataset.cards === ciudad) {
            ciudadClicked.classList.add('clicked');
        } else {
            ciudadClicked.classList.remove('clicked');
        }
    });

    //Cards
    cards.forEach(card => {
        const cardCiudades = card.dataset.ciudad.split(' ');
        if (cardCiudades.includes(ciudad)) {
            card.classList.remove('d-none');
        } else {
            card.classList.add('d-none');
        }
    });

    //Documentos
    documentoBrochure.forEach(documento => {
        const dataDocValue = documento.dataset.doc;
        if (dataDocValue === ciudad) {
            documento.classList.remove('d-none');
        } else {
            documento.classList.add('d-none');
        }
    });

    tituloEscuelas.textContent = `${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}`;
}



seleccionarCiudad.forEach(ciudad => {

    ciudad.addEventListener('click', toggleCiudad);

});