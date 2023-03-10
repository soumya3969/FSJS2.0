// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now

const so = new Date();
console.log(so.getFullYear()); //2023
console.log(so.getMonth()); //2 (march)
console.log(so.getDay()); //4
console.log(so.getHours()); //20
console.log(so.getMinutes()); //44
console.log(so.getDate()); //9
console.log(Math.round(so.getTime()/1000)); //1678374847