
// TODO API PAISES

document.addEventListener('DOMContentLoaded', () => {

    const seleccionPaises = document.querySelector('#pais');
    // https://restcountries.com/v3.1/all
    fetch('https://restcountries.com/v2/all')

        .then(res => {
            return res.json();
        })
        .then(data => {
            let output = '';
            output = `<option disabled selected value=""> Seleccione su país</option> `
            data.forEach(pais => {
                output += `<option value="${pais.name}"> ${pais.name} </option>`;
            });
            seleccionPaises.innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })

});



// TODO API MAPA


// const mapa = L.map('mapa').setView([52.6641, -8.6236], 10); // Latitud, Longitud, y nivel de zoom

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(mapa);

// L.marker([52.6641, -8.6236]).addTo(mapa)
//     .bindPopup('Limerick, Irlanda')
//     .openPopup();


//TODO mapa rightword

const validacionRightword = document.querySelector('#mapa-rightword')
if (validacionRightword) {
    const mapaRightword = L.map('mapa-rightword').setView([52.6593398, -8.6317434], 15); // Latitud, Longitud, y nivel de zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaRightword);

    L.marker([52.6593398, -8.6317434]).addTo(mapaRightword)

}

//TODO MAPA ELI DUBLIN

const eliDublinGrandCanal = document.querySelector('#mapa-eli-dublin-grand')
const eliDublinDameStreet = document.querySelector('#mapa-eli-dublin-dame')
const eliLimerick = document.querySelector('#mapa-eli-limerick')
const eliDrogheda = document.querySelector('#mapa-eli-drogheda')

if (eliDublinGrandCanal) {
    const lat = 53.335332151511835;
    const lon = -6.244568824768066;
    const zoomLevel = 15;
    const mapaEliDublinGrandCanal = L.map(eliDublinGrandCanal).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaEliDublinGrandCanal);

    L.marker([lat, lon]).addTo(mapaEliDublinGrandCanal)

}

if (eliDublinDameStreet) {
    const lat = 53.344063;
    const lon = -6.2839783;
    const zoomLevel = 15;
    const mapaEliDublinGrandDameStreet = L.map(eliDublinDameStreet).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaEliDublinGrandDameStreet);

    L.marker([lat, lon]).addTo(mapaEliDublinGrandDameStreet)


}

if (eliLimerick) {
    const lat = 52.6599536;
    const lon = -8.6353708;
    const zoomLevel = 15;
    const mapaEliLimerick = L.map(eliLimerick).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaEliLimerick);

    L.marker([lat, lon]).addTo(mapaEliLimerick)

}

if (eliDrogheda) {
    
    const lat = 53.7154823;
    const lon = -6.356697;
    const zoomLevel = 15;
    const mapaEliDrogheda = L.map(eliDrogheda).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaEliDrogheda);

    L.marker([lat, lon]).addTo(mapaEliDrogheda)


}


//TODO Mapa englishour

const englishour = document.querySelector('#mapa-englishour')

if (englishour) {
    const lat = 53.3464059;
    const lon = -6.2588702;
    const zoomLevel = 15;
    const mapaEnglishour = L.map(englishour).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaEnglishour);

    L.marker([lat, lon]).addTo(mapaEnglishour)


}


//TODO Mapa studentcampus

const studentcampus = document.querySelector('#mapa-studentcampus')

if (studentcampus) {
    const lat = 52.6646439;
    const lon = -8.625596;
    const zoomLevel = 15;
    const mapaStudentcampus = L.map(studentcampus).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaStudentcampus);

    L.marker([lat, lon]).addTo(mapaStudentcampus)


}


//TODO Mapa studentcampus

const icotCork = document.querySelector('#mapa-icot-cork')

if (icotCork) {
    const lat = 51.895214;
    const lon = -8.4760912;
    const zoomLevel = 15;
    const mapaIcotCork = L.map(icotCork).setView([lat, lon], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaIcotCork);

    L.marker([lat, lon]).addTo(mapaIcotCork)


}