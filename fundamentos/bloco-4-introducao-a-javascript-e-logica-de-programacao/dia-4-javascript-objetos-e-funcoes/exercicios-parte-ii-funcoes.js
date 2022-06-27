// Questão 1

// function verificaPalindromo(palavra) {
//   if() {
//     return true;
//   }
// }
// Questão 2

array = [2, 3, 6, 7, 10, 1];

function retornaMaiorValor(array) {
	let indiceMaiorValor = 0;
	for (let i = 0; i < array.length; i += 1) {
		if (array[indiceMaiorValor] < array[i]) {
			indiceMaiorValor = i;
		}
	}
	return indiceMaiorValor;
}

console.log(retornaMaiorValor(array));

// Questão 3

arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function retornaMenorValor(array) {
	let indiceMenorValor = array[0];
	for (let i = 0; i < array.length; i += 1) {
		if (array[indiceMenorValor] > array[i]) {
			indiceMenorValor = i;
		}
	}
	return indiceMenorValor;
}

console.log(retornaMenorValor(arrayTeste));
// Questão 4

let arrayNomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function retorneMaiorCaracteres(array) {
	let maiorLength = array[0];
	for (let i in array) {
		if (maiorLength.length < array[i].length) {
			maiorLength = array[i];
		}
	}
	return maiorLength;
}

console.log(retorneMaiorCaracteres(arrayNomes));

// Questão 5

// arrayQuestao5 = [2, 3, 2, 5, 8, 2, 3];

// function retornaMaisRepetido(array) {
//   for (let i in array) {
//     if ()
//   }
// }
// Questão 6

function somaNatural(n) {
	let soma = 0;
	for (let i = 1; i <= n; i += 1) {
		soma = soma + i;
	}

	return soma;
}

console.log(somaNatural(5));
// Questão 7

function verificaString(word, ending) {}
