/* razof premier/duo  * 185 forgeront
dantintea, koutulu 300 * 1 chasseur
reine, vortex 300 * 1 chasseur
darak premier, liberté, duo 300
solar = donjo ocre */

/* Créer un script qui demande successivement à l'utilisateur son nom puis son prénom.
La page demande ensuite à l'utilisateur s'il est un homme ou une femme.
Enfin, la page affiche les informations sur l'utilisateur. */
var a = window.prompt("tapez votre nom?");
var b = window.prompt("tapez votre prenom?");
var c = window.confirm("êtes-vous un homme?");
alert("Bonjour monsieur" + " " + a + " " + b);

// opérations
let b = 100
let c = 1.00
let d = true
let a ="100"
let b = 100
let c = 1.00
let d = true
document.write(typeof a);
alert("ceci est une chaine de caractère")
b--
c = a
!c


// Age
var year = 2000;
var y = window.prompt("what is your year?");
if (y <= year) {
    alert("you major");

}
else {
    alert("you minor");
}


var n1 = prompt("tapez un entier");
var n2 = prompt("tapez un entier");
var resultat 
while (n1 < n2) {
    n1++
    resultat = resultat + n1;
    alert(resultat);
}
if (n1 > n2) {
    alert("erreur");
}