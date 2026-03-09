/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
// Javascript lo utilizziamo per dare un valore a una variabile. Una variabile è connotata da un nome che inizia con una lettera o con un _ . I dati primitivi che troviamo in Javscript sono essenzialmente di quattro tipologia. Troviamo i numeri: possono essere anche decimali; troviamo le stringhe che contengono parole, frasi o numeri che devono essere racchiusi tra "" oppure tra ' e devono sempre essere chiuse; poi troviamo il valore undefined cioè un valore indefinito a cui nessuno ha assegnato un valore; il valore nullo è un valore a cui decidiamo volutamente di renderlo vuoto, nullo. Troviamo, inoltre, i valori booleani che assegnano un valore di true o false alla nostra variabile, per cui servono ad assegnare veridicità alla variabile. //

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const myName = "Emanuela";
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let t = 20;
let y = 12;
console.log(t + y);

let s = 2;
let e = 30;
console.log(s + e);

let xa = 20 + 10;
let ya = 2;
console.log(xa + y);

t = 30;
ys = 2;
console.log(t + ys);

let io = 5;
let lei = 7;
let noi = 4;
let voi = 16;
console.log(io + lei + noi + voi);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//const myName = Carrubba; Non posso utilizzare const per cambiare il valore assegnato in quanto si utilizza per una variabile costante, ossia non cambia nel tempo come nome, cognome o date di nascita. Per inserire il cognome dovrei, invece, dichiarare una nuova e ulteriore variabile.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2); //qui sto verificando l'uguaglianza//
console.log(name1 != name2); //qui sto dimostrando la disuguaglianza//

// Ora, essendo Javascrit case-sensitive e quindi nota la differenza tra maiuscole e minuscole proverò a trasformare entrambi i nomi in minuscolo con il metodo lowercase in modo da risultare entrambi le variabili true.//

console.log(name1.toLowerCase()); //  qui applico il metodo LowerCase ad entambi i nomi//
console.log(name2.toLowerCase());
console.log(name1.toLowerCase() === name2.toLowerCase()); //qui sto stampando nella console la dimostrazione che i due nomi sono uguali in quanto li ho resi effettivamente identici//
console.log(name1.toLowerCase() != name2.toLowerCase()); //questo è una dimostrazione extra di disuguaglianza.
