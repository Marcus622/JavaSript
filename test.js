// function rufe(text) {
//     let ruf = text + text;
//     console.log(ruf)
//     return ruf
// }
// rufe('Werder')


// function bleiben(name) {
//     return name +' bleibt '+name+'.';
// }
// let x = bleiben('Mainz');
// console.log(x)


// let anzahl = 'Franz'.length;
// console.log(anzahl);


// function laenge(s) {
//     return s.length;
// }
// console.log(laenge('Hallo Welt!'));


// let stadt = 'Flug';
// let ausgabe = stadt.toUpperCase();
// let ausgabe1 = stadt.toLowerCase();
// console.log(ausgabe);
// console.log(ausgabe1);


// function toCase(name) {
//     let ausgabe = name.toLowerCase() + '-' +name.toUpperCase();
//     console.log(ausgabe);
//     return ausgabe
// }
// toCase('Ida');


// //21
// function toCase(text) {
//         return text.toLowerCase() +'-' + text.toUpperCase();
// }

// function createHTMLlist(liste) {
//     let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`);
    
//     let flattenedList = htmlElements.join(""); // Kein Komma zwischen den Einträgen
    
//     let ergebnis = `<ul>${flattenedList}</ul>`; // Richtige Template-Syntax
    
//     return ergebnis;
// }

// let my_list = ["lukas", "tom", "sabine", "alf"];
// console.log(createHTMLlist(my_list));

function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
}
let my_list = ["lukas", "tom", "sabine", "alf"];
console.log(createHTMLList(my_list));
document.body.innerHTML = createHTMLList(my_list);