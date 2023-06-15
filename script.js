function startCarousel() {
const banner = document.querySelector('.banner');
const images = banner.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
images.forEach((image, i) => {
if (i === index) {
image.classList.add('active');
} else {
image.classList.remove('active');
}
});
}

function nextImage() {
currentIndex++;
if (currentIndex >= images.length) {
currentIndex = 0;
}
showImage(currentIndex);
}

setInterval(nextImage, 6000);
}
startCarousel();


/*parte do cadastro*/
const form = document.getElementById('cadastro-form');

form.addEventListener('submit', function (event) {
event.preventDefault();

if (validateForm()) {
form.submit();
}
});

function validateForm() {
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const telefoneInput = document.getElementById('telefone');

if (nomeInput.value === '') {
alert('Por favor, preencha o campo Nome.');
nomeInput.focus();
return false;
}

if (emailInput.value === '') {
alert('Por favor, preencha o campo E-mail.');
emailInput.focus();
return false;
}

if (telefoneInput.value === '') {
alert('Por favor, preencha o campo Telefone.');
telefoneInput.focus();
return false;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(emailInput.value)) {
alert('Por favor, insira um endereço de e-mail válido.');
emailInput.focus();
return false;
}

return true;
}
