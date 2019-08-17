
var elementos = document.getElementsByTagName("input");
var td = document.getElementsByTagName("td");
var restar = document.getElementById("rest");
restar.addEventListener("click", function(){
	location.reload(true);
});
var botonverifica = document.getElementById("btn");
botonverifica.addEventListener("click", a);
function a()
{
	botonverifica.style.backgroundColor = "#027F9E";
	for (let v in elementos) 
	{
		var valorinput = elementos[v].value
		switch (v) 
		{
				case "0":
			if (valorinput == "One") 
			{
				good(td[1]);
			}
     				break;
				  	case "1":
			if (valorinput == "Two") 
			{
				good(td[3]);
			}
     				break;
     				case "2":
			if (valorinput == "Three") 
			{
				good(td[5]);
			}
     				break;
     				case "3":
			if (valorinput == "Four") 
			{
				good(td[7]);
			}
     				break;
     				case "4":
			if (valorinput == "Five") 
			{
				good(td[9]);
			}
     				break;
     				case "5":
			if (valorinput == "Six") 
			{
				good(td[11]);
			}
     				break;
     				case "6":
			if (valorinput == "Seven") 
			{
				good(td[13]);
			}
     				break;
     				case "7":
			if (valorinput == "Eight") 
			{
				good(td[15]);
			}
     				break;
     				case "8":
			if (valorinput == "Nine") 
			{
				good(td[17]);
			}
     				break;
     				case "9":
			if (valorinput == "Ten") 
			{
				good(td[19]);
			}
     				break;
   					case "10":
			if (valorinput == "Eleven") 
			{
				good(td[21]);
			}
     				break;
 					case "11":
			if (valorinput == "Twelve") 
			{
				good(td[23]);
			}
     				break;
     				case "12":
			if (valorinput == "Thirteen") 
			{
				good(td[25]);
			}
     				break;
     				case "13":
			if (valorinput == "Fourteen") 
			{
				good(td[27]);
			}
     				break;
     				case "14":
			if (valorinput == "Fifteen") 
			{
				good(td[29]);
			}
     				break;
     				case "15":
			if (valorinput == "Sixteen") 
			{
				good(td[31]);
			}
     				break;
     				case "16":
			if (valorinput == "Seventeen") 
			{
				good(td[33]);
			}
     				break;
     				case "17":
			if (valorinput == "Eighteen") 
			{
				good(td[35]);
			}
     				break;
     				case "18":
			if (valorinput == "Nineteen") 
			{
				good(td[37]);
			}
     				break;
			case "19":
			if (valorinput == "Twenty") 
			{
				good(td[39]);
			}
     				break;
     				case "20":
			if (valorinput == "Thirty") 
			{
				good(td[41]);
			}
     				break;
     				case "21":
			if (valorinput == "Forty") 
			{
				good(td[43]);
			}
     				break;
     				case "22":
			if (valorinput == "Fifty") 
			{
				good(td[45]);
			}
     				break;        				   
     				case "23":
			if (valorinput == "Sixty") 
			{
				good(td[47]);
			}
     				break;
     				case "24":
			if (valorinput == "Seventy") 
			{
				good(td[49]);
			}
     				break;
     				case "25":
			if (valorinput == "Eighty") 
			{
				good(td[51]);
			}
     				break;
     				case "26":
			if (valorinput == "Ninety") 
			{
				good(td[53]);
			}
     				break;
     				case "27":
			if (valorinput == "One hundred") 
			{
				good(td[55]);
			}
     				break;
     				case "28":
			if (valorinput == "One thousand") 
			{
				good(td[57]);
			}
     				break;
     				case "29":
			if (valorinput == "One million") 
			{
				good(td[59]);
			}
     				break;
     				case "30":
			if (valorinput == "Zero") 
			{
				good(td[61]);
			}
     				break;
     				case "":
     				console.log("esta vacio");
     				break;
 					default:
 					//console.log("no es correcto");
 					break;
		}
	}
}
function good(elem)
{                              
	elem.className = "ok";
}

			