/* esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
 secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
due input e un bottone
 (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) 
 sarà anch’essa da scrivere in console.


MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form
 in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
 (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.


MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando
 la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da 
seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma 
in ogni caso cercate di farla vostra.
Buona giornata, buon lavoro :saluto_vulcaniano: */


const kmElement = document.getElementById("km'user");
const ageElement = document.getElementById("age-user");
const btnElement = document.getElementById("output");
const formElement = document.getElementById("my-form");
const nameUserElement = document.getElementById("name-user");
const myForm2Value = document.getElementById("my-form-2");



formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    myForm2Value.style.display = "inline";
    let kmElementValue = parseInt(kmElement.value);
    let ageElementValue = parseInt(ageElement.value); 
    let priceForKm = 0.21;
    let totalPrice = kmElementValue * priceForKm;
    let nameUserElementValue = (nameUserElement.value);
    console.log(nameUserElementValue);

    //let totalPriceForUser = document.getElementById("total-price-for-user")

    // Verifica se kmElementValue non sia un numero

    if (isNaN(kmElementValue) || kmElementValue === '' || kmElementValue <= 0 ) {
        alert( 'Please, insert a valid number for the km, not a word, negative number or a space!' );
    } 

        // Verifica se ageElementValue non è un numero
    if (isNaN(ageElementValue) || ageElementValue === '' || ageElementValue <= 0 ) {
        alert( 'Please, insert a valid number for the age, not a word, negative number or a space!' );
        } else {
            // Controlla l'età e applica lo sconto
            if (ageElementValue <= 18) {
                totalPrice = totalPrice - (totalPrice * 20) / 100; // applico lo sconto del 20% per -18
            } else if (ageElementValue >= 65) {
                totalPrice = totalPrice - (totalPrice * 40) / 100; // applico lo sconto del 40% per gli over 65
            }
            // applico il prezzo finale in forma umana con massimo 2 decimali (per indicare i centesimi)
            totalPriceForUser = document.getElementById("total-price-for-user").innerHTML = ` ${totalPrice.toFixed(2)} €`;
            nameUserElementOutput = document.getElementById("name-user-element-output").innerHTML = `${nameUserElementValue}`;
                                               
    }
})

/*MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando
 la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da 
seguire per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma 
in ogni caso cercate di farla vostra.
Buona giornata, buon lavoro :saluto_vulcaniano: */








