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

// ? Eli
const imgCarruselEli = document.querySelector("#image-carousel-eli")
if (imgCarruselEli) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-carousel-eli', {
            perPage: 3,
            arrows: false,
            pagination: false,
            breakpoints: {
                768: {
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    perMove: 1,
                    gap: 4,
                    autoplay: 'play',
                    type: 'loop',

                },
                426: {
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    gap: 0,
                }
            },

        }).mount();
    });
}

// ? English
const imgCarruselEng = document.querySelector("#image-carousel-eng")
if (imgCarruselEng) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-carousel-eng', {
            perPage: 3,
            arrows: false,
            pagination: false,
            // width: "80%",
            // focus: "center",
            // padding: { left: 100},
            breakpoints: {
                 1440:{
                    //  width: "100%",
                    //  perPage: 3,
                    //  focus: "left"
                    // padding: { left: 0},
                 },
                768: {
                    perPage: 2,
                    arrows: true,
                    pagination: true,
                    perMove: 1,
                    gap: 4,
                    autoplay: 'play',
                    type: 'loop',
                },
                426: {
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    gap: 0,
                }
            },

        }).mount();
    });
}
// ? Rightword
const imgCarruselRight = document.querySelector("#image-carousel-right")
if (imgCarruselRight) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-carousel-right', {
            perPage: 3,
            arrows: false,
            pagination: false,

            breakpoints: {
                768: {
                    perPage: 2,
                    arrows: true,
                    pagination: true,
                    perMove: 1,
                    gap: 4,
                    autoplay: 'play',
                    type: 'loop',
                },
                426: {
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    gap: 0,
                }
            },

        }).mount();
    });
}
// ? student
const imgCarruselStudent = document.querySelector("#image-carousel-student")
if (imgCarruselStudent) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-carousel-student', {
            perPage: 3,
            arrows: false,
            pagination: false,
            breakpoints: {
                768: {
                    perPage: 2,
                    arrows: true,
                    pagination: true,
                    perMove: 1,
                    gap: 4,
                    autoplay: 'play',
                    type: 'loop',
                },
                426: {
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    gap: 0,
                }
            },

        }).mount();
    });
}
// ? icot
const imgCarruselIcot = document.querySelector("#image-carousel-icot")
if (imgCarruselIcot) {
    document.addEventListener('DOMContentLoaded', function () {
        new Splide('#image-carousel-icot', {
            perPage: 3,
            arrows: false,
            pagination: false,
            breakpoints: {
                768: {
                    perPage: 2,
                    arrows: true,
                    pagination: true,
                    perMove: 1,
                    gap: 4,
                    autoplay: 'play',
                    type: 'loop',
                },
                426: {
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                    gap: 0,
                }
            },

        }).mount();
    });
}



document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-ciudades-dublin', {
        perPage: 2,
        gap: 10,
        pagination: false,
        arrows: false,
        padding: "1rem",
        

        breakpoints: {
            1024: {
                destroy: false,
                perPage: 2,
                gap: 10,
                pagination: false,
                arrows: false,
            },
            768: {
                destroy: false,
                perPage: 1,
                gap: 10,
                pagination: false,
                arrows: false,
            }
        }
    }).mount();
});



document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-ciudades-limerick', {
        perPage: 3,
        gap: 10,
        pagination: false,
        arrows: false,
        padding: "1rem",
        breakpoints: {
            1024: {
                destroy: false,
                perPage: 3,
                gap: 10,
                pagination: false,
                arrows: false,
            },
            768: {
                destroy: false,
                perPage: 1,
                gap: 10,
                pagination: false,
                arrows: false,
            }
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-ciudades-cork', {

        destroy: true,
        breakpoints: {
            1024: {
                focus: "center",
                destroy: false,
                perPage: 1,
                gap: 10,
                pagination: false,
                arrows: false,
            },
            768: {
                destroy: false,
                perPage: 1,
                gap: 10,
                pagination: false,
                arrows: false,
            }
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-ciudades-donegal', {

        destroy: true,
        breakpoints: {
            1024: {
                focus: "center",
                destroy: false,
                perPage: 1,
                gap: 10,
                pagination: false,
                arrows: false,
            },
            768: {
                destroy: false,
                perPage: 1,
                gap: 10,
                pagination: false,
                arrows: false,
            }
        }
    }).mount();
});
