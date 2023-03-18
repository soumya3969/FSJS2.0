const circleDiv = document.getElementById("circle");

document.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const x = event.clientX - (circle.offsetWidth/2);
  const y = event.clientY - (circle.offsetHeight/2);
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circleDiv.appendChild(circle);
  circle.style.display = "block";
});
