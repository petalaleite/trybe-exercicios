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

// let info2 = {
// 	personagem: "Tio Patinhas",
// 	origem: "Christmas on Bear Mountain,  Dell's Four Color Comics #178",
// 	nota: "O último MacPatinhas",
// 	recorrente: "Sim",
// };

// for (key in );

// Questão 6

let leitor = {
	nome: "Julia",
	sobrenome: "Pessoa",
	idade: 21,
	livrosFavoritos: [
		{
			titulo: "O Pior Dia de Todos",
			autor: "Daniela Kopsch",
			aditora: "Tordesilhas",
		},
	],
};

console.log(
	"O livro favorito de " +
		leitor.nome +
		" " +
		leitor.sobrenome +
		" se chama " +
		leitor.livrosFavoritos[0]["titulo"]
);
