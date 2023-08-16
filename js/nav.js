const hamburgerMenu = document.querySelector(".hamburger-menu");
// const dataDestino = document.querySelector(".link-ciudades")

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

const enlacesScroll = document.querySelectorAll('.enlace-scroll');


enlacesScroll.forEach(enlace => {
  enlace.addEventListener('click', function(event) {
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
