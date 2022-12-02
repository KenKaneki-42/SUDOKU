let numSelected = null;
let titleSelected = null;

let errors = 0;

const solution = [
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
// step 3: générer une solution valide aléatoirement

const board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---"
]
// step 2: générer un board à partir de la solution




// load the game

window.onload = function(){
  setGame();
  console.log(board[0]);
  console.log(board[0][3]);

}

// fonction pour créer l'environnement
function setGame(){
  // création des chiffres(digits) de 1 à 9
  for (let i = 1; i <=9; i++){
    // création de div
    let number = document.createElement("div");//<div></div>
    number.id = i; //<div id="1"></div>
    number.innerText = i; //<div id="1">1</div>
    number.addEventListener("click", selectNumber);
    number.classList.add("number") //<div id="1" class="number">1</div>
    // ajout à la div digit
    document.getElementById("digits").appendChild(number);
  }

  // création du tableau 9x9
  for (let row = 0; row < 9; row++) {
    for(let column = 0; column < 9; column++) {
      let tile = document.createElement("div"); //<div></div>
      tile.id = row.toString() + "-" + column.toString(); //<div id="1-1"></div>
      // les tuiles prédéfinie avec un chiffre (start)
      if(board[row][column] != "-"){
        tile.innerText = board[row][column];
        tile.classList.add("tile-start");
      }
      if(row == 2 || row == 5){
        tile.classList.add("horizontal-ligne");
      }
      if(column == 2 || column == 5){
        tile.classList.add("vertical-ligne");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

// attention pour tager les tile bien faire gaffe qu'ils soient déjà généré
// faire de l'asynchrone des qu'une fct est terminée => lance cette fonction
// callbackhell = mauvaise pratique (fonction dans la fonction)
// étudier "les promesses" pour faire de l'asychrone proprement

// const num = document.getElementsByClassName("number");
//console.log(num);

//fonction pour griser le chiffre séléctionné
function selectNumber(){
  // si numSelected existe => si numSelected est différent de null
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

//fonction pour séléctioner une tuile et y intégrer le chiffre préselectionné
function selectTile(){
  if(numSelected){
    if(this.innerText != ""){ // si il y a une valeur dans la tuile
      return;
    }

    // check avec les coordonnées de la tuile pour y injecter le chiffre seléctionné
    // on a les id de la forme "0-0","3-6" etc
    let coords = this.id.split("-"); // on aura un array de string ["0","0"]
    console.log(coords);
    let row = parseInt(coords[0]);
    let column = parseInt(coords[1]);
    console.log(row);
    if (solution[row][column] == numSelected.id){
      this.innerText = numSelected.id;
    } else {
      errors += 1;
      console.log(errors);
      document.getElementById("errors").innerText = errors
    }
  }
}
