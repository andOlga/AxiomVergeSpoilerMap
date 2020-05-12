function loadXMLDoc() {

  let file = document.querySelector('#inputId').files[0]; // GET FILE FROM USER INPUT
  let fr = new FileReader(); // CREATE NEW INSTANCE OF FILEREADER CLASS
  fr.onload = e => getData(e.target.result); // ON FILE LOAD RUN GETDATA FUNCTION
  fr.readAsText(file); // READ FILE AS TEXT

}

function getData(xml) {

  const domParser = new DOMParser(); // CREATE NEW INSTANCE OF DOMPARSER CLASS
  const xmlDoc = domParser.parseFromString(xml, 'text/html'); // PARSE HTML FROM FILE TEXT STRING USING DONPARSER CLASS
  const locationID = xmlDoc.getElementsByTagName("VanillaPlacement"); // GET ALL VANILLAPLACEMENT HTML TAGS
  const itemName = xmlDoc.getElementsByTagName("Item"); // GET ALL ITEM HTML TAGS

  for (var i = 0; i< 124; i++) {
    let currentItemID = "item" + locationID[i].innerHTML; // GET AND SET CURRENTITEMID
    let currentItemName = itemName[i].innerHTML; // GET AND SET CURRENTITEMNAME
    let currentItemPath = `items/${currentItemName}.svg`; // GET AND SET CURRENTITEMPATH
    let currentURL = `url(${currentItemPath})`; // GET AND SET CURRENTURL
    setData(currentItemID, currentURL, currentItemName); // RUN SETDATA FUNCTION
  }

}

function setData(_itemID, _url, _itemName) {

  if (_itemName == "Lore") { _url = `url(items/DigitalPaper.svg)`; } // IF ITEM IS LORE REPLACE URL WITH CORRECT URL PATH
  else if (_itemName == "Empty") { _url = ""; } // IF ITEM IS EMPTY SET ITEM URL PATH TO EMPTY STRING
  document.getElementById(_itemID).style.background = _url; // SET DOM ITEM BACKGROUND 

}