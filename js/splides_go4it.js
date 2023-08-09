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
    new Splide("#limerick", {
        perPage: 4, // Number of cards displayed on desktop view
        perMove: 1, // Number of cards to move on each transition
        gap: "1rem", // Space between cards
        destroy: false,
		arrows: false,
		// arrow : false,
		// prev  : false,
		// next  : false,

        breakpoints: {
            768: {
                destroy: false,
                type: "loop", // Enables the infinite loop in the carousel
                perPage: 1, // Number of cards displayed on mobile view
                arrows: true,
            },
        },
    }).mount();
});
