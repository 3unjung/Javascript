// Table de multiplication
i=0;
var n = prompt("entrez une table");
function tablemultiplication(n) {
    var table_size = 10;
    document.write("<p>");
    while (i < table_size) {
        i++;
        document.write(i + "x" + n + "=" + i*n);
        document.write("</p>");
    };
}
tablemultiplication(n);


// Table de multipliczation avec une boucle for
var n = prompt("tapez une table");
function tablemultiplication(n) {
    var table_size = 10;
    document.write("<p>");
    for (i =0; i<=10; i++){
        document.write(i + "x" + n + "=" + i*n);
        document.write("</p>");
    }
}
tablemultiplication(n);