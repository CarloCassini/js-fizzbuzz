# Consegna

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

## Consigli del giorno:

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

## BONUS 1:

Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

## BONUS 2:

Applica stili differenti agli elementi aggiunti al DOM nel _BONUS 1_, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## svolgimento:

- creo una variabile per scrivere il valore da dare in output ( scriviValore)
- eseguo un clclo da 1 a 100

  - verifico la variabile del contatore ( i )

    -**se** i è multiplo di 3 scrivo Fizz in scriviValore

    -**se** i è multiplo di 5 scrivo buzz in scriviValore

    -**se** i è sia multipo di 3 e di 5 scrivo FizzBuzz in scriviValore

    -**altrimenti** scrivo il valore di i in scriviValore

  - stampo in console il scriviValore
