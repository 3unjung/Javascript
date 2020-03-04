console.log("Bonjour en javascrip !");
// Commentaire
/* Un commentaire
sur plusieurs
lignes */




let a; // déclaration de la varriable nomé a ( anciennement var)
a = 3.14; // Affectation de la valeur 3.14 à la varriable nomé a
console.log(a);

const a = 3.14; //déclaration d'une varriable constante
a = 6.28; //Impossible : a ne peut pas changer de valeur!


// Incrémentation

let b = 0 // b contient 0
b += 1; // b contient 1
b++; /* b contient 2 
( ++ est appeller opération d'incrémentation 
car il permet d'incrémenter ( augmenter de 1) 
la valeur d'une varrible) */
console.log(b) // 2

let num1 = 0;
{ 
    num1 = 1; // ok : num1 est déclaré dans le bloc parent
    const num2 = 0;
}
console.log(num1); // 1
console.log(num2); // erreur : num2 n'est pas visible ici !


// Expression
const c = 3; // 3 est une expression dont la valeur est de 3
let d = c; // d est une expression dont la valur est celle de c (3 ici)
d = d +1; // (d +1) est une expression dont la valeur est celle de d + 1 (4 ici)
console.log(d); // 4

/* en abscence de paranthèses, la priorité des opérateurs
est la même que en mathématique */
 let e = 3 + 2 * 4 // e contient 11 (3+8)
 e = (3+2)*4; // e contient 20 (5*4)

 const country = "france";
 console.log(`Je vis en ${country});`) // " je vis en france)"

 const x = 3;
 const y = 7;
 console.log(`$(x) + $(x + 7)`); // "3 + 7 = 10"
 

 // Conversions de type
const f = 100;
console.log("f contient " + f); // " f contient 100"

const g = "cinq" * 2;
console.log(g); // NaN ( not a number)


// Interactions avec l'utilisateur
// création d'une boîte de dialogue avec l'exécutation prompt(" Votre prénom :")
/* La valeur saise dans la première boîte de dialogue est stockéée dans
une variable de type chaïne nommée << prenom >>. Ensuite, l'instruction alert()
déclenche l'affichage de la seconde boîte, contenant le résultat de la 
concaténation de la chaïne "bonjour" avec la valeur de la variable << prenom >> */
const prenom = prompt(" Votre prénom :");
alert(`Bonjour, ${Prenom}`);

// Condition

/* Algorithme qui demande une saisie d'un nombre pour afficher un message
si ce nombre est positif */
/* Saisir un nombre
Si ce nombre est postif
Afficher un Message */

const nombre = Number(prompt("Entez un nombre:"));
if (nombre > 0) { // instructions exécutées quand la condition est vraie
    console.log(nombre + "est positif");
}
else {
    console.log(nombre + " est négative ou nul");
}


if (condition) {
    // instructions exécutées quand la condition est vraie
}
else {
    //instructions exécutées quand la condition est fausse
}
/* On peut traduire par
"si la condition est vraie"
alors éxécute les instructions du bloc de code associé au <<if>>
sinon éxécute celles du bloc de code associé au <<else>> */

const nombre = number(prompt("entre un nombre"));
if (nombre > 0) {
    console.log(nombre + " est positif");
}
else { // nombre <= 0
    if (nombre < 0) {
        console.log(nombre + " est négatif");
    }
    else { // nombre === 0
        console.log(nombre + " est nul");
    }
}
// Algorithme vérification 0<= nombre<=100 
if ((nombre >= 0) && (nombre <= 100)) {
    console.log(nombre +" est compris entre 0 et 100");
}
// opérateur logique ET
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
// table de vérité de l'opérateur &&

// opérateur logique OU
if ((nombre < 0) || (nombre >100)) {
    console.log(nombre + " est en dehors de l'intervalle de  [0, 100]");
}
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || true); //true
console.log(false || false); //false

// opérateur logique non
if (!(nombre >100)) {
    console.log(nombre + "est inférieur ou éal à 100");
}
console.log(!true); //false
console.log(!false); //true


// Programme qui conseille à l'utilisateur sur la tenue à porter /F= méteo
const meteo = prompt("quel temps fait-il dehors?");
if (meteo === "soleil") {
    console.log("sortez en t-shirt");
} else if (meteo === "vent") {
    console.log("sortez en pull");
} else if (meteo === "pluie") {
    console.log("sortez en blouson");
} else if (meteo === "neige") {
    console.log("ne sortez pas!");
} else {
    console.log("Je n'ai pas compris !");
}

// en utilisant l'instruction js switch
const meteo = prompt('quel temps fait-il dehors?');
switch (meteo) {
    case "soleil":
        console.log("sortez en tshirt");
        break; // instruction break; évite de passer d'un bloc à un autre
    case " vent":
        console.log("sortez en pull");
        break;
    case "pluie":
        console.log("sortez en blouson");
        break;
    case "neige":
        console.log("ne sortez pas!");
        break;
    default:
    console.log("Je n'ai rien compris")
}

// Répétez des instructions
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
//Avec la boucle << while >>
console.log("début du programme");
let nombre = 1;
while (nombre <= 5); {
    console.lo(nombre);
    nombre++;
}
while (condition) {
// instructions exécutées tant que la condition est vérifiée
}
console.log("fin du programme");
// avec la boucle << for >>
let computeur;
for (computeur = 1; computur <= 5; computeur++) {
    console.log(computeur);
}
for (initialisation; condition; étape) {
// instructions exécutée tant que la boucle vérifiée
}


