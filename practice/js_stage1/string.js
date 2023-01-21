//strings
function URL(url, domain){
    let con = "https://";
    let result = con + url + domain;
    return result;
}
let site = URL("github",".com");
console.log(site);

//n number of parameter:=>
function Number(arr) {
    let Number = 0;
    for(let i = 0; i < arr.length;i++){
        Number =Number + arr[i];
    }
    return Number;
}

let Numberarray = [1,2,3,4,5,6,7,8,9];
let arrresult = Number(Numberarray);
console.log(arrresult);