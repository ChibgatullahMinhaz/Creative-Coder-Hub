// creating div
const container = document.createElement('div');
const header = document.createElement('div');
const quoteDiv = document.createElement('div');
const authorDiv = document.createElement('div');
const buttonDiv = document.createElement('div');

// header child elements
const h1 = document.createElement('h1');
header.className = 'header';
h1.textContent = 'Random Quote Generator';
header.appendChild(h1)

// header child elements
const p = document.createElement('p');
quoteDiv.className = 'quote';
p.textContent = 'Random Quote Generator';
p.id = 'quote';
quoteDiv.appendChild(p)


// styling 
container.style.border = '1px solid red';
container.style.padding = '1rem';
p.style.color = 'red';


// Append elements to the container
container.appendChild(header);
container.appendChild(quoteDiv);
container.appendChild(authorDiv);
container.appendChild(buttonDiv);

// Append the container to the body
document.body.appendChild(container);