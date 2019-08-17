	var izq = document.getElementById("izquierdo");
var dr = document.getElementById("derecho");
var imgs = document.getElementById("fotos");
var imagenesurl = ["../portafoliojuan2019_images/foto1.jpg","../portafoliojuan2019_images/foto2.jpg","../portafoliojuan2019_images/foto3.jpg","../portafoliojuan2019_images/foto4.jpg", "../portafoliojuan2019_images/foto5.jpg", "../portafoliojuan2019_images/foto6.jpg"];

izq.addEventListener("click",cambiarslide);
dr.addEventListener("click",cambiarslide);

var cuentaslide = -1;
function cambiarslide (pareven)
{
	var eventoocurrio = pareven.srcElement.attributes.id.value;
	if (eventoocurrio == "derecho") 
	{
			cuentaslide++;
			console.log("derecho posicion actual "+cuentaslide);
		if (cuentaslide > imagenesurl.length -1) 
		{
			cuentaslide = 0;
			imgs.src = imagenesurl[cuentaslide];
		}
		else
		{
			imgs.src = imagenesurl[cuentaslide];
		}
			
	}
	else if (eventoocurrio == "izquierdo")
	{   
			cuentaslide--;
		if (cuentaslide < 0) 
		{
			cuentaslide = imagenesurl.length -1;
		}
		console.log(cuentaslide);
			imgs.src = imagenesurl[cuentaslide];
	}	
}


var elemento = document.getElementById("fondooo");
  var cuentavueltas = 0;
  var Intv = setInterval(function()
  {
      elemento.style.background = "linear-gradient(180deg, rgba(234, 140, 18, 1) 0%, white "+ cuentavueltas + "%)"; 
      cuentavueltas++;
      if (cuentavueltas == 360) 
        {
          clearInterval(Intv);
        }
      console.log(cuentavueltas);

  }, 70);