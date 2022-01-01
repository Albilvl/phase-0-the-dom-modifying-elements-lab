// Write your code here!
const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";

element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

const newHeader = document.createElement (`h1`)
newHeader.id = (`victory`)
newHeader.textContent = `Bil is the champion`


const main = document.getElementById ("main");
main.remove()
