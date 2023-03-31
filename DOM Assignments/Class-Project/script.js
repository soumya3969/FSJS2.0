const btn= document.getElementById('btn');

let randomColor= () => {
    let val = '123456789ABCDEF';
    let cons ='#';
    for(let i=0; i<6;i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
console.log("bg",randomColor());

function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener('click',changeBgColor);


const randomBtnColor= () => {
    let val = '0123456789ABCDEF';
    let cons ='#';
    for(let i=0; i<6;i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
    console.log("btn",randomBtnColor());
};
function changeBtnColor(){
    document.getElementById('btn').style.backgroundColor = randomBtnColor();

}
btn.addEventListener('click',changeBtnColor )
