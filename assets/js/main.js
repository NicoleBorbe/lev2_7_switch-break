/* JS Assets
    
    <b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm
    
    <b>DHL Paket 2 kg</b> <br>
          bis 60 x 30 x 15 cm
    
    <b>DHL Paket 5 kg</b> <br>
          bis 120 x 60 x 60 cm
    
    <b>DHL Paket 10 kg</b> <br>
          bis 120 x 60 x 60 cm
    
    "<b>Extra große Größe</b> */

let auswahl = document.getElementById("mylist");
let ergebnis = document.getElementById("masse");

function showtxt() {
    switch (auswahl.value) {
        case "0":
        ergebnis.innerHTML = "<b>Brief und Postkarte</b><br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
        console.log("Größe 1");
        break;
        case "1":
        ergebnis.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm";
        console.log("Größe 2");
        break;
        case "2":
        ergebnis.innerHTML = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm";
        console.log("Größe 3");
        break;
        case "3":
        ergebnis.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
        console.log("Größe 4");
        break;
        default:
        ergebnis.innerHTML="<b>Extra große Größe</b>"
        console.log("Keine Größe");
    }
}