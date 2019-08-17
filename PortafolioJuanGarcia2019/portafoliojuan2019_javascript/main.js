/* ========================SELECCIONA LOS DIFERENTES HTML SEGUN EL MENU============================== */
/* iralonzo2014@gmail.com */
var cerrarmodal = document.getElementById("cerrarmodal");
var elemUl = document.getElementById("indicadorul");
var columnaizquierda = document.getElementById("columnacontenidoizquierdo");
var columnaderecha = document.getElementById("columnacontenidoderecha");
var abrirmenudesplegable = document.getElementById("abremenu");
var elemLi = document.getElementsByTagName("li");
var iframe = document.getElementById("containercontenido");
var contopacity = 0;

for(var inter = 0; inter < elemLi.length;inter++)
{
	elemLi[inter].addEventListener("click",elementoQueLLama);
} 
 
function elementoQueLLama(ev)              
{	
	elemUl.style.pointerEvents = "none";
	var li_color = ev.srcElement.style.color = "green";
	var inter1 = setInterval(vrif, 100);
	function vrif() 
	{    
		if(contopacity >= 1)
		{
			clearInterval(inter1);
			contopacity = 0;
			elemUl.style.pointerEvents = "auto";
			var li_color = ev.srcElement.style.color = "White";
		}
		else
		{
			contopacity += 0.10;
			iframe.style.opacity = contopacity;
			if(contopacity <= 0.10)
			{
				var li_name = ev.srcElement.attributes.name.value;
				switch (li_name)   
				{
					case "acercaMí":       
						iframe.src = "portafoliojuan2019_html/acercademi.html";
						cerrar()
					break;
					case 'hobbies':
						iframe.src = "portafoliojuan2019_html/hobies.html";
						cerrar()
					break;
					case 'fotos':
						iframe.src = "portafoliojuan2019_html/carrucel.html";
						cerrar()
					break;
					case 'cv':
						iframe.src = "portafoliojuan2019_html/cv.html";
						cerrar()
					break;
					case 'comunicate':
						iframe.src = "portafoliojuan2019_html/comunicate.html";
						cerrar()
					break;
					case 'diviertete':
						iframe.src = "portafoliojuan2019_html/secretos.html";
						cerrar()
					break;			
				}
			}
		}
	}
}


/* ====================CIERRA MENU======================================= */  
function cerrar()
{
  var pos = 0;
  
  var id = setInterval(frame, 1);
  function frame() 
  {
    if (pos == 1000) 
	{
      clearInterval(id);
	  abrirmenudesplegable.style.display = "block";
    }     
	else 
	{
      pos++;  
      elemUl.style.left = - pos + 'px';
    }
  }
  
  var pos2 = 12;
  
  var inter = setInterval(anchoColumna, 2000);
  function anchoColumna()
  {
	if (pos2 > 12) 
	{
      clearInterval(inter);
    }     
	else 
	{
	  pos2++;
	}	
  }
}
cerrarmodal.addEventListener("click",cerrar);

/* ==================ABRE EL MENU========================================= */

function abre()
{
  var post = -20;
  
  var x = setInterval(frame1, 1);
  function frame1() 
  {
	abrirmenudesplegable.style.display = "none";
	elemUl.style.display = "block";
    if (post > 1) 
	{
      clearInterval(x);
    }     
	else 
	{ 
	  elemUl.style.left = post + '%';
	  post += 0.10; 
    }
  }
}   

abrirmenudesplegable.addEventListener("click",abre);



/* =====================PECERA====================================== */
var botonbomba = document.getElementById("buttonbomba");
var contenedordebomba = document.getElementById("contenedordebomba");

var contador = 0;

botonbomba.addEventListener("click",llenarpecera);
function llenarpecera()
{
 	if(contador == 0)
 	{
 		contenedordebomba.style.backgroundImage = "url('portafoliojuan2019_images/bombafuncioanndo.gif')";
 		botonbomba.style.backgroundColor = "red";
 		botonbomba.value = "OFF";

 		iframe.style.backgroundImage = "url(portafoliojuan2019_images/tortuga.gif), url(portafoliojuan2019_images/pezderecha.gif), url('portafoliojuan2019_images/peceramovimiento.gif')";
 		
 		contador++;
 	}
 	else
 	{
 		contenedordebomba.style.backgroundImage = "url('portafoliojuan2019_images/bombaapagada.gif')";
 		botonbomba.style.backgroundColor = "green";
 		botonbomba.value = "ON";

 		iframe.style.backgroundImage = "url(portafoliojuan2019_images/tortuga.gif), url(portafoliojuan2019_images/pezderecha.gif), url('portafoliojuan2019_images/pecerastop.gif')";

 		contador = 0;
 	}
}
