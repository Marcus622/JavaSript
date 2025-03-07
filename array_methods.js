// JavaScript-Array
// Ein Array in einem JavaScript ist eine Datenstruktur, die mehrere Werte in einer einzigen Variablen speichern kann.
// Diese Werte können Zahlen, Strings, Objekte, Funktionen oder sogar andere Arrays sein.

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Jerry", "Mikel", "Susi"];
const arr3 = ["Lucy"];
const arr4 = ["Basine", "Mot"];

const children = arr1.concat(arr2, arr3, arr4);

console.log(children)

const ages = [32, 33, 16, 40]

function checkAdult(age) {
return age > 18;
}
const result = ages.filter(checkAdult);
console.log(result)

