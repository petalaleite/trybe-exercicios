// * Acesse o elemento elementoOndeVoceEsta
console.log(document.getElementById("elementoOndeVoceEsta"));

// * Acesse pai a partir de elementoOndeVoceEsta e adicione uma color nele
document.getElementById("elementoOndeVoceEsta").parentElement.style.color =
	"blue";

// * Acesse primeiroFilhoDoFilho e adicione um texto a ele
document.getElementById("primeiroFilhoDoFilho").innerText =
	"Adicionando um texto";

// * Acesse o primeiroFilho a partir de pai
console.log(document.getElementById("pai").firstElementChild);

// * Acesse o primeiroFilho a partir de elementoOndeVoceEsta
console.log(
	document.getElementById("elementoOndeVoceEsta").previousElementSibling
);

// * Acesse o texto Atenção a partir de elementoOndeVocêEsta
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

// * Acesse o terceiroFilho a partir de elementoOndeVoceEsta
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

// * Acesse o terceiroFilho a partir de pai
console.log(
	document.getElementById("pai").lastElementChild.previousElementSibling
);

// * Crie um irmão para elementoOndeVoceEsta
let irmaoOndeVoceEsta = document.getElementById(
	"elementoOndeVoceEsta"
).nextElementSibling;

let novoP = document.createElement("p");
novoP.innerText = "irmão de elementoOndeVoceEsta";

irmaoOndeVoceEsta.appendChild(novoP);

// // * Crie um filho para elementoOndeVoceEsta
let filhoOndeVoceEsta = document.getElementById(
	"elementoOndeVoceEsta"
).lastElementChild;

let filhoH = document.createElement("h1");
filhoH.innerText = "ultimo filho do elementoOndeVoceEsta";

filhoOndeVoceEsta.appendChild(filhoH);

// // * Crie um filho para primeiroFilhoDoFilho

// let ingredientList = document.querySelector('.ingredientes-list')

// for(let i = 0; i < ingrediente.lenght) {
// 	let ingredient = ingreditente[i];

// 	let ingredienteListItem = document.createElement("li");
// 	ingredienteListItem.innerText = ingredient;

// 	ingredientList.appendChild(ingredienteListItem);
// }
