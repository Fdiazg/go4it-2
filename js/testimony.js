const testimonials = [
    {
        imageSrc: "./img/concepcion.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 01"
    },
    {
        imageSrc: "./img/santiago.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 02"
    },
    {
        imageSrc: "./img/santiago.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 03"
    },
    {
        imageSrc: "./img/santiago.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 04"
    },
    {
        imageSrc: "./img/concepcion.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 05"
    },
    {
        imageSrc: "./img/santiago.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 06"
    },
    {
        imageSrc: "./img/santiago.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 07"
    },
    {
        imageSrc: "./img/santiago.jpg",
        text: "Esta es una reseña de algo, ejemplo de ejemplo de ejemplo de super ejemplo ejemplar 08"
    }
];

function fillTestimonials() {
    const testimonialsContainer = document.querySelector("#card-referencias .splide__list");

    testimonials.forEach(testimonial => {
        const listItem = document.createElement("li");
        listItem.classList.add("splide__slide");
        listItem.classList.add("testimony-list");

        const image = document.createElement("img");
        image.src = testimonial.imageSrc;
        image.alt = "";
        image.width = 150;
        image.height = 150;
        image.style.borderRadius = "50%";
        image.loading = "lazy"

        const textDiv = document.createElement("div");
        textDiv.classList.add("testimony-text")
        textDiv.textContent = testimonial.text;

        listItem.appendChild(image);
        listItem.appendChild(textDiv);

        testimonialsContainer.appendChild(listItem);

    });

    new Splide('#card-referencias', {
        perPage: 4,
        lazyLoad: 'nearby',
        gap: 8,
        arrows: true,
        pagination: true,
        type: "loop",
        perMove: 1,
        breakpoints: {
            768: {
                perPage: 2,
                type: "loop",
                arrows: true,
                pagination: true,
            },
            640: {
                perPage: 1,
                type: "loop",
                arrows: true,
                pagination: true,
            },
        },
    }).mount();
}

window.addEventListener("load", fillTestimonials);