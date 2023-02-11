// Map, Filter And Reduce
// primise and fetch api
// weather app

// map=> iterate over array and perform a action on all the values
// filter
// reduce => single value

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums = numbers.map((val) => val * 5);
console.log(nums);

const count = ["india", "Finland", "Silanka", "ireland"];
const countr = count.filter((val) => val.includes("land"));
console.log(countr);

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = num1.reduce((acc, cur) => acc + cur, 1);
console.log(sum);

// promise
const makePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrone = ["HTML", "CSS", "javascript", "Tailwind"];
    if (arrone.length > 0) {
      resolve("completed");
    } else {
      reject("Incomplete");
    }
  }, 2000);
});

makePromise
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });



//    Fetch API
const url = "https://restcountries.com/v2/all";

fetch(url).then((response) => response.json()).then((data)=>console.log(data)).catch((error) => console.log(error));