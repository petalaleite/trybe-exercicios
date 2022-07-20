const fatorial = (number) => {
	let result = 1;

	for (let i = 2; i <= number; i += 1) {
		result *= i;
	}

	return result;
};

console.log(fatorial(5));

// questão 2

const longestWord = (phrase) => {
	let phraseArray = phrase.split(' ');
	let longest = phraseArray[0];

	for (let i = 0; i < phraseArray.length; i += 1) {
		if (phraseArray[i].length > longest.length) {
			longest = phraseArray[i];
		}
	}

	return longest;
};

console.log(longestWord('o rato roeu a roupa do rei de roma onomatopeia'));

// questão 4

const subs = (name) => {
	const frase = 'Tryber x aqui!';
	return frase.replace('x', name);
};

console.log(subs('tonho'));

const newString = (subs) => {
	const skills = ['JavaScript', 'Bootstrap', 'HTML'];

	return `${subs} Minhas três principais habilidades sao: 
  ${skills}`;
};

console.log(newString(subs('tonho')));
