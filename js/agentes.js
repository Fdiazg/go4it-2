

function fillAgentes() {
    const agentesContainer = document.querySelector("#cardAgentes .splide__list");


    fetch('mocks/agentes.json')
        .then(response => response.json())
        .then(agentes => {


            agentes.forEach(agente => {
                const listItem = document.createElement("li");
                listItem.classList.add("splide__slide");
                listItem.classList.add("agente-list");

                const image = document.createElement("img");
                image.src = agente.imageSrc;
                image.alt = "";
                image.width = 150;
                image.height = 150;
                image.style.borderRadius = "50%";
                image.style.objectFit = 'cover';
                image.loading = "lazy"

                const locationElement = document.createElement("p");
                locationElement.classList.add("agente-text")
                // locationElement.textContent = agente.location;
                locationElement.innerHTML = `<i class=" bi bi-geo-alt-fill"></i> ${agente.location}`;




                const rrssElement = document.createElement("a");
                rrssElement.classList.add("agente-text")
                rrssElement.href = `https://instagram.com/${agente.rrss}`;
                rrssElement.target = "_bank";
                rrssElement.innerHTML = `<i class=" bi bi-instagram"></i> @${agente.rrss}`;
                const divText = document.createElement('div');
                divText.appendChild(locationElement);
                divText.appendChild(rrssElement);

                const elementName = document.createElement('h4');
                elementName.classList.add('agente-name');
                elementName.textContent = agente.name;


                listItem.append(elementName)
                listItem.appendChild(image);
                listItem.appendChild(divText);


                agentesContainer.appendChild(listItem);

            });

            new Splide('#cardAgentes', {
                perPage: 3,
                lazyLoad: 'nearby',
                gap: 8,
                arrows: false,
                pagination: false,
                drag: false,
                // type: "loop",
                // perMove: 1,
                breakpoints: {
                    768: {
                        autoplay: 'play',
                        drag: true,
                        perPage: 2,
                        type: "loop",
                        arrows: true,
                        pagination: true,
                        perMove: 1,
                    },
                    640: {
                        drag: true,
                        perPage: 1,
                        type: "loop",
                        arrows: true,
                        pagination: true,
                        perMove: 1
                        ,
                    },
                },
            }).mount();
        })
        .catch(error => {
            console.error("Error al cargar agentes:", error);
        });
}

window.addEventListener("load", fillAgentes);