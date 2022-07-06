function createDaysOfTheWeek() {
	const weekDays = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];
	const weekDaysList = document.querySelector(".week-days");

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement("li");
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

let decemberDaysList = [
	29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criaDiasDoMes() {
	let listaDias = document.querySelector("#days");

	for (let i = 0; i < decemberDaysList.length; i += 1) {
		let dia = decemberDaysList[i];
		let itemDia = document.createElement("li");
		itemDia.innerHTML = day;

		if (dia == 24 || dia == 31) {
			itemDia.classList.add("day holiday");
			listaDias.appendChild(itemDia);
		} else if (dia == 4 || dia == 11 || dia == 18) {
			itemDia.classList.add("day friday");
			listaDias.appendChild(itemDia);
		} else if (dia == 25) {
			itemDia.classList.add("day holiday friday");
			listaDias.appendChild(itemdia);
		} else {
			itemDia.classList.add("day");
			listaDias.appendChild(itemDia);
		}
	}
}

criaDiasDoMes();
// Escreva seu código abaixo.
