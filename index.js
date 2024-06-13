var text;
function reqListener() {
    console.log(this.responseText);
    var firstLine = this.responseText.split('\n').shift(); 
    var text = this.responseText;
    console.log(firstLine)
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "file.txt"[1]);
  req.send();
  