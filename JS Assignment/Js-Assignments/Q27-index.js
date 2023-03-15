// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let num = 0; num <= 100; num++) {
  if (isPrime(num)) {
    console.log(num);
  }
}
