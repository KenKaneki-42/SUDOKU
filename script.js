function generateSudoku()
{
    // @TODO
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
