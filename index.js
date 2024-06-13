var text = "string";
var line = "i";

function reqListener() {
    text = this.responseText;
};

function getNextParagraph() {
    text.replace(line, "");
}

function nameItLater(string) {
    switch (string) {
        case "H":
            getNextParagraph()
            document.querySelector("h1").innerHTML = "This is a test";
            getNextParagraph()
            document.querySelector("p").innerHTML = "Another Test.";
    }
};



const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "file.txt"[1]);
req.send();

