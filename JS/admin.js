// Constructor para los objetos Game
class Game {
  constructor(name, genre, platform, image) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
    this.image = image;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const gameForm = document.querySelector("#game-form");
  const editForm = document.querySelector("#edit-form");
  const gameTable = document.querySelector("#game-table tbody");

  let editIndex = null;

  // Load games from localStorage
  function loadGames() {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    gameTable.innerHTML = "";

    games.forEach((game, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${game.image}" alt="${
        game.name
      }" class="img-thumbnail" style="width: 60px;"></td>
                <td>${game.name}</td>
                <td>${game.genre}</td>
                <td>${game.platform}</td>
                <td>
                    <button class="btn btn-success me-2" data-index="${index}" onclick="viewGame(${index})">Ver</button>
                    <button class="btn btn-warning me-2" data-index="${index}" onclick="editGame(${index})">Editar</button>
                    <button class="btn btn-danger" data-index="${index}" onclick="deleteGame(${index})">Borrar</button>
                </td>
            `;
      gameTable.appendChild(row);
    });
  }

  // Save game to localStorage
  function saveGame(game) {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    games.push(game);
    localStorage.setItem("games", JSON.stringify(games));
    loadGames();
  }

  // Update game in localStorage
  function updateGame(index, updatedGame) {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    games[index] = updatedGame;
    localStorage.setItem("games", JSON.stringify(games));
    loadGames();
  }

  function deleteGame(index) {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    games.splice(index, 1);
    localStorage.setItem("games", JSON.stringify(games));
    loadGames();
  }

  gameForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#game-name").value;
    const genre = document.querySelector("#game-genre").value;
    const platform = document.querySelector("#game-platform").value;
    const image = document.querySelector("#game-image").value;

    const newGame = new Game(name, genre, platform, image);
    saveGame(newGame);

    gameForm.reset();
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#addGameModal")
    );
    modal.hide();
  });

  editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#edit-name").value;
    const genre = document.querySelector("#edit-genre").value;
    const platform = document.querySelector("#edit-platform").value;
    const image = document.querySelector("#edit-image").value;

    const updatedGame = new Game(name, genre, platform, image);
    updateGame(editIndex, updatedGame);

    editForm.reset();
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#editGameModal")
    );
    modal.hide();
  });

  loadGames();

  window.editGame = function (index) {
    editIndex = index;
    const games = JSON.parse(localStorage.getItem("games")) || [];
    const game = games[index];

    document.querySelector("#edit-name").value = game.name;
    document.querySelector("#edit-genre").value = game.genre;
    document.querySelector("#edit-platform").value = game.platform;
    document.querySelector("#edit-image").value = game.image;

    const editModal = new bootstrap.Modal(
      document.querySelector("#editGameModal")
    );
    editModal.show();
  };

  window.deleteGame = function (index) {
    if (confirm("¿Está seguro de que desea eliminar este juego?")) {
      deleteGame(index);
    }
  };

  window.viewGame = function (index) {
    const games = JSON.parse(localStorage.getItem("games")) || [];
    const game = games[index];
    alert(
      `Nombre: ${game.name}\nGénero: ${game.genre}\nPlataforma: ${game.platform}\nImagen: ${game.image}`
    );
  };
});
