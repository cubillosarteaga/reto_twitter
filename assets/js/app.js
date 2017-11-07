function add(){
	var comments = document.getElementById('comment').value;
	//evitar campo de texto vacío//
	if (comments == "") {
		var boton = getElementById('boton');
		boton.disable = true;
	}else{
	document.getElementById('comment').value = "";

	var newComment = document.createElement('div'); //crear el contenedor de los comentarios que se vayan a crear//
	var contenido = document.getElementById('contenido'); //se le agrega un id//
	var text = document.createElement('p'); //creamos un parrafo//
	var nodoTexto = document.createTextNode(comments);

	//establecer la hora en el comentario//
	var hour = document.createElement('span');
	var nHour = new Date();
	var sHour =nHour.getHours()+":" + nHour.getMinutes();
	hour.textContent = sHour;
	//añadiendo hijos//
	text.appendChild(nodoTexto);
	newComment.appendChild(text);
	newComment.appendChild(hour);
	contenido.appendChild(newComment);
	
	
	//document.getElementById("boton").disabled = true | false;//
}
	
}
//contador//
function cuenta(){
	var longitud = 140; //los caracteres que quiero que tenga mi textarea de limite//
	var resta = "";//vacio para que ingrese el resultado de la resta al momento de agregar caracteres 140-caracteres ingresados//
	var comment = document.getElementById('comment').value.length; //otorgar el largo del comentario ingrsado en el contenedor//
	
	resta = longitud-comment; //resta la longitud 140 con lo que se va ingresando en comment//
	document.getElementById('contador').value=resta;// id llamado contador y agregarle el valor que en este caso sería resta//
	//cambiar de color el contador para determinada cantidad de caracteres//
	if (resta < 0) { //pero si me da numero negativo entonces que el contador cambie a color negro//
		contador.style.color = 'black';
		document.getElementById("boton").disabled=true;
	}else if (resta >=0 && resta < 10){ //pero si es mayor a cero y menor a 10 entonces que cambie a color azul//
		contador.style.color = 'blue';
		document.getElementById("boton").disabled=false;
	}else if (resta >=10 && resta < 20){ // al igual que arriba, entonces cambia a rosado//
		contador.style.color = 'pink';
		document.getElementById("boton").disabled=false;
	}else{
		contador.style.color = '#33CDFF'; // y sino entonces que vuelva a su color original//
		document.getElementById("boton").disabled=false;
	}

}
//agrandar textarea//
var textarea = document.querySelector('textarea'); //variable para guardar el valor de textarea//

textarea.addEventListener('keydown', autosize); //crear un evento de que al presionar una tecla se ejecute la funcion de autosize//
 //crear la funcion autosize//            
function autosize(){
  var largo = this; //valor this para lo que esta ocurriendo en el momento//
  setTimeout(function(){
    largo.style.cssText = 'height:auto; padding:0';
    largo.style.cssText = 'height:' + largo.scrollHeight + 'px';
  },0); //con esta funcion le agrego estilo a mi variable de largo y settime controla la visibilidad del scroll en cuanto sobrepasaba la cantidad de caracteres//
}