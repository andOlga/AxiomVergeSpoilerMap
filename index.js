function loadXMLDoc() {
  const xhr = new XMLHttpRequest();
  const xml = "0.xml";
  xhr.open("GET", xml);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this);
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
    txt += locationName[i].childNodes[0].nodeValue + "<br>";
    txt += itemName[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}