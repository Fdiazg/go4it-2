
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
if(validacionRightword){
    const mapaRightword = L.map('mapa-rightword').setView([52.6593398, -8.6317434], 15); // Latitud, Longitud, y nivel de zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapaRightword);

L.marker([52.6593398, -8.6317434]).addTo(mapaRightword)
    .bindPopup('Rightword')
    .openPopup();
}

