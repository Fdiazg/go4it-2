

const seleccionarCiudad = document.querySelectorAll('.ciudades-go4it');
const cards = document.querySelectorAll('.card-ciudad-go4it')
const tituloEscuelas = document.querySelector('#tituloEscuelas')

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
    seleccionarCiudad.forEach(ciudadT => {
        if (ciudadT === ciudadActual) {
            ciudadActual.classList.add('clicked');
            tituloEscuelas.textContent = `${ciudadT.dataset.ciudad}`
            tituloEscuelas.style.textTransform = "capitalize";
            cards.forEach(card => {



                const cardCiudades = card.dataset.ciudad.split(' ');
                if (cardCiudades.includes(ciudad)) {
                    card.classList.remove('d-none');

                } else {
                    card.classList.add('d-none');

                }
            });
        } else {
            ciudadT.classList.remove('clicked');
        }
    });
}
seleccionarCiudad.forEach(ciudad => {
    ciudad.addEventListener('click', toggleCiudad);

});










// const dataCiudad = document.querySelectorAll('[data-cards]');
// const dataDestino = document.querySelectorAll('[data-destino]');

// dataDestino.forEach(destino => {

//     dataCiudad.forEach(ciudad => {
//         const nombreCiudades = ciudad.getAttribute('data-cards')

//         const nombreDestino = destino.querySelector('a')
//         nombreDestino.href = `#${nombreCiudades}`;

//         console.log(nombreDestino.href)
//     })
// })







// function anclaDestino() {


// }
// anclaDestino()