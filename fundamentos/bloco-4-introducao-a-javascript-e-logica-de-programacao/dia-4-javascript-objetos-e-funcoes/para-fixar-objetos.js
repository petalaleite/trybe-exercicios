// questão 1
let player = {
	name: "Marta",
	lastName: "Silva",
	age: 34,
	medals: {
		golden: 2,
		silver: 3,
	},
};

// questão 2
console.log(
	"A jogadora " +
		player.name +
		" " +
		player.lastName +
		" possui " +
		player.age +
		" anos de idade"
);

// questão 3
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player.bestInTheWorld);

// questão 4

console.log(
	"A jogadora " +
		player.name +
		" " +
		player.lastName +
		" foi eleita a melhor do mundo por " +
		player.bestInTheWorld.length +
		" vezes."
);

// questão 5

console.log(
	"A jogadora " +
		player.name +
		" tem " +
		player.medals.golden +
		" medalhas de Ouro e " +
		player.medals.silver +
		" medalhas de prata."
);
