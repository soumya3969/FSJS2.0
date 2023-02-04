// function
// normal function
// function with return type and parameters
// amonymous function
// expression Function
// self Invoking function

// how to declaire a object
let userdetails = {
    firstname:"soumya",
    lastname:"mahanta",
    courselist:[],
    website:"http://github.com/soumya3969",
    buycourse: function(course){
        this.courselist.push(course);
    },
};
// console.log(userdetails);
userdetails.buycourse("FSJS");
console.log(userdetails);