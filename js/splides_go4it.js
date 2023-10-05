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


// document.addEventListener("DOMContentLoaded", function () {
//     new Splide("#seccion-escuelas", {
//         perPage: 3,
//         perMove: 1,
//         gap: "1rem",
//         destroy: false,
//         arrows: false,
//         type: 'slide',
//         fixedWidth: 220,


//         breakpoints: {
//             768: {
//                 destroy: false,
//                 type: "loop",
//                 perPage: 1,
//                 arrows: true,
//             },
//         },
//     }).mount();
// });



// document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#card-referencias', {
//         perPage: 4,
//         lazyLoad: 'nearby',
//         gap: 8,
//         arrows: false,
//         pagination: false,
//         breakpoints: {
//             640: {
//                 perPage: 1,
//                 type: "loop",
//                 arrows: true,
//                 pagination: true,
//             },
//         },
//     }).mount();
// });


document.addEventListener('DOMContentLoaded', function () {
    new Splide('#banner-go4it', {
        lazyLoad: 'nearby',
        type: 'loop',
        autoplay: 'play',
        arrows: true,
        pagination: true,
        breakpoints: {
            768: {
                height: "15rem"
            }
        },
    }).mount();
});