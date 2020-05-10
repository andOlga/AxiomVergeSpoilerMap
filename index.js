function loadXMLDoc() {
  const xhr = new XMLHttpRequest();
  const xml = "0.xml";
  xhr.open("GET", xml);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhr.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";
  locationName = xmlDoc.getElementsByTagName("Name");
  itemName = xmlDoc.getElementsByTagName("Item");
  for (i = 0; i< 124; i++) {
    txt += `<Location><br><Name>${locationName[i].childNodes[0].nodeValue}</Name><br>`;
    txt += `<Item>${itemName[i].childNodes[0].nodeValue}</Item><br></Location><br>`;
  }
  document.getElementById("demo").innerHTML = txt;
}
