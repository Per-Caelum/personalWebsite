const text = "Hello, World!";

function doConsoleThing() {
  console.log(text);
}
function doHTMLThing() {
  document.getElementById("footerText").innerHTML = text;
  doConsoleThing();
}
function doAlertThing() {
  alert(text);
  doConsoleThing();
}
