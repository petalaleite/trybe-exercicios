// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function paraClique(event) {
	event.preventDefault();
}
HREF_LINK.addEventListener("click", paraClique);

function preventCheckbox(event) {
	event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", preventCheckbox);

function preventInput(event) {
	const keyName = event.key;
	if (keyName === "a") {
		console.log(keyName);
	} else {
		event.preventDefault();
	}
}

INPUT_TEXT.addEventListener("keypress", preventInput);
