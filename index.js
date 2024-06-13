var text = "H\nHeader\nParagraph of what is happening\nimg\nimage.png";
var selector = "p";
var 
function reqListener() {
    text = this.responseText;
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



const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "file.txt"[1]);
req.send();

