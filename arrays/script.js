// my_list soll auf der Website dargestellt werden
let my_list = []
let second_list = []

// createHTMLList nimmt ein Javascript Array und gibt einen String für eine
// ungeordnete HTML Liste zurück
function createHTMLList(liste){

    let htmlElements = liste.map((listItem) => `<li>${listItem}</li>`)
    //console.log(htmlElements)
    let flattenedList = htmlElements.join("")
    //console.log(flattenedList)
    let ergebnis = `<ul>${flattenedList}</ul>`
    return ergebnis
}

// setListContent setzt den Inhalt des "liste"-div auf das Ergebnis eines createHTMLList(my_list) Aufrufs
function setListContent(){
    let listDiv = document.getElementById("liste")
    let content = createHTMLList(my_list)
    listDiv.innerHTML = content
}

// setUserInputList liest das eingabefeld und rendered die liste daraus
// text = "Lukas, Christof, Mete, Wojciech"
function setUserInputList(){
    //Erstmal Text und div aus dem Dokument holen
    let userInput = document.getElementById("userInput")
    let text = userInput.value
    let textList = text.split(",")
    my_list = my_list.concat(textList)
    setListContent()
}


// setSecondContent() setzt die zweite Liste
function setSecondListContent() {
    let secondListDiv = document.getElementById("secondListe"); // sucht nach einem HTML-Element mit der id="secondListe"
     // document.getElementById("secondListe") gibt das HTML-Element als Referenz zurück.
     // Das Ergebnis wird in der Variablen secondListDiv gespeichert.
     let content = createHTMLList(second_list); // createHTMLList(second_list) wird aufgerufen, um eine HTML-Liste 
     // aus dem Array second_list zu erstellen. Das Ergebnis (eine "<ul>...</ul>"-Liste als String) wird in content gespeichert.
     secondListDiv.innerHTML = content // Der HTML-Code von content (<ul>...</ul>) wird in secondListDiv.innerHTML eingefügt.
    } // Das bedeutet, dass das <div id="secondListe">-Element nun die generierte Liste enthält.
    
// createHTMLInput() liest das zweite Eingabefeld aus und fügt ein einzelnes Element hinzu.
function createHTMLInput() {
    let secondInput = document.getElementById("secondInput");
    let text = secondInput.value.trim(); // entfernt Leerzeichen


    if (text !== "") {
        second_list.push(text);  // Nur ein einzelnes Leerzeichen hinzufügen.
        setSecondListContent();
        secondInput.value = "";  // Eingabefeld leeren

    }
}
// Event-Listener, um die Eingabe mit Enter zu bestätigen.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            setUserInputList();
        }
    });

    document.getElementById("secondInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            createHTMLInput();
        }
    });
});