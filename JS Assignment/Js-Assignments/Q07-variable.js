// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".
let arr = ["you","rebel","manas","pw skills","string","name","pw skills","soumya"];
console.log(arr.lastIndexOf("pw skills"));
console.log(arr.lastIndexOf("pw skills",3));


let lastIndex = arr.lastIndexOf("pw skills");
let firstIndex = arr.lastIndexOf("pw skills",lastIndex-2);

console.log(`First Index = ${firstIndex} Last Index = ${lastIndex}`);
