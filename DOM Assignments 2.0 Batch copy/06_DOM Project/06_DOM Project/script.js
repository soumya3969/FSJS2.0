const logo = document.querySelector('.logo');
logo.setAttribute('src',"./assets/ineuron-logo.png");
logo.style.width="200px";

const price = document.querySelector('.app_price span');
price.innerText = '$10';

// document.querySelector('.app_price span').innerText = '$10';

const footer_social = document.querySelector(".footer_social");

const footer_social_ico = document.createElement("div");
footer_social_ico.className = "footer_social_ico";
footer_social_ico.innerHTML = ` <i class="fa-brands fa-linkedin"></i> `;

footer_social.appendChild(footer_social_ico);
const parentDiv = document.querySelector('.footer_social');

const div = document.createElement('div');
div.classList.add('.footer_social_ico');

const img = document.createElement('img');
img.src = './assets/icons8-linkedin-30.png';
img.alt = 'linkedin icon';
img.classList.add('fa-brands');

div.appendChild(img);
parentDiv.appendChild(div);