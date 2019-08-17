var d = document.getElementById("dibujo");
var trazo = d.getContext("2d");
var xinic, yinic, xfinal, yfinal;
var estado = false;
var color = "black";
var carta = document.getElementsByTagName("div");//creamos un array con todos los div 
var ima = document.getElementById("contenedorImagenes");  
var borrar = document.getElementById("borrador");
// var canvasLimites=d.getBoundingClientRect(); // obtenemos los limites del canvas
// console.log(canvasLimites);

document.addEventListener("mousedown", dibujoMouse);//paso1: cuando presionamos el boton del mause
function dibujoMouse(evento)
{
    estado = true;//paso1: la variable estado cambia a true
    xinic = evento.offsetX;//paso1: le asigna la posicion donde se dio el click en x
    yinic = evento.offsetY;//paso1: le asigna la posicion donde se dio el click en y
 // console.log("clientX "+evento.clientX+" clientY "+evento.clientY); 
 // console.log("layerX "+evento.layerX+" layerY "+evento.layerY); 
 // console.log("offsetX "+evento.offsetX+" offsetY "+evento.offsetY); 
 // console.log("pageX "+evento.pageX+" pageY "+evento.pageY); 
 // console.log("screenX "+evento.screenX+" screenY "+evento.screenY); 
 // console.log("x "+evento.x+" y "+evento.y); 
 // console.log("--------------------------"); 
}

d.addEventListener("mousemove", dibujoMouseMove);//paso2: arrastramos el mause
function dibujoMouseMove(evento)
{
 
    if (estado == true)//paso2: como el estado es igual a true se ejecuta el bloque de codigo 
    {
      dibujarLinea(color, xinic, yinic, evento.offsetX , evento.offsetY , trazo);//paso2: se ejecuta la funcion dibujarLinea
    }

    xinic = evento.offsetX;//paso2: al mover el mause asigna esa posicion en x 
    yinic = evento.offsetY;//paso2: al mover el mause asigna esa posicion en y
    console.log(xinic+"*-*"+yinic);
}

function dibujarLinea (color, xinic, yinic, xfinal, yfinal, trazo)//paso2: es llamada en la funcion dibujoMouseMove
{
  trazo.beginPath();
  trazo.strokeStyle = color;
  trazo.lineWidth = 2;
  trazo.moveTo(xinic, yinic);
  trazo.lineTo(xfinal, yfinal);
  trazo.closePath();
  trazo.stroke();
}


document.addEventListener("mouseup", dibujoMouseFinal);//paso3: cuando se suelta el boton del mause
function dibujoMouseFinal(evento)
{
    estado = false;//paso3: estado cambia nuevamente a false para iniciar un nuevo trazo
    xinic = evento.offsetX;//paso3: le asigna la posicion donde se dio el click en x
    yinic = evento.offsetY;//paso3: le asigna la posicion donde se dio el click en x
}

// -----------------------------SELECCIONAR LA IMAGEN-----------------------------------------
for(var inter = 4; inter < carta.length;inter++)
{
  carta[inter].addEventListener("click",selecciondeimagen);
} 

function selecciondeimagen(cartaevento)
{
  for(var inter = 4; inter < carta.length;inter++)//este devuelve a su valor original la carta que tenga la clase "caraformatobasico classcara"
  {
    if (carta[inter].className == "caraformatobasico classcara") 
    {
      carta[inter].className = "caraformatobasico classcara1";
    }
  } 


  if (cartaevento.srcElement.className === "caraformatobasico classcara") 
  {
    almacenaEventoAnterior = cartaevento.srcElement.className = "caraformatobasico classcara1";
    console.log(cartaevento.srcElement.className);
  }
  else
  {
    cartaevento.srcElement.className = "caraformatobasico classcara";//le asignamos la clase classcara
    console.log();
  }

  seleccionimagendibujo(cartaevento);
}

function seleccionimagendibujo(E)
{   
  var C = E.srcElement.id;
  switch (C)   
  {
    case 'idcara1':       
      ima.style.backgroundImage = "url('../portafoliojuan2019_images/batman.jpg')";
      limpiarcanvas()
    break;
    case 'idcara2':
      ima.style.backgroundImage = "url('../portafoliojuan2019_images/Une-los-puntos.png')";
      limpiarcanvas()
    break;
    case 'idcara3':
      ima.style.backgroundImage = "url('../portafoliojuan2019_images/unepuntoscangrejo.gif')";
      limpiarcanvas()
    break;
    case 'idcara4':
      ima.style.backgroundImage = "url('../portafoliojuan2019_images/spiderman.jpg')";
      limpiarcanvas()

    break;
    default:
    break;    
  }
}


// -----------------------------------------------------------------------------------------------
borrar.addEventListener("click",limpiarcanvas)
function limpiarcanvas()
{
  trazo.clearRect(0, 0, d.width, d.height);
}


// -----------------------------------------------------------------------------------------------
function susto()
{
  var numeroaleatorio = Math.floor((Math.random() * (8-4))+4);
  console.log(numeroaleatorio);
  carta[numeroaleatorio].addEventListener("click",asustar);
}

susto();

function asustar()
{
  setTimeout(
              function ()
              {
                // creamos el objeto audio
                var audioElement = document.createElement('audio');
                // indicamos el archivo de audio a cargar
                audioElement.setAttribute('src', '../portafoliojuan2019_images/grito.mp3');
                // Si deseamos que una vez cargado empieze a sonar..
                audioElement.setAttribute('autoplay', 'autoplay');
                // Si deseamos que inicie siempre desde el principio
                audioElement.currentTime = 0.5;
                // iniciamos el audio
                audioElement.play();
                ima.style.backgroundImage = "url('../portafoliojuan2019_images/saltaseñora.gif')";
              }, 10000
            );
  setTimeout(
              function ()
              {
                 ima.style.backgroundImage = "url('../portafoliojuan2019_images/blanco.jpg')";
              }, 11000
            );
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


 
