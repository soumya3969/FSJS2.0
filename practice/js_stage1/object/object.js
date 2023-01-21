let userName = {
    firstname : "soumya ranjan",
    lastname : "mahanta",
    role: "admin",
    loginCount:"25",
};
console.log(userName.role);
console.log(userName['role']);

userName.loginCount = 61;
console.log(userName);