// 22. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find median age
const middleIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
  medianAge = ages[middleIndex];
}

// Find average age
const sumAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumAges / ages.length;

// Find range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average)
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
let comparison;
if (diffMinAvg > diffMaxAvg) {
  comparison = "min - average is greater";
} else if (diffMinAvg < diffMaxAvg) {
  comparison = "max - average is greater";
} else {
  comparison = "Both are equal";
}

// Log the results
console.log(`Sorted Ages: ${ages}`);
console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);
console.log(`Median Age: ${medianAge}`);
console.log(`Average Age: ${averageAge}`);
console.log(`Age Range: ${ageRange}`);
console.log(`Comparison of (min - average) and (max - average): ${comparison}`);
