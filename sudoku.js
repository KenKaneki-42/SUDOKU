let numSelected = null;
let titleSelected = null;

var erros = 0;

let board = [
  "--74916-5", // première ligne
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--47---"
]

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763"
]

// load the game

window.onload = function(){
  setGame();
}

// fonction pour créer l'environnement
function setGame(){
  // création des chiffres(digits) de 1 à 9
  for (let i = 1; i <=9; i++){
    // création de div
    let number = document.createElement("div");//<div></div>
    number.id = i; //<div id="1"></div>
    number.innerText = i; //<div id="1">1</div>
    number.classList.add("number") //<div id="1" class="number">1</div>
    // ajout à la div digit
    document.getElementById("digits").appendChild(number);
  }

  // création du tableau 9x9
  for (let row = 1; row <= 9; row++) {
    for(let column = 1; column <= 9; column++) {
      let tile = document.createElement("div"); //<div></div>
      tile.id = row.toString() + "-" + column.toString(); //<div id="1-1"></div>
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

//fonction pour griser le chiffre séléctionné
function selectedNumber(){
  numSelected = this;
  numSelected.classList.add("number-selected");
}

//fonction pour séléctioner une tuile
