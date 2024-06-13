var text;
function reqListener() {
    text = this.responseText;
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "file.txt"[1]);
  req.send();
  