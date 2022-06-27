// Questão 1

let info = {
	personagem: "Margarida",
	origem: "Pato Donalds",
	nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Seja bem vinda, " + info.personagem);

// Questão 2

info["recorrente"] = "Sim";
console.log(info.recorrente);

// Questão 3

for (let key in info) {
	console.log(key);
}

// Questão 4

for (let key in info) {
	console.log(info[key]);
}

// Questão 5
