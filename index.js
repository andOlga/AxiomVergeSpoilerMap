function loadXMLDoc() {
  var file = document.querySelector('#inputId').files[0];
  var fr = new FileReader();
  fr.onload = e => getData(e.target.result);
  fr.readAsText(file);
}

function getData(xml) {
  const domParser = new DOMParser();
  const xmlDoc = domParser.parseFromString(xml, 'text/html');
  locationID = xmlDoc.getElementsByTagName("VanillaPlacement");
  locationName = xmlDoc.getElementsByTagName("Name");
  itemName = xmlDoc.getElementsByTagName("Item");
  for (var i = 0; i< 124; i++) {
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
}