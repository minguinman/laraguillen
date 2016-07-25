

function cambiarImagen(vista){
	var img=new Image(300,400);
	
	if (vista=="vista1_1"){
		img.src = "pergolas/Pergola01.jpg";
		document.getElementById("pergola1").src= img.src;
	}else if (vista=="vista2_1"){
		img.src = "pergolas/Pergola01_vista2.jpg";
		document.getElementById("pergola1").src=img.src;
	}else if (vista=="vista1_2"){
		img.src = "pergolas/Pergola02.jpg";
		document.getElementById("pergola2").src=img.src;
	}else if (vista=="vista2_2"){
		img.src = "pergolas/Pergola02_vista2.jpg";
		document.getElementById("pergola2").src=img.src;
	}else if (vista=="vista1_4"){
		img.src = "pergolas/Pergola04.jpg";
		document.getElementById("pergola4").src=img.src;
	}else if (vista=="vista2_4"){
		img.src = "pergolas/Pergola04_vista2.jpg";
		document.getElementById("pergola4").src=img.src;
	}else if (vista=="vista1_5"){
		img.src = "pergolas/Pergola05.jpg";
		document.getElementById("pergola5").src=img.src;
	}else if (vista=="vista2_5"){
		img.src = "pergolas/Pergola05_vista2.jpg";
		document.getElementById("pergola5").src=img.src;
	}else if (vista=="vista1_6"){
		img.src = "pergolas/Pergola06.jpg";
		document.getElementById("pergola6").src=img.src;
	}else if (vista=="vista2_6"){
		img.src = "pergolas/Pergola06_vista2.jpg";
		document.getElementById("pergola6").src=img.src;
	}else if (vista=="vista1_7"){
		img.src = "pergolas/Pergola07.jpg";
		document.getElementById("pergola7").src=img.src;
	}else if (vista=="vista2_7"){
		img.src = "pergolas/Pergola07_vista2.jpg";
		document.getElementById("pergola7").src=img.src;
	}
}

function verImagen(pergola){

	return document.getElementById(pergola).src;

}

