
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

