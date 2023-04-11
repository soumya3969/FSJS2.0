const all_lang_name = document.querySelectorAll(".main__languages a");

const all_lang_arr = [...all_lang_name];

all_lang_arr.forEach((ele) => {
   return ele.textContent.includes("2.0")? ele.style.display = "none":``;
});



const input = document.querySelector(".main__form-input");
input.removeAttribute("disabled");
input.setAttribute("placeholder","iNeuron");

const submit = document.querySelector(".main__form-btn");
submit.removeAttribute("disabled");


const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
   for(let ele of all_lang_arr){
      if (ele.textContent.includes("2.0")) {
         ele.style.display = "inline";
      }
   }
   input.value  = "";
   e.preventDefault();

});
