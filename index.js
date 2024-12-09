
const main = document.getElementById("main");
main.remove();

const newHeader= document.createElement("h1");
newHeader.id = "victory";
const name = "Edmund Gachanja"
newHeader.textContent = `${name} is the champion`;
document.body.append(newHeader);