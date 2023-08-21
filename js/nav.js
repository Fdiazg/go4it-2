const hamburgerMenu = document.querySelector(".hamburger-menu");
// const dataDestino = document.querySelector(".link-ciudades")
const navMenu = document.querySelector('.nav-go4it')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('nav-open')
});

const enlacesScroll = document.querySelectorAll('.enlace-scroll');


enlacesScroll.forEach(enlace => {
  enlace.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    const headerHeight = document.querySelector('.header-go4it').offsetHeight;

    const offset = target.getBoundingClientRect().top - headerHeight;

    window.scrollTo({
      top: window.scrollY + offset,
      behavior: 'smooth'
    });
  });
});






// document.addEventListener("DOMContentLoaded", function () {
//   // Verifica la resolución de la pantalla
//   if (window.innerWidth < 760) {
//     // Encuentra todos los marcadores de posición
//     var marcadoresDePosicion = document.querySelectorAll(".contenedor-pais-placeholder");

//     // Itera a través de los marcadores de posición
//     marcadoresDePosicion.forEach(function (placeholder) {
//       // Crea un nuevo contenedor para cada marcador de posición
//       var contenedorPais = document.createElement("div");
//       contenedorPais.className = "contenedor-pais";

//       // Encuentra el ul que está dentro del mismo elemento padre que el marcador de posición
//       var ulSubSubMenu = placeholder.nextElementSibling;

//       // Mueve el ul dentro del nuevo contenedor
//       contenedorPais.appendChild(ulSubSubMenu);

//       // Inserta el nuevo contenedor antes del marcador de posición
//     placeholder.parentNode.replaceChild(contenedorPais, placeholder);
//     });
//   }
// });






document.addEventListener("DOMContentLoaded", function () {

  const enlacesIrlanda = document.querySelectorAll(".sub-menu-link");

  enlacesIrlanda.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      let contenedorPais = this.nextElementSibling;

      contenedorPais.classList.toggle("active");
    });
  });
});


