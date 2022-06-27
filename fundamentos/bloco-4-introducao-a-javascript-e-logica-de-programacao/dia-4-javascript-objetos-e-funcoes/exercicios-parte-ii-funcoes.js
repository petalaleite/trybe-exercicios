// Questão 1

// function verificaPalindromo(palavra) {
//   if() {
//     return true;
//   }
// }
// Questão 2

array = [2, 3, 6, 7, 10, 1];

function retornaMaiorValor(array) {
	let maiorValor = array[0];
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] > maiorValor) {
			maiorValor = array[i];
		}
	}
	return maiorValor;
}

console.log(retornaMaiorValor(array));

// Questão 3

arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function retornaMenorValor(array) {
	let menorValor = array[0];
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] < menorValor) {
			menorValor = array[i];
		}
	}
	return menorValor;
}

console.log(retornaMenorValor(arrayTeste));
// Questão 4
// Questão 5
// Questão 6
// Questão 7
