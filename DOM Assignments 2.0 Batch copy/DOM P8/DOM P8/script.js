//task-1
const aside = document.querySelector('.col-lg-4');
console.log(aside);

aside.style.height = '600px';

const hr = document.createElement('hr');
hr.classList.add('hr-line');

aside.appendChild(hr);

const h2 = document.createElement('h2');
h2.classList.add('new-head');
h2.innerText = 'This is my coustom head element';
aside.appendChild(h2);

const p = document.createElement('p');
p.classList.add('new-p');
p.innerText = 'Lorem ipsum dolor sit lorem5  amet consectetur adipisicing elit. Placeat, iure!';
aside.appendChild(p);

//task-2
const body = document.querySelector('body');
body.style.background = 'none';


//task-3
const btn = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.collapse');

const showIcon = ()=>{
    console.log(`hello`);
    nav.style.display = 'block';
}

btn.addEventListener('click',showIcon);