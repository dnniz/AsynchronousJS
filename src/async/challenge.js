const fetchData = require("../utils/fetchData");

let API = "https://rickandmortyapi.com/api/character/";

const getData = async (url_api) => {
  const data = await fetchData(url_api);
  const character = await fetchData(`${API}${data.results[0].id}`);
  const origin = await fetchData(`${character.origin.url}`);

  console.log("[*]Total personajes:", data.info.count);
  console.log("[*]Nombre personaje:", character.name);
  console.log("[*]Nombre dimensión:", origin.dimension);
};

console.log("AFTER");
getData(API);
console.log("BEFORE");
