// Calculette
var x = parseInt(window.prompt("saisir un nombres"));
var y = parseInt(window.prompt(" saisir un nombre"));
var op = window.prompt("tapez un opérateur");
var resultat = 0;
switch (op) {
    case "+":
        resultat = x + y;
        alert(resultat);
        break;
    case "-":
        resultat = x - y;
        alert(resultat);
        break;
    case "*":
        resultat = x * y;
        alert(resultat);
        break;
    case "/":
        resultat = x / y;
        if (y == 0) {
            alert("erreur");
            break;
        }
        alert(resultat);
        break;
};