function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    callback();
  }, 3000);
}

function printDate() {
  console.log(new Date());
}

date(printDate);
