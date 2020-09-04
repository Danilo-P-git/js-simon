function genNumeri(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function rangeNumero (numero, min, max) {
if (numero >= min && numero <= max) {
  return true
} else {
  return false;
}
}

var arrayNumeri = []

while (arrayNumeri.length < 5) {
  var numeriGenerati = genNumeri(1,10);
  if (arrayNumeri.includes(numeriGenerati) == false) {
    arrayNumeri.push(numeriGenerati);

  }
}
console.log(arrayNumeri);

alert("Ricordati questi numeri " + arrayNumeri)




setTimeout(function() {
  var numeriInseriti = []
  var indovinato = 0;
  while (numeriInseriti.length < 5) {
    var numeroInseritoUtente = parseInt(prompt("inserisci un numero tra 1 e 10"));
    if (isNaN(numeroInseritoUtente) || rangeNumero(numeroInseritoUtente, 1 , 10) == false) {
      alert("devi inserire un numero tra 1 e 10")
    }
    else if (numeriInseriti.includes(numeroInseritoUtente)) {
      alert ("Inserisci un numero che non hai già inserito")
    }
    else {
      numeriInseriti.push(numeroInseritoUtente);
    }
  }
    for (var i = 0; i < numeriInseriti.length; i++) {
      if (arrayNumeri.includes(numeriInseriti[i])) {
        indovinato++;
      }
    };
    console.log(numeriInseriti);
    console.log(indovinato);
    alert("il tuo punteggio è " + indovinato);
}, 5000)
