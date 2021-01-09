function loadXMLDoc() 
{
  let file = document.querySelector('#inputId').files[0]; // GET FILE FROM USER INPUT
  let fr = new FileReader(); // CREATE NEW INSTANCE OF FILEREADER CLASS
  fr.onload = e => getData(e.target.result); // ON FILE LOAD RUN GETDATA FUNCTION
  fr.readAsText(file); // READ FILE AS TEXT
}

function getData(xml) 
{
  const domParser = new DOMParser(); // CREATE NEW INSTANCE OF DOMPARSER CLASS
  const xmlDoc = domParser.parseFromString(xml, 'text/html'); // PARSE HTML FROM FILE TEXT STRING USING DONPARSER CLASS
  const _location = xmlDoc.getElementsByTagName("Location"); // GET ALL VANILLAPLACEMENT HTML TAGS

  for (var i = 0; i < 125; i++) {
    let currentItemID = "item" + _location[i].getAttribute("VanillaPlacement"); // GET AND SET CURRENTITEMID
    let currentItemName = _location[i].getAttribute("Item"); // GET AND SET CURRENTITEMNAME
    let currentItemPath = `items/${currentItemName}.svg`; // GET AND SET CURRENTITEMPATH
    let currentURL = `url(${currentItemPath})`; // GET AND SET CURRENTURL
    setData(currentItemID, currentURL, currentItemName); // RUN SETDATA FUNCTION
    console.log(`Replaced ${currentItemID} - Item Name: ${currentItemName}`)
  }
}

function setData(_itemID, _url, _itemName) 
{
  if (_itemName.includes("Note")) { _url = `url(items/DigitalPaper.svg)`; } // IF ITEM IS LORE REPLACE URL WITH CORRECT URL PATH
  else if (!_itemName.includes("Fragment") && _itemName.includes("HealthNode")) { _url = `url(items/HealthNode.svg)`; }
  else if (!_itemName.includes("Fragment") && _itemName.includes("PowerNode")) { _url = `url(items/PowerNode.svg)`; }
  else if (_itemName.includes("HealthNodeFragment")) { _url = `url(items/HealthNodeFragment.svg)`; }
  else if (_itemName.includes("PowerNodeFragment")) { _url = `url(items/PowerNodeFragment.svg)`; }
  else if (_itemName.includes("SizeNode")) { _url = `url(items/SizeNode.svg)`; }
  else if (_itemName.includes("RangeNode")) { _url = `url(items/RangeNode.svg)`; }
  else if (_itemName == "") { _url = ""; } // IF ITEM IS EMPTY SET ITEM URL PATH TO EMPTY STRING
  if (_itemID == "item125") 
  {
    document.getElementById("item125").style.backgroundImage = _url;
    document.getElementById("item126").style.backgroundImage = _url;
    document.getElementById("item127").style.backgroundImage = _url;
  }
  else 
  {
    document.getElementById(_itemID).style.backgroundImage = _url; // SET DOM ITEM BACKGROUND 
  }
}