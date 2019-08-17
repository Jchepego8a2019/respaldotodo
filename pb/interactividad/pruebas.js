var boton = document.getElementById("btnppal");
var err = document.getElementById("errores");
boton.addEventListener("click", habilitarinput);
var input = document.getElementsByName("inputsssss");
var cuentaerrores = 1;
function habilitarinput()
{
	boton.className = "button";
	boton.innerHTML = "you can start the test";
	
	for (let v in input)
	{
		input[v].className = "pruebaunidad1divinput";
		input[v].addEventListener("change", verificarcontenido);
		
	}
}

function verificarcontenido(evet)
{
	console.log(evet.target.value.toLowerCase());
		switch (evet.target.value.toLowerCase()) 
		{
			case "one":
			good(evet.target);
			break;
			case "two":
			good(evet.target);
   			break;
   			case "three":
			good(evet.target);
   			break;
			case "four":
			good(evet.target);
			break;
			case "five":
			good(evet.target);
			break;
			case "six":
			good(evet.target);
			break;
			case "seven":
			good(evet.target);
			break;
			case "eight":
			good(evet.target);
			break;
			case "nine":
			good(evet.target);
			break;
			case "ten":
			good(evet.target);
			break;
			case "eleven":
			good(evet.target);
			break;
			case "twelve":
			good(evet.target);
			break;
			case "thirteen":
			good(evet.target);
			break;
			case "fourteen":
			good(evet.target);
			break;
			case "fifteen":
			good(evet.target);
			break;
			case "sixteen":
			good(evet.target);
			break;
			case "seventeen":
			good(evet.target);
			break;
			case "eighteen":
			good(evet.target);
			break;
			case "nineteen":
			good(evet.target);
			break;
			case "twenty":
			good(evet.target);
			break;
			case "thirty":
			good(evet.target);
			break;
			case "forty":
			good(evet.target);
			break;
			case "fifty":
			good(evet.target);
			break;
			case "sixty":
			good(evet.target);
			break;
			case "seventy":
			good(evet.target);
			break;
			case "eighty":
			good(evet.target);
			break;
			case "ninety":
			good(evet.target);
			break;
			case "one hundred":
			good(evet.target);
			break;
			case "one thousand":
			good(evet.target);
			break;
			case "one million":
			good(evet.target);
			break;
			case "ei":
			good(evet.target);
			break;
			case "bi":
			good(evet.target);
			break;
			case "ci":
			good(evet.target);
			break;
			case "di":
			good(evet.target);
			break;
			case "i":
			good(evet.target);
			break;
			case "ef":
			good(evet.target);
			break;
			case "yi":
			good(evet.target);
			break;
			case "eich":
			good(evet.target);
			break;
			case "ai":
			good(evet.target);
			break;
			case "jey":
			good(evet.target);
			break;
			case "key":
			good(evet.target);
			break;
			case "el":
			good(evet.target);
			break;
			case "em":
			good(evet.target);
			break;
			case "en":
			good(evet.target);
			break;
			case "ou":
			good(evet.target);
			break;
			case "pi":
			good(evet.target);
			break;
			case "quiu":
			good(evet.target);
			break;
			case "ar":
			good(evet.target);
			break;
			case "es":
			good(evet.target);
			break;
			case "ti":
			good(evet.target);
			break;
			case "iu":
			good(evet.target);
			break;
			case "vi":
			good(evet.target);
			break;
			case "dobol iu":
			good(evet.target);
			break;
			case "ex":
			good(evet.target);
			break;
			case "way":
			good(evet.target);
			break;
			case "zi":
			good(evet.target);
			break;
			case "first":
			good(evet.target);
			break;
			case "second":
			good(evet.target);
			break;
			case "third":
			good(evet.target);
			break;
			case "fourth":
			good(evet.target);
			break;
			case "fifth":
			good(evet.target);
			break;
			case "sixth":
			good(evet.target);
			break;
			case "seventh":
			good(evet.target);
			break;
			case "eighth":
			good(evet.target);
			break;
			case "ninth":
			good(evet.target);
			break;
			case "tenth":
			good(evet.target);
			break;
			case "eleventh":
			good(evet.target);
			break;
			case "twelfth":
			good(evet.target);
			break;
			case "thirteenth":
			good(evet.target);
			break;
			case "fourteenth":
			good(evet.target);
			break;
			case "fifteenth":
			good(evet.target);
			break;
			case "sixteenth":
			good(evet.target);
			break;
			case "seventeenth":
			good(evet.target);
			break;
			case "eighteenth":
			good(evet.target);
			break;
			case "nineteenth":
			good(evet.target);
			break;
			case "twentieth":
			good(evet.target);
			break;
			case "thirtieth":
			good(evet.target);
			break;
			case "fortieth":
			good(evet.target);
			break;
			case "fiftieth":
			good(evet.target);
			break;
			case "sixtieth":
			good(evet.target);
			break;
			case "seventieth":
			good(evet.target);
			break;
			case "eightieth":
			good(evet.target);
			break;
			case "ninetieth":
			good(evet.target);
			break;
			case "hundredth":
			good(evet.target);
			break;
			case "twenty-second":
			good(evet.target);
			break;
			case "thirty-first":
			good(evet.target);
			break;
			case "january":
			good(evet.target);
			break;
			case "february":
			good(evet.target);
			break;
			case "march":
			good(evet.target);
			break;
			case "april":
			good(evet.target);
			break;
			case "may":
			good(evet.target);
			break;
			case "june":
			good(evet.target);
			break;
			case "july":
			good(evet.target);
			break;
			case "august":
			good(evet.target);
			break;
			case "september":
			good(evet.target);
			break;
			case "october":
			good(evet.target);
			break;
			case "november":
			good(evet.target);
			break;
			case "december":
			good(evet.target);
			break;
			case "monday":
			good(evet.target);
			break;
			case "tuesday":
			good(evet.target);
			break;
			case "wednesday":
			good(evet.target);
			break;
			case "thursday":
			good(evet.target);
			break;
			case "friday":
			good(evet.target);
			break;
			case "saturday":
			good(evet.target);
			break;
			case "sunday":
			good(evet.target);
			break;
			case "winter":
			good(evet.target);
			break;
			case "summer":
			good(evet.target);
			break;
			case "spring":
			good(evet.target);
			break;
			case "autumn":
			good(evet.target);
			break;
			case "wintry":
			good(evet.target);
			break;
			case "autumnal":
			good(evet.target);
			break;
			case "summery":
			good(evet.target);
			break;
			case "it’s sunny":
			good(evet.target);
			break;
			case "cloudy":
			good(evet.target);
			break;
			case "foggy":
			good(evet.target);
			break;
			case "warm":
			good(evet.target);
			break;
			case "windy":
			good(evet.target);
			break;
			case "showery":
			good(evet.target);
			break;
			case "humid":
			good(evet.target);
			break;
			case "cold":
			good(evet.target);
			break;
			case "hot":
			good(evet.target);
			break;
			case "freezing":
			good(evet.target);
			break;
			case "fall":
			good(evet.target);
			break;
			default:
				comparafechas(evet);
			break;
		}
}

