const buttonEnviar = document.getElementById('enviar');

function verifyInput() {
	if ((input.value = null || '')) {
		alert('Campos vazios!');
	}
}
buttonEnviar.addEventListener('click', verifyInput);
