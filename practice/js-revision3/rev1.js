// Map, Filter And Reduce
// primise and fetch api
// weather app

// map=> iterate over array and perform a action on all the values
// filter
// reduce => single value


const numbers = [1,2,3,4,5,6,7,8,9];
const nums = numbers.map((val) => (val * 5));
console.log(nums);



const count = ["india","Finland","Silanka","ireland"];
const countr  = count.filter((val) => val.includes("land"));
console.log(countr);



const num1 = [1,2,3,4,5,6,7,8,9];
const sum = num1.reduce((acc, cur)=>acc + cur, 1);
console.log(sum);