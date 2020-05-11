function loadXMLDoc() {
  const xhr = new XMLHttpRequest();
  const xml = "0.xml";
  xhr.open("GET", xml);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      getData(this);
    }
  };
  xhr.send();
}

function getData(xml) {
  var x, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  locationID = xmlDoc.getElementsByTagName("VanillaPlacement");
  locationName = xmlDoc.getElementsByTagName("Name");
  itemName = xmlDoc.getElementsByTagName("Item");
  for (i = 0; i< 124; i++) {
    var itemID = "item" + locationID[i].innerHTML;
    var itemURL = `items/${itemName[i].innerHTML}.svg`;
    var url = `url(${itemURL})`;
    setData(itemID, url, itemName[i].innerHTML);
  }
}

function setData(_itemID, _url, _itemName) {
  if (_itemName == "Lore") { _url = `url(items/DigitalPaper.svg)`; }
  else if (_itemName == "Empty") { _url = ""; }
  document.getElementById(_itemID).style.background = _url;
  logMe(_itemID, _url, _itemName)
}

function logMe(_itemID, _url, _itemName) {
  console.log(`Item ${_itemName} Placed`);
  console.log(_itemID);
  console.log(_url);
  console.log("------------------------------------");
}
