const someThingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("whoooops!");
    }
  });
};

// someThingWillHappen()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const someThingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

// someThingWillHappen2()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.all([someThingWillHappen(), someThingWillHappen2()])
  .then((response) => {
    console.log("Array of results:", response);
  })
  .catch((error) => {
    console.log(error);
  });
