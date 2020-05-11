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
  locationID = xmlDoc.getElementsByTagName("VanillaPlacement");
  locationName = xmlDoc.getElementsByTagName("Name");
  itemName = xmlDoc.getElementsByTagName("Item");
  for (i = 0; i< 124; i++) {
    console.log(`Location Name: ${locationName[i].innerHTML} Item Location ID: ${locationID[i].innerHTML} ItemName: ${itemName[i].innerHTML}`);
    //document.getElementById(`item${locationID.innerHTML}`).background = url(`items/${itemName[i].innerHTML}.svg`);
  }

}
