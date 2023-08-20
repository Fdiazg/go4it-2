

const seleccionarCiudad = document.querySelectorAll('[data-cards]');
const cards = document.querySelectorAll('.card-ciudad-go4it');
const tituloEscuelas = document.querySelector('#tituloEscuelas');
const ciudadImagen = document.querySelectorAll('.ciudades-go4it');

const documentoBrochure = document.querySelectorAll('[data-doc]')

const gridEscuelas = document.querySelector('.lista-escuelas-go4it')



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
    let cantidadDeTarjetas = 0
    cards.forEach(card => {
        const cardCiudades = card.dataset.ciudad.split(' ');
        if (cardCiudades.includes(ciudad)) {
            card.classList.remove('d-none');
            cantidadDeTarjetas++;

            if (cantidadDeTarjetas === 3) {
                gridEscuelas.style.gridTemplateColumns = "repeat(3, 1fr)";
                gridEscuelas.style.justifyItems = "start"

            } else if (cantidadDeTarjetas === 2) {
                gridEscuelas.style.gridTemplateColumns = "repeat(2, 1fr)";
                gridEscuelas.style.justifyItems = "center"

            } else if (cantidadDeTarjetas === 1) {
                gridEscuelas.style.gridTemplateColumns = "repeat(1, 1fr)";
                gridEscuelas.style.justifyItems = "center"
            }

        } else {
            card.classList.add('d-none');
        }

        console.log(cantidadDeTarjetas)
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