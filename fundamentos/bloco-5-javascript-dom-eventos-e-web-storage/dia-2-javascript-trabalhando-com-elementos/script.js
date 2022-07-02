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
).parentElement;

let novoP = document.createElement("section");
novoP.id = "irmão de elementoOndeVoceEsta";

irmaoOndeVoceEsta.appendChild(novoP);

// // * Crie um filho para elementoOndeVoceEsta
let filhoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

let filhoH = document.createElement("section");
filhoH.id = "filho do elementoOndeVoceEsta";

filhoOndeVoceEsta.appendChild(filhoH);

// // * Crie um filho para primeiroFilhoDoFilho
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

let filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";

primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// * Remova todos os elementos filhos de paiDoPai exceto, pai, elementoOndeVoceEsta e primeiroFilhoDoFilho
