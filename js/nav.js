const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector('.nav-go4it')

let menuOpen = false;

document.addEventListener('click', (event) => {
  const isClickInsideHamburger = hamburgerMenu.contains(event.target);
  const isClickInsideNavMenu = navMenu.contains(event.target);

  if (!isClickInsideHamburger && !isClickInsideNavMenu && menuOpen) {
      closeMenu();
  }
});

hamburgerMenu.addEventListener('click', (event) => {
  event.stopPropagation();
  
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  hamburgerMenu.classList.add('active');
  navMenu.classList.add('nav-open');
  menuOpen = true;
}

function closeMenu() {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('nav-open');
  menuOpen = false;
}




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




document.addEventListener("DOMContentLoaded", function () {

  const enlacesIrlanda = document.querySelectorAll(".sub-menu-link");
  const flechaDerecha = document.querySelector('.flecha-derecha-nav')

  enlacesIrlanda.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      let contenedorPais = this.nextElementSibling;
      flechaDerecha.classList.toggle('arrow-active')
      contenedorPais.classList.toggle("active");
    });
  });
});



const iconoWsp = document.querySelector(".float-w")
window.onscroll = () => {
  let scrollY = window.scrollY;
  let visible = document.documentElement.clientHeight;
  let pageHeight = document.documentElement.scrollHeight;
  let tolerance = 5; 

  if (scrollY + visible + tolerance >= pageHeight) {
    iconoWsp.style.opacity = "0"
    iconoWsp.style.transition = "opacity .2s ease"
  } else{
    iconoWsp.style.opacity = "1"
  }
};

// const linkInicioEscuela = document.querySelector(".link-escuela-inicio")

// linkInicioEscuela.addEventListener("click", function (event) {
//   event.preventDefault(); 

//   const escuelaSection = document.querySelector("#sectionEscuela");
//   const escuelaSectionPosition = escuelaSection.offsetTop;

//   window.scrollTo({
//       top: escuelaSectionPosition,
//       behavior: "smooth"
//   });
// });
