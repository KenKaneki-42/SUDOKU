function generateSudoku()
{
  // *** Iniatilisation et configuration ***
  // récupérer le nombre de cases à cacher en fonction du niveau
  var nb_case_vide = document.getElementById("niveau").value;
  // nombre maximal d'essais à faire
  var nb_max_loop = 1000;

  //Décalaration de variables
  var grille = new Array();
  var lignes = new Array();
  var colonnes = new Array();
  var carres = new Array();
  var i_while = 0;
  var grille_complete = false;

  // Vider les cases à chaque boucle
  outerwhile: // Point de référence
  while ((i_while < nb_max_loop) && !grille_complete) // Boucle tant que la grille n'est pas complète et que l'on n'a pas dépassé le maximum de boucle
  {
      i_while++; // On ajoute 1 à la boucle
      // ...
      // *** Initialisation des tableaux ***
      for (var i = 1; i <= 9; i++)
      {
          grille[i] = new Array(); // On crée chaque ligne de la grille
          lignes[i] = new Array(); // On crée un array pour les lignes
          colonnes[i] = new Array(); // On crée un array pour les colonnes

          for (var j = 1; j <= 9; j++)
          {
              grille[i][j] = 0; // On passe toutes les cases à 0
              lignes[i][j] = j; // On complète toutes les possibilités de la ligne
              colonnes[i][j] = j; // On complète toutes les possibilités de la colonne
          };
      };

      for (var i = 1; i <= 3; i++)
      {
          carres[i] = new Array(); // On crée les trois lignes de carrés

          for (var j = 1; j <= 3; j++)
          {
              carres[i][j] = new Array(); // On crée les trois colonnes de carrés dans chaque ligne de carré
              for (var k = 1; k <= 9; k++)
              {
                  carres[i][j][k] = k; // Et on associe à chaque carré toutes les possibilités de lignes et de colonnes
              };
          };
      };

      // *** Calculs ***
      // calculs cases par cases. Faire une boucle pour les lignes (y), suivie d'une boucle pour les colonnes (x) :
      for (var y = 1; y <= 9; y++)
      {
          for (var x = 1; x <= 9; x++)
          {
            var possibilites = new Array();
            var index = 0;

            for (var k = 1; k <= 9; k++)
            {
                if (!lignes[y][k]) continue;
                if (!colonnes[x][k]) continue;
                if (!carres[Math.ceil(y/3)][Math.ceil(x/3)][k]) continue;

                possibilites[index] = k;
                index++;
            };
          };
      };
      grille_complete = true; // condition de fermeture de la boucle while
  };

  //*** Création de la grille ***
    if (grille_complete)
  {
    //+ Jonas Raoni Soares Silva
    //@ http://jsfromhell.com/array/shuffle [rev. #1]
    function shuffle(array)
    {
        for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array* = array[j], array[j] = x);
        return array;
    };

    var cases_a_vider = new Array();

    for (var i = 1; i <= 81; i++)
    {
        if (i <= nb_case_vide) cases_a_vider* = true;
        else cases_a_vider* = false;
    }

    cases_a_vider = shuffle(cases_a_vider);
  }
  else
  {
      var today = new Date;

      document.getElementById("resultat").style.display = 'none';
      document.getElementById("erreur").style.display = 'block';
      document.getElementById("erreur").innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " : Echec apr&egrave;s " + nb_max_loop + " tentatives.";
  }

  // *** afficher le résultat sous forme de tableaux ***
  var html = "<table cellpadding='0'><tbody>";
  var html_enonce = "<table cellpadding='0'><tbody>";
  var count = 0;

  for (var y = 1; y <= 9; y++)
  {
      html += "<tr>";
      html_enonce += "<tr>";

      for (var x = 1; x <= 9; x++)
      {
          count++;

          html += "<td>" + ((cases_a_vider[count]) ? '<span class="red">' + grille[y][x] + '</span>' : grille[y][x]) + "</td>";
          html_enonce += "<td" + ((cases_a_vider[count]) ? ' class="vide">&nbsp;' : '>' + grille[y][x]) + "</td>";
      };

      html += "</tr>";
      html_enonce += "</tr>";
  };

  html += "</tbody></table>";
  html_enonce += "</tbody></table>";

  document.getElementById("grille_a_faire").innerHTML = html_enonce;
  document.getElementById("grille_solution").innerHTML = html;
  document.getElementById("resultat").style.display = 'block';
document.getElementById("erreur").style.display = 'none';

};

function AjoutOptionAuSelect(this_select)
{
    if (this_select.value == "autre")
    {
        var saisie;
        var pass = false;
        do
        {
            if (pass) alert("La valeur est incorrecte. Elle ne doit comporter que des chiffres.");
            saisie = prompt("Nombre de cases vides :");
            if (saisie == null) return false;
            pass = true;
        }
        while (saisie.match(/[^0-9]/i) && saisie != "")

        this_select.options[this_select.length] = new Option(saisie + ' case' + (saisie > 1 ? 's' : '') + ' vide' + (saisie > 1 ? 's' : ''), saisie, true, true);

        for (var i=0; i < this_select.options.length; i++)
        {
            if (this_select.options*.value == saisie)
            {
                this_select.options*.selected = true;
            }
        }
    }
};
