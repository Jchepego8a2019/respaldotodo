// imagenes = ["../imgproyectoingles/chica1.jpg","../imgproyectoingles/chica2.jpg","../imgproyectoingles/chica3.jpg","../imgproyectoingles/chica4.jpg", "../imgproyectoingles/chica5.jpg","../imgproyectoingles/chica6.jpg", ];
// var x = document.getElementById('practiceWeek').innerHTML = '<img src="' + imagenes[Math.floor(Math.random() * imagenes.length)] + '" alt="Imagen aleatoria" />';
// console.log(x); 


imagenes = ["../imgproyectoingles/chica1.jpg","../imgproyectoingles/chica2.jpg","../imgproyectoingles/chica3.jpg","../imgproyectoingles/chica4.jpg", "../imgproyectoingles/chica5.jpg","../imgproyectoingles/chica6.jpg", "../imgproyectoingles/chica7.gif", "../imgproyectoingles/chica8.gif" ];
var x = document.getElementById('practiceWeek');
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
		case "Week":
			datos(eventocambio)
		break;
		case "Monday":
			datos(eventocambio)
    	break;
    	case "Tuesday":
			datos(eventocambio)
		break
		case "Wednesday":
			datos(eventocambio)
		break
		case "Thursday":
			datos(eventocambio)
		break
		case "Friday":
			datos(eventocambio)
		break
		case "Saturday":
			datos(eventocambio)
		break
		case "Sunday":
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