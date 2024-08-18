const passinput = document.getElementById('PasswordInput');
const Copy = document.querySelector('#Copy');
const lengthN = document.querySelector('#length_number');
const upper = document.getElementById('Uppercase');
const lower = document.querySelector('#Lowercase');
const Symbols = document.querySelector('#Symbols');
const Number = document.querySelector('#Numbers');
const Generat = document.querySelector('#Generator');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

Generat.addEventListener('click', () => {
    let password = ''; // Reset password each time
    let str = '';
    
    if (upper.checked) {
        str += uppercasestr;
    }
    if (lower.checked) {
        str += lowercasestr;
    }
    if (Number.checked) {
        str += numberstr;
    }
    if (Symbols.checked) {
        str += symbolstr;
    }
    
    for (let i = 0; i < lengthN.value; i++) { // Use lengthN.value for length
        let index = Math.floor(Math.random() * str.length);
        console.log(str[index])
        password += str[index];
    }
    passinput.value = password;
});

Copy.addEventListener('click', () => {
    if (passinput.value === '') { // Check if passinput.value is empty
        alert('Please Generate First');
    } else {
        const newElement = document.createElement('textarea');
        newElement.value = passinput.value;
        document.body.appendChild(newElement);
        newElement.select();
        document.execCommand('copy');
        document.body.removeChild(newElement); // Remove the textarea after copying
        alert('Copied');
        passinput.value = ' ';
    }
});
