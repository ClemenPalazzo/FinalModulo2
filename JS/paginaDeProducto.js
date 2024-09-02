console.log(window);
const parametroId = new URLSearchParams(window.location.search).get("id");

const games = JSON.parse(localStorage.getItem("games")) || [];



const gamesBuscado = games.find((juegos)=>juegos.id === parametroId)

console.log(gamesBuscado);