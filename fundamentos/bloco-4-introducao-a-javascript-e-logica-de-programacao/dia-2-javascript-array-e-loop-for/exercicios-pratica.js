let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Questão 1

for (let i = 0; i < numbers.length; i += 1) {
	console.log(numbers[i]);
}

// Questão 2

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
	soma = soma + numbers[i];
}
console.log(soma);

// Questão 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
	soma = soma + numbers[i];
}
console.log(soma / numbers.length);

// Questão 4

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
	soma += numbers[i];
}
let media = soma / numbers.length;

if (media > 20) {
	console.log("Valor maior que 20");
} else {
	console.log("Valor menor ou igual a 20");
}

// Questão 5

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Questão 6

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] % 2 !== 0) {
		impares.push(numbers[i]);
	}
}

console.log(impares.length);

// Questão 7

// Questão 8

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
array = [];

for (let i = 1; i <= 25; i += 1) {
	array.push(i);
}

console.log(array);

// Questão 9

for (let i = 0; i < array.length; i += 1) {
	console.log(array[i] / 2);
}
