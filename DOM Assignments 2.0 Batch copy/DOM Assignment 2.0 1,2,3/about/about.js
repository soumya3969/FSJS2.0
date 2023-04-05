let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// task 1
// add a new append as FAQ

function  newFAQ(name, description){
  let accordianWrapper = document.querySelector(".accordian-wrapper");

  let newDiv = document.createElement("div");
  newDiv.className = "accordian"
  newDiv.innerHTML = `<h3>${name}</h3> <p>${description}</p>`;

  accordianWrapper.appendChild(newDiv);
}

newFAQ("Skills","I posses a very good command over the Full Stack Development Technologies Like MERN Which can be seen in my work over the Github");