function good(elem)
{                              
	let claseelem = elem.parentNode.className;
	console.log(claseelem.length);
	if (claseelem.length > 7 )
	{
		elem.parentNode.className = claseelem.replace("icon-times","icon-check");
	}
	else
	{
		elem.parentNode.className = claseelem+" icon-check";
	}
}
function bad(elemt)
{                              
	let claseelem = elemt.parentNode.className;
	if (claseelem.length > 7 )
	{
		let xc = claseelem.replace("icon-times","")
		elemt.parentNode.className = xc;
		elemt.parentNode.className = xc+" icon-times";
	}
	else
	{
		elemt.parentNode.className = claseelem+" icon-times";
	}
	let v = cuentaerrores++
	err.innerHTML = v+" ERRORES";
}


var restar = document.getElementById("rest");
restar.addEventListener("click", function(){
	location.reload(true);
});





 
// -------------------------------------------------------------------------------

var fecha = new Date();
var diaespana = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var diaesp = ["Domingo","lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var meses = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"];
var mesesesp = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var horasmin = ["O´clock","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eigh","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","forty","forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine","O´clock"];
var horas = ["twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
var horasesp = ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12"];
var minesp = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60"];
function comprobardia(dia)
{  
	let txt;
	switch(dia)
	{	
		case 1:
		txt = "st";
		break
		case 21:
		txt = "st";
		break
		case 31:
		txt = "st";
		break
		case 2:
		txt = "nd";
		break
		case 22:
		txt = "nd";
		break
		case 3:
		txt = "rd";
		break
		case 23:
		txt = "rd";
		break
		default:
		txt = "th";
		break
	}
	return txt;
}


var f1 =document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");
var f7 = document.getElementById("f7");
var f8 = document.getElementById("f8");
var f9 = document.getElementById("f9");
var f10 = document.getElementById("f10");
var f11 = document.getElementById("f11");
var f12 = document.getElementById("f12");


var aleatorios = Math.floor(Math.random() * 1000);

fecha.setSeconds(90000 * aleatorios);
f1.innerHTML  = String(diaesp[fecha.getDay()]+" "+fecha.getDate()+" de "+mesesesp[fecha.getMonth()]+" del "+fecha.getFullYear());
var respuesta1 = String("it is "+diaespana[fecha.getDay()]+", "+meses[fecha.getMonth()]+" "+fecha.getDate()+comprobardia(fecha.getDate())+", "+fecha.getFullYear());

fecha.setSeconds(34678 * aleatorios);
f2.innerHTML += String(diaesp[fecha.getDay()]+" "+fecha.getDate()+" de "+mesesesp[fecha.getMonth()]+" del "+fecha.getFullYear());
var respuesta2 = String("it is "+diaespana[fecha.getDay()]+", "+meses[fecha.getMonth()]+" "+fecha.getDate()+comprobardia(fecha.getDate())+", "+fecha.getFullYear());

fecha.setSeconds(788635 * aleatorios);
f3.innerHTML += String(diaesp[fecha.getDay()]+" "+fecha.getDate()+" de "+mesesesp[fecha.getMonth()]+" del "+fecha.getFullYear());
var respuesta3 = String("it is "+diaespana[fecha.getDay()]+", "+meses[fecha.getMonth()]+" "+fecha.getDate()+comprobardia(fecha.getDate())+", "+fecha.getFullYear());

fecha.setSeconds(9876356 * aleatorios);
f4.innerHTML += String(diaesp[fecha.getDay()]+" "+fecha.getDate()+" de "+mesesesp[fecha.getMonth()]+" del "+fecha.getFullYear());
var respuesta4 = String("it is "+diaespana[fecha.getDay()]+", "+meses[fecha.getMonth()]+" "+fecha.getDate()+comprobardia(fecha.getDate())+", "+fecha.getFullYear());

fecha.setSeconds(754245 * aleatorios);
f5.innerHTML += String(diaesp[fecha.getDay()]+" "+fecha.getDate()+" de "+mesesesp[fecha.getMonth()]+" del "+fecha.getFullYear());
var respuesta5 = String("it is "+diaespana[fecha.getDay()]+", "+meses[fecha.getMonth()]+" "+fecha.getDate()+comprobardia(fecha.getDate())+", "+fecha.getFullYear());

fecha.setSeconds(556365 * aleatorios);
f6.innerHTML += String(diaesp[fecha.getDay()]+" "+fecha.getDate()+" de "+mesesesp[fecha.getMonth()]+" del "+fecha.getFullYear());
var respuesta6 = String("it is "+diaespana[fecha.getDay()]+", "+meses[fecha.getMonth()]+" "+fecha.getDate()+comprobardia(fecha.getDate())+", "+fecha.getFullYear());

function comparafechas(elve)
{	
	switch(elve.target.value)
	{
		case respuesta1:
			good(elve.target);
		break;
		case respuesta2:
			good(elve.target);
		break;
		case respuesta3:
			good(elve.target);
		break;
		case respuesta4:
			good(elve.target);			
		break;
		case respuesta5:
			good(elve.target);			
		break;
		case respuesta6:
			good(elve.target);
		break;
		case respuesta7:
			good(elve.target);
		break;
		case respuesta8:
			good(elve.target);
		break;
		case respuesta9:
			good(elve.target);
		break;
		case respuesta10:
			good(elve.target);
		break;
		case respuesta11:
			good(elve.target);
		break;
		case respuesta12:
			good(elve.target);
		break;
		default:
			bad(elve.target);
		break;
	}
}
var btn = document.getElementById("mostrarrespuestas");
btn.addEventListener("click", respuestasmostrar)
var btn2 = document.getElementById("mostrar2");
var res2 = document.getElementById("res2");
btn2.addEventListener("click", mostrarot2);
var x;
function respuestasmostrar()
{
	res.innerHTML = "answer one: <br>" + respuesta1 + "<br>" + "answer two: <br>" + respuesta2 + "<br>" + "answer three: <br>" + respuesta3 + "<br>" + "answer four: <br>" + respuesta4 + "<br>" + "answer five: <br>" + respuesta5 + "<br>" + "answer six: <br>" +respuesta6;
}

function ampmoclock(par)
{
	let indi;
	if (par >= 13) 
	{
		indi = "p.m.";
	}
	else if (par == 12)
	{
		indi = "m.";
	}
	else
	{
		indi = "a.m.";
	}
	return indi;	
}

var fechaa = new Date();
fechaa.setSeconds(45678 * aleatorios);
f7.innerHTML += String(horasesp[fechaa.getHours()]+":"+minesp[fechaa.getMinutes()]+" "+ampmoclock(fechaa.getHours()));
var respuesta7 = String(quitartiempo(fechaa.getMinutes()));

fechaa.setSeconds(9876 * aleatorios);
f8.innerHTML += String(horasesp[fechaa.getHours()]+":"+minesp[fechaa.getMinutes()]+" "+ampmoclock(fechaa.getHours()));
var respuesta8 = String(quitartiempo(fechaa.getMinutes()));

fechaa.setSeconds(12345 * aleatorios);
f9.innerHTML += String(horasesp[fechaa.getHours()]+":"+minesp[fechaa.getMinutes()]+" "+ampmoclock(fechaa.getHours()));
var respuesta9 = String(quitartiempo(fechaa.getMinutes()));

fechaa.setSeconds(7654 * aleatorios);
f10.innerHTML += String(horasesp[fechaa.getHours()]+":"+minesp[fechaa.getMinutes()]+" "+ampmoclock(fechaa.getHours()));
var respuesta10 = String(quitartiempo(fechaa.getMinutes()));

fechaa.setSeconds(12345 * aleatorios);
f11.innerHTML += String(horasesp[fechaa.getHours()]+":"+minesp[fechaa.getMinutes()]+" "+ampmoclock(fechaa.getHours()));
var respuesta11 = String(quitartiempo(fechaa.getMinutes()));

fechaa.setSeconds(76543 * aleatorios);
f12.innerHTML += String(horasesp[fechaa.getHours()]+":"+minesp[fechaa.getMinutes()]+" "+ampmoclock(fechaa.getHours()));
var respuesta12 = String(quitartiempo(fechaa.getMinutes()));
function quitartiempo(parametros)
{
	var valor;
	if (parametros >= 31) 
	{
		valor = 60 - parametros;
		x = +1;
		return "it is "+horasmin[valor]+" to "+horas[fechaa.getHours()+(x)];
	}
	else if (parametros == 0) 
	{
	   return "it is "+horas[fechaa.getHours()]+" "+horasmin[parametros]; 	
	}
	else
	{
		x = 0;
		return "it is "+horasmin[parametros]+" past "+horas[fechaa.getHours()+(x)];
	}
}

function mostrarot2()
{
	res2.innerHTML = "answer one: <br>" + respuesta7 + "<br>" + "answer two: <br>" + respuesta8 + "<br>" + "answer three: <br>" + respuesta9 + "<br>" + "answer four: <br>" + respuesta10 + "<br>" + "answer five: <br>" + respuesta11 + "<br>" + "answer six: <br>" +respuesta12;
}