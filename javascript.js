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

/* Instruction-provided code */
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});
