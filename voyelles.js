// voyelle
var vowel = ("a, e, i, o ,u y") 
var vowel = "a, e, i, o, u, y"
var userKeybor = prompt("tappez un mot");
var lettre = userKeybor.substr(0,1);
var i = 0
alert(userKeybor.length); 

var table = [];
var cur_value = 5;
while (cur_value != 0) {
    cur_value = parseInt(window.prompt("saisissez un nombre :"));
    table.push(cur_value);
}
var length = table.length;
var sum = table.reduce((a, b) => a + b);
var mean = sum / length;
alert("nombre de valeurs saisies : " + length + "\nsomme : " + sum + "\nmoyenne : " + mean);

var bidulechouette = prompt("tapez un nombre");
var positionIndex = 0
var nombreVoyelles = positionIndex
while (positionIndex  < bidulechouette.length) {
    alert(bidulechouette.substr(positionIndex,1));
    positionIndex++
}
lettre = "w"
if (lettre == "a" || lettre == "e" || lettre ==  "i" ||lettre ==  "o" || lettre == "u" ||lettre == "y") {
   var lettre = bidulechouette.substr(positionIndex,1);}
else {
    alert("w n'est pas une voyelle !");
}
if (vowel.includes(lettre)) {
    alert("w est une voyelle ! ");
    }
    else {
    alert("w n'est pas une voyelle");
    }