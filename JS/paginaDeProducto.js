
const parametroId = new URLSearchParams(window.location.search).get("id");
console.log(parametroId);
const games = JSON.parse(localStorage.getItem("games")) || [];



const gamesBuscado = games.find((juegos)=>juegos.id === parametroId)

console.log(gamesBuscado);