function myFunction() {
	var recomendaciones = document.getElementById("recomendaciones").value;
	if( recomendaciones ===''){
		alert("Escribe tus comentarios");
		return false;
	}
	else {
		alert('Gracias por tus comentarios');
		return true;
	}
}

function mostrarAcerca(){
	document.getElementById("acerca").style.display = "block";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("portafolio").style.display = "none";
	document.getElementById("contacto").style.display = "none";
	document.getElementById("sugerencias").style.display = "none";
}

function mostrarExperiencia(){
	document.getElementById("acerca").style.display = "none";
	document.getElementById("experiencia").style.display = "block";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("portafolio").style.display = "none";
	document.getElementById("contacto").style.display = "none";
	document.getElementById("sugerencias").style.display = "none";
}
function mostrarEducacion(){
	document.getElementById("acerca").style.display = "none";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("educacion").style.display = "block";
	document.getElementById("portafolio").style.display = "none";
	document.getElementById("contacto").style.display = "none";
	document.getElementById("sugerencias").style.display = "none";
}
function mostrarPortafolio(){
	document.getElementById("acerca").style.display = "none";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("portafolio").style.display = "block";
	document.getElementById("contacto").style.display = "none";
	document.getElementById("sugerencias").style.display = "none";
}
function mostrarContacto(){
	document.getElementById("acerca").style.display = "none";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("portafolio").style.display = "none";
	document.getElementById("contacto").style.display = "block";
	document.getElementById("sugerencias").style.display = "none";
}
function mostrarSugerencias(){
	document.getElementById("acerca").style.display = "none";
	document.getElementById("experiencia").style.display = "none";
	document.getElementById("educacion").style.display = "none";
	document.getElementById("portafolio").style.display = "none";
	document.getElementById("contacto").style.display = "none";
	document.getElementById("sugerencias").style.display = "block";
}