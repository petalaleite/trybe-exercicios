/* Questão 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 * 3 * 2 *1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */

/* let n = 10;
let fatorial = 1;

for (let i = 1; i <= n; i += 1) {
	fatorial *= i;
}

console.log(fatorial);

// Questão 2

// Questão 3

let array = ["java", "javascript", "python", "html", "css"];
let maiorPalavra = array[0].length;

for (let i = 0; i < array.length; i += 1) {
	if (array[i].length > maiorPalavra) {
		maiorPalavra = array[i];
	}
}

console.log(maiorPalavra);

let menorPalavra = array[0].length;

for (let i = 0; i < array.length; i += 1) {
	if (array[i].length < menorPalavra) {
		menorPalavra = array[i];
	}
}

console.log(menorPalavra);
 */
// questão 4

let primos = [];

for (let i = 2; i <= 50; i += 1) {
	if (i % 2 !== 0) {
		i++;
	} else {
		primos.push(i);
	}
}

console.log(primos);
