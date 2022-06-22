const anguloUm = -2;
const anguloDois = 50;
const anguloTres = 100;

const somaAngulos = anguloUm + anguloDois + anguloTres;

if (anguloUm < 0 || anguloDois < 0 || anguloTres) {
	console.log("ERRO! \n valor de angulo inválido");
} else if (somaAngulos == 180) {
	console.log(true);
} else if (somaAngulos > 180 || somaAngulos < 180) {
	console.log(false);
}
