const testingScope = (escopo) => {
	if (escopo === true) {
		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
		ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
		console.log(ifScope);
	} else {
		let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
		console.log(elseScope);
	}
};

testingScope(true);

// questao 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
	const sorted = array.sort((a, b) => a - b); // ordenar de forma crescente
	return sorted;
};

const sorted = sortArray(oddsAndEvens).join(',');
console.log(`Os números ${sorted} se encontram ordenados de forma crescente`);
