let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fechData(url_api, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fechData(API, (error1, data1) => {
  if (error1) return console.log(eror1);
  fechData(API + data1.results[0].id, (error2, data2) => {
    if (error2) return console.log(error2);
    fechData(data2.origin.url, (error3, data3) => {
      if (error3) return console.log(error3);
      console.log("Total personajes:", data1.info.count);
      console.log("Nombre personaje:", data2.name);
      console.log("Nombre dimensión:", data3.dimension);
    });
  });
});
