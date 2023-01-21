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


function sr(){
    // arguments
    // console.log(arguments);
    let sum2 = 0;
    for(let i = 0; i < arguments.length;i++){
        sum2 = sum2 + arguments[i];
    }
    return sum2;
}

// sr(7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(sr(7, 8, 9, 10, 11, 12, 13, 14, 15));




// => Arrow (it will become function automatically)