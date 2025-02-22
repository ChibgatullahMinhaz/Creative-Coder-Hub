const clintContainer = [
    {
        id: 1,
        name: "A+ Studio",
        image: 'https://i.ibb.co.com/FbKDBXnX/chibgatullahminhaz-github-io-APlus-Studio.png',
        description: "Gigital Agency website built using html, css , tailwind css ",
        goLive: 'https://chibgatullahminhaz.github.io/APlus-Studio/',
        GoCode: '',
    }
];

function generateCard(cards) {
    let container = document.getElementById("clintContainer");
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

generateCard(clintContainer);