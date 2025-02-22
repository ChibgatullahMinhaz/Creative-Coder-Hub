const personalProjects = [
    {
        name: "Foodie Humburger",
        image: 'https://i.ibb.co.com/j95yS0NN/Screenshot-2025-02-21-202522.png',
        description: "A simple Burger Website built using JavaScript.",
        goLive: 'https://chibgatullahminhaz.github.io/Foodie-Hamburger/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Foodie-Hamburger',
    },
    {
        name: "Focus on Today",
        image: 'https://i.ibb.co.com/hJczjTqy/Screenshot-2025-02-21-203355.png',
        description: "A simple Focus on Today website built javaScript.it's sets three goals. ",
        goLive: 'https://chibgatullahminhaz.github.io/Focus-on-Today/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Focus-on-Today'
    }
    ,
    {
        name: "Biker Zone",
        image: 'https://i.ibb.co.com/VWNQWXT4/chibgatullahminhaz-github-io-Biker-Zone.png',
        description: "It's a simple Biker Zone webstie built using htm,css and Tailwind Css ",
        goLive: 'https://chibgatullahminhaz.github.io/Biker-Zone/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Biker-Zone'
    }
    ,
    {
        name: "Legal Solution",
        image: 'https://i.ibb.co.com/tw3t0VMp/chibgatullahminhaz-github-io-Legal-Solution.png',
        description: "It's a simple law 'Legal Solution' webstie built using htm,css and Tailwind Css ",
        goLive: 'https://chibgatullahminhaz.github.io/Legal-Solution/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Legal-Solution'
    }
    ,
    {
        name: "Go Corona",
        image: 'https://i.ibb.co.com/HfhFNLV5/Screenshot-2025-02-22-232618.png',
        description: "It's a simple webstie about Covid19,  built using htm,css and Tailwind Css ",
        goLive: 'https://chibgatullahminhaz.github.io/GoCorona/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/GoCorona'
    }
    ,
    {
        name: "Personal Portfolio",
        image: 'https://i.ibb.co.com/jkyHDXHH/chibgatullahminhaz-github-io-personal-Website.png',
        description: "It's a perosonal Portfolio webstie built using htm and css ",
        goLive: 'https://chibgatullahminhaz.github.io/personal-Website/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-Website'
    }
    ,
    {
        name: "Personal website",
        image: 'https://i.ibb.co.com/rRcxMX4R/chibgatullahminhaz-github-io-CH-Minhaz.png',
        description: "It's a perosonal Website webstie built using htm and Tailwinds CSS ",
        goLive: 'https://chibgatullahminhaz.github.io/CH.Minhaz/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/CH.Minhaz'
    }
    ,
    {
        name: "Happy New Year",
        image: 'https://i.ibb.co.com/N2KK0bHx/chibgatullahminhaz-github-io-New-Year-Offer.png',
        description: "It's a simple happy new year offer webstie built using htm and Tailwinds CSS ",
        goLive: 'https://chibgatullahminhaz.github.io/New-Year-Offer/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/New-Year-Offer'
    }
    ,
    {
        name: " Tea House",
        image: './images/Tea-House_.png',
        description: "A Tea House webstie built using htm and Tailwinds CSS. This Design for ShowCase My Skills  ",
        goLive: 'https://chibgatullahminhaz.github.io/Tea-House/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/Tea-House'
    }
    ,
    {
        name: "",
        image: '',
        description: "",
        goLive: '',
        GoCode: ''
    }
];

function generateCard(cards) {
    let container = document.getElementById("personalContainer");
    container.innerHTML = "";

    for (let i = cards.length - 1; i >= 0; i--) {
        let card = cards[i];
         
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


generateCard(personalProjects);