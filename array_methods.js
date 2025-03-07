// JavaScript-Array
// Ein Array in einem JavaScript ist eine Datenstruktur, die mehrere Werte in einer einzigen Variablen speichern kann.
// Diese Werte können Zahlen, Strings, Objekte, Funktionen oder sogar andere Arrays sein.
// ein Array wird nit eckigen Klammern [] erstellt. Eine andere Möglichkeit ist der Array()-Konstruktor.
// Eigenschaften: Arrays haben einen Indexwert beginnend bei 0.
// Man kann auf Elemente mit array[index] zugreifen
// Arrays haben viele eingebaute Methoden wie push(), pop(),filter() usw.
// Mit dem Schlüsselwort const() wird eine wird eine Konstante deklariert, d.h. eine Variable, deren Wert nicht neu
// zugewiesen werden kann.


// .concat() Methode

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Jerry", "Mikel", "Susi"];
// const arr3 = ["Lucy"];
// const arr4 = ["Basine", "Mot"]; // Es werden vier arrays erstellt. Jedes enthält eine Liste von Namen als Strings.

// const children = arr1.concat(arr2, arr3, arr4); // Die concat()-Methode kobiniert arr1, arr2, arr3 und arr4 zu einem
// // neuen array, wobei arr1 unverändert bleibt, da concat() eine Kopie erstellt.

// console.log(children) // Gibt das neue kombinierte Array in der Konsole aus.



// .filter() Methode
// Die .filter() Methode erwartet eine Callback-Funktion, die für jedes Element des Arrays ausgeführt wird.
// Diese Funktion gibt True zurück, wenn das Element in das ner5e Array aufgenommen werden soll. oder false, wenn nicht.
// Das ursprüngliche Array wird dadurch nicht verändert. Stattdessen wird ein neues Array zurückgegeben.

// const ages = [32, 33, 16, 40]

// function checkAdult(age) {   // Die Funktion checkAdult() nimmt einen Wert age als Eingabe. Sie gibt true zurück, 
// return age > 18;             // wenn age > 18 ist, ansonsten false. Diese Funktion wird als Kriterium für .filter() verwendet. 
// }
// const result = ages.filter(checkAdult); // .filter(checkAdult) durchläuft jedes Element in ages.
// // für jedes Element wird checkAdult(age) aufgerufen.
// console.log(result)  // Das ergebnis (result) ist ein neues Array mit den Werten. die die Bedingungen erfüllen.



// .findIndex()
// Die Methode .findIndex() sucht in einem Array nach dem Index, des ersten Elementes, das eine bestimmte Bedingung 
// erfüllt. Sie gibt den Index (Position) der ersten passenden Elements zurück. Gibt -1 zurück, wenn keines gefunden
// wird. Ähnlich wie bei .find(). aber anstatt des Wertes wird der Index zurückgegeben.

const ages = [3, 10, 18, 20, 27]


function checkAge(age) {     // function nimmt Zahl age als Eingabe und ist ein Filterkriterium für .findIndex().
    return age > 20          // gibt true zurück, wenn age > 20, sonst false.
}
const result = ages.findIndex(checkAge);  // Durchläuft jedes Element im ages-Array und prüft es mit checkAge.
// Gibt den Index des ersten Elementes zurück, das die Bedingung age > 20 erfüllt.

console.log(result) // Gibt den Index 4 in der Konsole aus.