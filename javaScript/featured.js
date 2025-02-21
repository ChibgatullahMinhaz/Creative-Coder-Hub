const featuredWorks = [
    {
        id: 1,
        name: "Calculator",
        image: 'https://via.placeholder.com/200',
        description: "A simple calculator built using JavaScript."
    },
    {
        id: 2,
        name: "Weather App",
        image: 'https://via.placeholder.com/200',
        description: "A weather forecasting app using API."
    },
    {
        id: 3,
        name: "To-Do List",
        image: 'https://via.placeholder.com/200',
        description: "A task manager application with local storage."
    },
    {
        id: 4,
        name: "E-commerce Site",
        image: 'https://via.placeholder.com/200',
        description: "A fully responsive online shopping website."
    },
    {
        id: 5,
        name: "Portfolio Website",
        image: 'https://via.placeholder.com/200',
        description: "A personal portfolio to showcase projects."
    }
];

function generateCard(cards) {
    let container = document.getElementById("card_container");
    container.innerHTML = "";

    for (const card of cards) {
        const cardBody = document.createElement('div');
        cardBody.className = 'cardBody';

        // Image
        let img = document.createElement('img');
        img.src = card.image;
        img.alt = card.name;

        // Title
        let title = document.createElement('h3');
        title.textContent = card.name;

        // Description
        let desc = document.createElement('p');
        desc.textContent = card.description;

        // Append elements
        cardBody.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        container.appendChild(cardBody);
    }
}

generateCard(featuredWorks);