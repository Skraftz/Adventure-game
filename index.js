let text;
let selector = "p";
let pin = 0;
let send = [0,0,0,0];

function imageuwu(xa, yb) {
    document.getElementById("img").src = xa;pin += 1;
    document.getElementById("img").alt = yb;
    document.getElementById("img").style.height="500px";
};


function ToggleButtons(Watch) {
            document.getElementById("a").style.display = "none";
            document.getElementById("b").style.display = "none";
            document.getElementById("c").style.display = "none";
            document.getElementById("d").style.display = "none";
            switch (Watch) {
                case "4": 
                    document.getElementById("a").style.display = "block";
                    document.getElementById("c").style.display = "block";
                    document.getElementById("d").style.display = "block";
                    document.getElementById("b").style.display = "block";
                break;
                case "3":
                    document.getElementById("b").style.display = "block";
                    document.getElementById("c").style.display = "block";
                    document.getElementById("a").style.display = "block";
                    break;
                case "2":
                    document.getElementById("b").style.display = "block";
                    document.getElementById("a").style.display = "block";
                    break;
                case "1":
                    document.getElementById("a").style.display = "block";
                    break;
                default:
                    break;
                }; 
};










async function getText() { //self explainitory
    var response = await fetch('chat.txt');
    var sec = await response.text();
    if (sec.includes("\r\n")) {
        text = sec.split("\r\n")
    }else {
    text = sec.split("\n");
    }
    console.log(text);
    nameItLater();
};




function nameItLater() {
    switch (text[pin]) {
        case "H": //Selects header 1
            selector = "h1";
            pin += 1; nameItLater();
            break;
        case "I": // Replaces image and alt 
            pin +=1;
            imageuwu(text[pin], text[pin+1]);
            pin += 1; nameItLater();
            break;
        case "p":
            selector = "p";
            pin += 1; nameItLater();
            break;
        case "O":
            pin += 1; ToggleButtons(text[pin]);//show buttons
            pin += 1;
            document.getElementById("a").innerHTML = text[pin];
            pin += 1;
            send[0] = Number(text[pin]);
            pin += 1;
            document.getElementById("b").innerHTML = text[pin];
            pin += 1;
            send[1] = Number(text[pin]);
            pin += 1;
            document.getElementById("c").innerHTML = text[pin];
            pin += 1;
            send[2] = Number(text[pin]);
            pin += 1;
            document.getElementById("d").innerHTML = text[pin];
            pin += 1;
            send[3] = Number(text[pin]);
        //Show buttons//
            
            break;
        case "end":
            break;
        default:
            document.querySelector(selector).innerHTML = text[pin];
            
            pin += 1; nameItLater();
            break;
        
    };
};

console.log("V0.5.0");
getText();


function run(intUwU){
    pin = send[intUwU] - 1;
    console.log(text[pin]);nameItLater();
    return;
};