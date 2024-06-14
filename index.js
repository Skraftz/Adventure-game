let text;
let selector = "p";
let pin = 0;


function button(number, src, alt) {
    document.getElementById(number).src = src;
    document.getElementById(number).alt = alt;
}


function ToggleButtons(Watch) {
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "none";
            document.getElementById("4").style.display = "none";
            switch (Watch) {
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
}










async function getText() { //self explainitory
    let response = await fetch('https://skraftz.github.io/Adventure-game/file.txt');
    let sec = await response.text();
    text = sec.split("\n");
    console.log(text);
};





function nameItLater() {
    switch (text[pin]) {
        case "H": //Selects header 1
            selector = "h1";
            pin += 1; nameItLater();
            break;
        case "I": // Replaces image and alt 
            pin += 1;
            document.querySelector("img").src = text[pin];
            pin += 1;
            document.querySelector("img").alt = text[pin];
            pin += 1; nameItLater();
            break;
        case "p":
            selector = "p";
            pin += 1; nameItLater();
            break;
        case "O":
            pin += 1; ToggleButtons(text[pin]);//show buttons
            let rep = Number(text[pin]);
            let amm = 0;
            while (rep > amm) {
            amm += 1;
            pin += 1;
            document.getElementById(String(amm)).innerHTML = text[pin];
            pin += 1;
            document.getElementById(String(amm)).className = text[pin];
            };
        //Show buttons//
            
            break;
        default:
            document.querySelector(selector).innerHTML = text[pin];
            
            pin += 1; nameItLater();
            break;
        
    };
};

console.log("V0.4.5");
getText();


document.getElementById('0').addEventListener('click', function(){
    console.log(self.className);
});