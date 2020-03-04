// condition
// exemple 1
if (temperature > 38) {
    alert(" patient is fever");
}

// exemple 2
if (temperature > 41 && tension > 25) {
    alert("the patient will down xd");
}

// exemple 4
if (temperature > 42 || (tension < 25 && pouls >180)) {
    alert("prevent family");
}

// exemple 5
if (temperature > 40 || tension >= 25) {
    alert("hospital patient");
}

// exemple 6
if (patient && pouls == 0) {
    alert("call piest");
}

// Parité
var n = window.prompt("tapper un nombre");
if (n%2 == 0) {
    console.log(n + " est paire");
}
else {
    console.log(n + " est inpaire");
}
