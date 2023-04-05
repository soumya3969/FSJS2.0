// Task 1
// create a new link for hire me at navbar
let ul = document.querySelector("header nav ul");
let li = document.createElement("li");
li.innerHTML = `<a href="#" >Hire Me</a>`;
ul.appendChild(li);

// Task 2
// Change the Search bar placeholder to Search my Projects
let searchBar = document.querySelector(".search-field input");
searchBar.placeholder = "Search my Projects";


// task 3
// change some details in description
let span = document.querySelectorAll(".hero-left-section p span");
// console.log(span);
span[1].innerText = "an Employee";
span[2].innerText = "Ineuron Intelligence Pvt Ltd";

// Task4
// change the avatar of the Hero Section:
let img = document.querySelector(".hero-right-section img");
img.src ="./Hitesh-sir.jpg";

// Task 5
// Add a new Button to the hero-right section As "support me"
let btns = document.querySelector(".hero-right-section-btns");
let nBtn= document.createElement("button");
nBtn.innerText="Support me";
btns.appendChild(nBtn);


