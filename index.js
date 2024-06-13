var text = "H\nHeader\nParagraph of what is happening\nimg\nimage.png";
var selector = "p";


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
    switch (x) {
        case "H":
            getNextParagraph()
            selector = "h1";
            break;
        case "O":
            getNextParagraph()


        default:
            document.querySelector(selector).innerHTML = x;
            if (selector == "h1") {
                selector = "p";
            }
            getNextParagraph(x)
            break;
        
    }
};


req.addEventListener("load", getText);

