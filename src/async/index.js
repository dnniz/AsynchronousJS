const doSomeThing = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("READY");
        }, 3000)
      : reject(new Error("Error"));
  });
};

const doSomeThingAsync = async () => {
  try {
    const doSome = await doSomeThing();
    console.log(doSome);
  } catch (error) {
    console.Error(error);
  }
};

console.log("AFTER");
doSomeThingAsync();
console.log("BEFORE");
