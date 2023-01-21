// for in loop
let userName = {
    firstname : "soumya ranjan",
    lastname : "mahanta",
    role: "admin",
    loginCount:"25",
};


for(let x in userName){
    console.log(x); // it print the keys of an objects
    console.log(userName[x]);

}

