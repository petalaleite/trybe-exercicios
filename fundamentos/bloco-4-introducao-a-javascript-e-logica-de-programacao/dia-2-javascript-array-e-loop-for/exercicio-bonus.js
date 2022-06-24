// Questão 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
	for (let secondI = 0; secondI < i; secondI += 1) {
		if (numbers[i] < numbers[secondI]) {
			let position = numbers[i];
			numbers[i] = numbers[secondI];
			numbers[secondI] = position;
		}
	}
}

console.log(numbers);

// Questão 2

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
	for (let secondI = 0; secondI < i; secondI += 1) {
		if (numbers[i] > numbers[secondI]) {
			let position = numbers[i];
			numbers[i] = numbers[secondI];
			numbers[secondI] = position;
		}
	}
}

console.log(numbers);

// Questão 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];

for (let i = 0; i < numbers.length; i += 1) {
	if (i + 1 < numbers.length) {
		mult.push(numbers[i] * numbers[i + 1]);
	}
}

console.log(mult);
