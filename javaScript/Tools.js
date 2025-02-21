const Tools = [
    {
        id: 1,
        name: "Age Calculator",
        image: 'https://via.placeholder.com/200',
        description: "A simple Age calculator built using JavaScript. it's for calculate Age",
        goLive: 'https://personal-mini-projects.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects/tree/main/Age%20Calculator',
    },
    {
        id: 2,
        name: "Weather App",
        image: 'https://via.placeholder.com/200',
        description: "A weather forecasting app using API.",
        goLive: 'https://personal-mini-projects.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    },
    {
        id: 3,
        name: "To-Do List",
        image: 'https://via.placeholder.com/200',
        description: "A task manager application with local storage.",
        goLive: 'https://personal-mini-projects.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    },
    {
        id: 4,
        name: "E-commerce Site",
        image: 'https://via.placeholder.com/200',
        description: "A fully responsive online shopping website.",
        goLive: 'https://personal-mini-projects.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    },
    {
        id: 5,
        name: "Portfolio Website",
        image: 'https://via.placeholder.com/200',
        description: "A personal portfolio to showcase projects.",
        goLive: 'https://personal-mini-projects.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    }
];

function generateCard(cards) {
    let container = document.getElementById("toolsContainer");
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

        // buttons and div
        let goLive = document.createElement('button');
        let goCode = document.createElement('button');
        let a = document.createElement('a')
        let ancor2 = document.createElement('a')
        a.innerText = "Code"
        a.href =card.GoCode;
        a.target = ' blank'
        ancor2.innerText = "Live"
        ancor2.href =card.goLive;
        ancor2.target = 'blank';
        let buttonContainer = document.createElement('div');
        buttonContainer.className = "btncontainer";

        // Append elements
        cardBody.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        buttonContainer.appendChild(goCode);
        buttonContainer.appendChild(goLive);
        goCode.appendChild(a);
        goLive.appendChild(ancor2)
        cardBody.appendChild(buttonContainer);
        container.appendChild(cardBody);
    }
}

generateCard(Tools);