// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '#image-carousel', {
//           perPage    : 2,
//           breakpoints: {
//               640: {
//                   perPage: 2,
//               },
//           },
//     } ).mount();
//   } );


document.addEventListener("DOMContentLoaded", function () {
    new Splide("#seccion-escuelas", {
        perPage: 3,
        perMove: 1,
        gap: "1rem",
        destroy: false,
        arrows: false,
        type: 'slide',
        fixedWidth: 220,


        breakpoints: {
            768: {
                destroy: false,
                type: "loop",
                perPage: 1,
                arrows: true,
            },
        },
    }).mount();
});
