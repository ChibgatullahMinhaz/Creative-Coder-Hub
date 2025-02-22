const featuredWorks = [
    {
        id: 1,
        name: "Bangladesh 0.2",
        image: 'https://i.ibb.co.com/Y4ryYDyf/chibgatullahminhaz-github-io-Bangladesh-2-0.png',
        description: "Bangladesh 0.2 is a simple Website built HTML,CSS",
        GoCode: 'https://github.com/ChibgatullahMinhaz/Bangladesh-2.0',
        goLive: 'https://chibgatullahminhaz.github.io/Bangladesh-2.0/',
    },
    {
        id: 2,
        name: "Kindergarten",
        image: 'https://i.ibb.co.com/4wMSF2GD/Screenshot-2025-02-21-205542.png',
        description: "A kindergarten Website built using HTMl and CSS",
        goLive: 'https://chibgatullahminhaz.github.io/kindergarten/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/kindergarten'

    },
    {
        id: 3,
        name: "Browse 4 Pets",
        image: 'https://i.ibb.co.com/MDjTbtz3/a3.png',
        description: "A pets living leb website built HTML, CSS Tailwinds CSS",
        goLive: 'https://chibgatullahminhaz.github.io/Browse-Pets/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Browse-Pets'

    },
    {
        id: 4,
        name: "Portfolio Website",
        image: 'https://i.ibb.co.com/F43ZxyHm/Screenshot-2025-02-21-210717.png',
        description: "A personal portfolio to showcase projects.",
        goLive: 'https://chibgatullahminhazportfolio.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/portfolio'

    },
    {
        id: 5,
        name: "Foodie Humburger",
        image: 'https://i.ibb.co.com/j95yS0NN/Screenshot-2025-02-21-202522.png',
        description: "A simple Burger Website built using JavaScript.",
        goLive: 'https://chibgatullahminhaz.github.io/Foodie-Hamburger/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Foodie-Hamburger',
    },
    {
        id: 6,
        name: "Focus on Today",
        image: 'https://i.ibb.co.com/hJczjTqy/Screenshot-2025-02-21-203355.png',
        description: "A simple Focus on Today website built javaScript.it's sets three goals. ",
        goLive: 'https://chibgatullahminhaz.github.io/Focus-on-Today/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Focus-on-Today'

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

        // buttons and div
        let goLive = document.createElement('button');
        let goCode = document.createElement('button');
        let a = document.createElement('a')
        let ancor2 = document.createElement('a')
        a.innerText = "Code"
        a.href =card.GoCode;
        a.target = ' blank'
        ancor2.innerText = "Visite Site"
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

generateCard(featuredWorks);