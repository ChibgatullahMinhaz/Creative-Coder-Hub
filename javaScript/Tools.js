const Tools = [
    {
        id: 1,
        name: "Age Calculator",
        image: 'https://play-lh.googleusercontent.com/325IpLP2w1cR4NegSUqBV60HwvzqnvuMEA0LTNA_dzg7KdRpTgpVGxQ0bC9TrxXALA',
        description: "A simple Age calculator built using JavaScript. it's for calculate Age",
        goLive: 'https://personal-mini-projects.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects/tree/main/Age%20Calculator',
    },
    {
        id: 2,
        name: "Text Animation",
        image: 'https://www.animaker.com/static_2.0/img/textanimationmaker/text_animation_ogimage.png',
        description: "A simple Text Animation Site built using HTML and JavaScript",
        goLive: 'https://personal-mini-projects-av5l.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    },
    {
        id: 3,
        name: "Audio Bord",
        image: './images/audiobord.png',
        description: "It's a simple audio bord site built using html,CSS and JavaScript",
        goLive: 'https://personal-mini-projects-pmvc.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    },
    {
        id: 4,
        name: "BMI Calculator",
        image: './images/bmi.png',
        description: "It's a simple BMI Calculator , built using HTML,CSS and JavaScript.",
        goLive: 'https://personal-mini-projects-emvg.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    },
    {
        id: 5,
        name: "Calculator",
        image: './images/calculator.png',
        description: "It's a Calculato , fully Funtional built using JavaScript",
        goLive: 'https://personal-mini-projects-2dpk.vercel.app/',
        GoCode: 'https://github.com/ChibgatullahMinhaz/personal-mini-projects'

    }
];

function generateCard(cards) {
    let container = document.getElementById("toolsContainer");
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
        ancor2.innerText = "Live Site"
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



const h3 = document.getElementById('jkj');
h3.style.fontSize