// fonction
/* 
Début
    Sortir une casserole
    Mettre de l'eau dans la casserole
    mettre la casserole sur le feu
    Tant que l'eau ne bout pas
        Attendre
    Verser les pâtes dans la casserole
    Tant que les pâtes ne sont pas cuites
        Attendre
    Verser les pâtes dans une passoire
    Remuer la passoire pour faire couler l'eau
    Remettre les pâtes dans la casserole
    Goûter
    Tant que les pâtes sont trop fades
        Ajoutez du sel
        Goûter
    Si on préfère le beurre à l'huile
        Ajouter du beurre
    Sinon
        Ajouter de l'huile
Fin

Début
    Faire bouilir de l'eau
    Cuire les pâtes dans l'eau
    Egoutter les pâtes
    Assaisonner les pâtes
Fin
*/

function direbonjour() {
    console.log("bonjour !");
}

console.log("debut du programme");
direbonjour();
console.log("fin du programme");

// déclaration d'une fonction nommée maFonction
function maFonction() {
    // instructions de la fonction
}

// ...
maFonction(); // appel de la fonction maFonction
// ...

function direBonjour() {
    return "bonjour!";
}
console.log("début du programme");
const resultat = direBonjour();
console.log(resultat); //" Bonjour !"
console.log("fin du programme");

// paramètre
function direBonjour(prenom) {
    const message = `Bonjour, ${prenom} !`;
    return message;
}

console.log(direBonjour("Margaux")); //"bonjour, margaux !"
console.log(direBonjour("florian")); //"bonjour, florian !"

// déclaration de la focntion mFonction
function maFonction(param1, param2, ...) {
    // instructions pouvant utiliser param1, param2, ...
}

// appel de la fonction maFonction
//param1 reçoit la valeur de arg1, pram2 la valeur de arg2, ...
maFonction(arg1, arg2, ...);

function direBonjour(prenom) {
    // ici prenom est le paramètre de la fonction
    const message = `Bonjour, ${prenom} !`;
    return message;
}

// ici prenom est une variable utilisée comme argument
let prenom = "margaux";
console.log(direBonjour(prenom)); //bonjour, margaux!
prenom = "florian";
console.log(direBonjour(prenom)); //bonjour, florian!

//fonction anonyme
// afectation d'une fonction anonyme à la variable maVariable
const maVariable = function(param1, param2, ...) {
    // instructions pouvant utiliser param1, param2, ...
}

// appel de la fonction anonyme
//param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);


// objets
const stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "bic"
};
// modification de la proprieté "couleur"
stylo.couleur = "rouge";

// ajout de la proprieté "prix"
stylo.prix = "2.5";

// mon stylo coûte 2,5 euro
console.log(`Mon stylo coûte ${stylo.prix} euros`);

console.log(stylo.type); //bille
console.log(style.couleur); //bleu
console.log(stylo.marque); // bic
// j'écris avec un stylo bille rouge de marque bic
console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);

// création personnage
const eunjung = {
    nom: " eunjung",
    sante: 3500,
    force: 400
};

// eunjung a 3500hp et 500fo
console.log(`${eunjung.nom} a ${eunjung.sante} point de vie et ${eunjung.force} de force`);
console.log("eunjung est blessée par une flèche");
eunjung.sante = eunjung.sante -20;
console.log("eunjung équipe grife rose");
eunjung.force = eunjung.force + 60;

// eunjung a 3500hp et 560 de force
console.log(`${eunjung.nom} a ${eunjung.sante} points de vie et ${eunjung.force} de force`);

const eunjung = {
    nom: " eunjung",
    sante: 3500,
    force: 400
};

// renvoie la description du personnage
function decrire(personnage) {
    return `${personnage.nom} a ${personnage.sante} point de vie et ${personnage.force} de force`;
}
// eunjung a 3500hp et 560 de force
console.log(decrire(eunjung));


const eunjung = {
    nom: "eunjung",
    sante: "3500",
    force: "400"
}
// renvoie la description du personnage
decrire() {
    return `${$this.nom} a ${this.sante} point de vie et ${this.force} en force`;
}

// tableau
const films = ["pearl harbor", "titanic", "ninja assassin"];
console.log(films.length); //3
console.log(films[0]);
console.log(films[1]);
console.log(films[2]);


// manipulation string
console.log("Je t'aime toi qui lit".length);

const mot = "koala";
const longueurMot = mot.length;
console.log(longueurMot);

const chaine = "azerty";
console.log(chaine === "azerty");
console.log(chaine === "qwerty");


const prenom = "margaux";
for (let i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);  
    // Machaine i renvoit le premier caractère de ma chaine
}

// .........
// description du personnage
const eunjung = {
    nom: "eunjung",
    sante: 3500,
    force: 400,
    xp: 100,

// renvoie la description du personnage
descrire() {
    return `${this.nom} a ${this.sante} hp, ${this.force} et ${this.xp} %xp`;
}
};

// eunjung a 350hp 400force et 100% xp
console.log(eunjung.decrire());

console.log("eunjung lance vitalité");
eunjung.sante += 1200;

if(prompt(julien_masturbe_his_dick = true && (julien = cum))){
    alert("prendre une video");
    alert("le rejoind")
    alert("suce")
    alert("mouille")
}
else {
    alert("part")
}

let eunjung = prompt("elle mouille?")
if(eunjung = true){
    alert("donne lui plus d'envie");
    alert("masse ses seins");
    alert("frotte ton gland contre son clitoris")
} else if(eunjung = false)
    alert("t'es nul");