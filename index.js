var text;
var selector = "p";
var pin = 0;

function getText() { //self explainitory
    var fs = require("fs");
    text = fs.readFileSync("./mytext.txt", "utf-8");
    var textByLine = text.split("\n")
    console.log(textByLine[0]);
};

function getNextParagraph(x) {
    text.replace(line, "");
}
/*test t
test*/

function nameItLater(x) {
    switch (text[pin]) {
        case "H": //Selects header 1
            selector = "h1";
            break;
        case "I": // Replaces image and alt 
            pin += 1;
            document.querySelector("img").src = text[pin];
            pin += 1;
            document.querySelector("img").alt = text[pin];
            break;
        case "O":
            pin += 1;
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
            document.getElementById("4").style.display = "none";
            switch (text[pin]) {
                case "4": 
                    document.getElementById("2").style.display = "block";
                    document.getElementById("3").style.display = "block";
                    document.getElementById("4").style.display = "block";
                break;
                case "3":
                    document.getElementById("2").style.display = "block";
                    document.getElementById("3").style.display = "block";
                    break;
                case "2":
                    document.getElementById("2").style.display = "block";
                    break;
                default:
                    break;
                }; 
            break;
        default:
            document.querySelector(selector).innerHTML = x;
            break;
        
    }
    pin+=1;
};

console.log("I AM GOING TO BREAK")
getText();

