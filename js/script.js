//KM
var km = parseInt(prompt('Inserisci numero chilometri:'));
console.log(km);
//ETA
var eta = parseInt(prompt('Inserisci la tua età:'));
console.log(eta);
//controllo dati
if (((isNaN(km)) || (isNaN(eta)))) {
  console.log(false);
  alert('La prossima volta scrivi i dati corretti!');
} else {
    console.log(true);
    //calcolo prezzo di base
    var prezzo = 0.21 * km;
    console.log(prezzo);
    //eccezioni e stampa
    if (eta<18) {
      prezzo = prezzo - (prezzo/100)*20;
      prezzo = Math.round(prezzo*100)/100;
      console.log(prezzo);
      document.getElementById('biglietto').innerHTML= 'Sei minorenne, devi pagare: ' + prezzo + '$';
    } else if (eta>=65) {
      prezzo = prezzo - (prezzo/100)*40;
      prezzo = Math.round(prezzo*100)/100;
      console.log(prezzo);
      document.getElementById('biglietto').innerHTML= 'Sei anziano, devi pagare: ' + prezzo + '$';
    } else {
      document.getElementById('biglietto').innerHTML= 'Devi pagare: ' + prezzo + '$';
    }
}
