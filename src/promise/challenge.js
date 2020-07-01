const fetchData = require("../utils/fetchData");

let API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((response) => {
    console.log("[*]Total personajes:", response.info.count);
    return fetchData(`${API}${response.results[0].id}`);
  })
  .then((response) => {
    console.log("[*]Nombre personaje:", response.name);
    return fetchData(`${response.origin.url}`);
  })
  .then((response) => {
    console.log("[*]Nombre dimensión:", response.dimension);
  })
  .catch((error) => {
    console.log(error);
  });
