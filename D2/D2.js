/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 10
let y = 3

if (x>y)
{
  console.log("x > y")
}
else{
  console.log("y > x")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x2 = 6

if (x2 !== 5){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x3 = 10

if (x3 % 5 === 0)
{
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 
  oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x4 = 3
let y4 = 8

if (x4 === 8 || y4 === 8)
{
  console.log("uno dei due valori è uguale ad 8")
}
else if (x4 + y4 === 8){
  console.log("la loro somma è 8")

}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart
let checkout

if (totalShoppingCart > 50)
{
  checkout = totalShoppingCart
}
else{
  checkout = totalShoppingCart + 10
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let blackFridayDiscount = 20
totalShoppingCart = totalShoppingCart  * (100 - blackFridayDiscount) /100

if (totalShoppingCart > 50)
{
  checkout = totalShoppingCart
}
else{
  checkout = totalShoppingCart + 10
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 20
let b = 52
let c = 150

if (a > b){
  if (b > c){
    console.log("Ordine crescente = ",a," ",b," ",c)
  }
  else 
  {if (a > c){
    console.log("Ordine crescente = ",a," ",c," ",b)
  }
  console.log("Ordine crescente = ",c," ",a," ",b)
  }}
else { 
  if(b > c){
    if (a > c)
    console.log("Ordine crescente = ",b," ",a," ",c)
    else
    console.log("Ordine crescente = ",b," ",c," ",a)
  }
  else
  console.log("Ordine crescente = ",c," ",b," ",a)
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val8 = 5

if (typeof val8 === "number"){
console.log("il valore è un numero")
}
else console.log("il valore NON  è un numero")


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x9 = 7

if (x9 % 2 === 0)
{console.log("Pari")}
else
console.log("Dispari")


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 4
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto"

console.log("me post add city", me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log("me post delete lastName", me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.splice(-1)
console.log("me post delete skill", me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arr =[]

for (let i = 0; i < 10; i++)
{

  arr.push(i+1)
}
console.log(arr)



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// arr[arr.length-1] = 100

arr.splice(-1, 1, 100)

// arr.pop()
// arr.push(100)
console.log(arr)
