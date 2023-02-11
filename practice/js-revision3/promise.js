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
  