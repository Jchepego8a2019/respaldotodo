// imagenes = ["../imgproyectoingles/chica1.jpg","../imgproyectoingles/chica2.jpg","../imgproyectoingles/chica3.jpg","../imgproyectoingles/chica4.jpg", "../imgproyectoingles/chica5.jpg","../imgproyectoingles/chica6.jpg", ];
// var x = document.getElementById('practiceWeek').innerHTML = '<img src="' + imagenes[Math.floor(Math.random() * imagenes.length)] + '" alt="Imagen aleatoria" />';
// console.log(x); 

imagenes = ["../imgproyectoingles/marvel1.jpg","../imgproyectoingles/marvel2.jpg","../imgproyectoingles/marvel3.jpg","../imgproyectoingles/marvel4.jpg", "../imgproyectoingles/marvel5.jpg","../imgproyectoingles/marvel6.jpg", "../imgproyectoingles/marvel7.jpg", "../imgproyectoingles/marvel8.gif" ];
var x = document.getElementById('practicmonth');
var num = Math.floor(Math.random() * imagenes.length);
x.style.backgroundImage = "url("+imagenes[num]+")";

var divimagen = document.getElementsByTagName("input");
for (var v in divimagen) 
{
	if (v < divimagen.length) 
	{
		console.log(v);
		divimagen[v].addEventListener("change", desaparecer);
	}
}

function desaparecer(eventocambio)
{	
	switch (eventocambio.srcElement.value) 
	{
		case "January":
			datos(eventocambio)
		break;
		case "February":
			datos(eventocambio)
    	break;
    	case "March":
			datos(eventocambio)
		break
		case "April":
			datos(eventocambio)
		break
		case "May":
			datos(eventocambio)
		break
		case "June":
			datos(eventocambio)
		break
		case "July":
			datos(eventocambio)
		break
		case "August":
			datos(eventocambio)
		break
		case "September":
			datos(eventocambio)
		break
		case "October":
			datos(eventocambio)
		break
		case "November":
			datos(eventocambio)
		break
		case "December":
			datos(eventocambio)
		break
		default:
			eventocambio.srcElement.style.color = "red";
		break;
	}	
}

function datos(eventcam)
{
	eventcam.srcElement.style.backgroundColor = "transparent";
	eventcam.srcElement.style.color = "transparent";
	eventcam.srcElement.style.borderColor = "transparent";
	eventcam.srcElement.parentNode.style.backgroundColor = "transparent";
	eventcam.srcElement.parentNode.style.color = "transparent";
	eventcam.srcElement.parentNode.style.borderColor = "transparent";
}

var restar = document.getElementById("rest");
restar.addEventListener("click", function(){
	location.reload(true);
});



