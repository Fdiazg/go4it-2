
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




// function initMap() {
//     // Crea un objeto de mapa y configura las opciones
//     var mapOptions = {
//         center: { lat: 52.6646, lng: -8.6234 }, // Coordenadas de Limerick
//         zoom: 12, // Nivel de zoom
//     };
//     var map = new google.maps.Map(document.getElementById('mapa-footer'), mapOptions);

//     // Crea un marcador en la localidad de Limerick
//     var markerOptions = {
//         position: { lat: 52.6646, lng: -8.6234 }, // Coordenadas de Limerick
//         map: map,
//         title: 'Limerick'
//     };
//     var marker = new google.maps.Marker(markerOptions);
// }



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
        .bindPopup('Rightword')
        .openPopup();
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
        .bindPopup('Eli, Grand Canal')
        .openPopup();

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
        .bindPopup('Eli, Dame Street')
        .openPopup();

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
        .bindPopup(`Eli, O'Connell`)
        .openPopup();

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
        .bindPopup('Eli, Merchant House')
        .openPopup();

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
        .bindPopup('Englishour')
        .openPopup();

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
        .bindPopup('Student Campus')
        .openPopup();

}