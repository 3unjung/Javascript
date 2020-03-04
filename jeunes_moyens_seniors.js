// Calcul du nombre de jeunes, de moyens et de seniors
i = 0;
j = 0;
k = 0;
do
{
    n = prompt("entrez un âge/La saisis s'arrête lors d'un centenaire");
    if (n <= 20) {
        i++;
    }

    else if (n >= 40) {
        j++;
    }

    else if (n >= 20 && n <= 40) {
        k++;
    }
} while ( n <100);
alert("il y'a " + " " + i + " " + "de jeune(s)," + " " + k + " " + "de moyen(s)," + " " + "senior(s), et un centenaire.");