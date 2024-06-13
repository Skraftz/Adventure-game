function reqListener() {
    console.log(this.responseText);
    var firstLine = text.split('\n').shift(); 
    console.log(firstLine)
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "file.txt"[1]);
  req.send();
  