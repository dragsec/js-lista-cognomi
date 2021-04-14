/* 
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
 */

var lista = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var cognome = prompt("Quale è il tuo cognome?");
lista.push(cognome);

var datiFiltrati = [];
datiFiltrati.push(cognome);

lista.sort();
console.log(lista); 


var i = 0;
while (i < lista.length){
    var elementoDaAnalizzare = lista[i];

    for (var j = 0; j < datiFiltrati.length; j++){

        var elementoGiaFiltrato = datiFiltrati[j];
        var x = i+1;

        if (elementoDaAnalizzare === elementoGiaFiltrato){
            console.log(cognome + ' si trova nella posizione ' + x);
        }
    }
    i++
}

