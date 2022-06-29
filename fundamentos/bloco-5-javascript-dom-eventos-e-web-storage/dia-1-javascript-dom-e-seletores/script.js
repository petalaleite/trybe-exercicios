let header = document.getElementById("header-container");
header.style.backgroundColor = "#228b22";

let emergencyHeader = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyHeader.length; i += 1) {
	emergencyHeader[i].style.backgroundColor = "#8766c4";
}
let noEmergencyHeader = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyHeader.length; i += 1) {
	noEmergencyHeader[i].style.backgroundColor = "#000";
}

let emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "#F8AFA6";

let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "#F6D258";

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#154734";
