// task - 1
const newNavBtn = document.createElement('a');
newNavBtn.classList.add('btn');
newNavBtn.href = '#';
newNavBtn.innerText = 'Pro Subscription';


const navBtn = document.querySelector('#navBtn');
navBtn.appendChild(newNavBtn);


// task - 2
const tagContainer = document.querySelector('.tags-container div');
const newTag = document.createElement('a');
newTag.href = '#';
newTag.innerText = 'Chinese(7)';

tagContainer.appendChild(newTag);

// task - 3
const recipeName = document.querySelectorAll('.recipe-name');
recipeName.forEach((val)=>{val.style.color = '#5555f4'});

const recipeDisp = document.querySelectorAll('.recipe-disp');
recipeDisp.forEach(val => val.style.color = '#4a4ae8');