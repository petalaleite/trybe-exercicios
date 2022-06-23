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
