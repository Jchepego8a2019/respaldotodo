	 	var teclado = document.getElementById("tcld");

    	var tecla1 = document.getElementById("tecla1");
    	var tecla2 = document.getElementById("tecla2");
    	var tecla3 = document.getElementById("tecla3");

    	var tecla4 = document.getElementById("tecla4");
    	var tecla7 = document.getElementById("tecla7");	
    	var tecla10 = document.getElementById("tecla10");	
    	var tecla13 = document.getElementById("tecla13");	

		var vidrio = document.getElementById("vidrio"); 
		var rotar = document.getElementById("rotarcontenedor_acceso");
    	
    	const num = 42;
		var placacceso = document.getElementById("placacceso"); 
		var baselector = document.getElementById("baselector"); 
		var elem = document.getElementsByClassName("anch");

		placacceso.addEventListener("touchmove",touchcontrol);
		function touchcontrol(evt) 
		{
			var mov = evt.touches[0];
			moververtical(mov);
		}

	   	placacceso.addEventListener("mousemove", moververtical, false);
	    function moververtical(e)
		{
			var w = placacceso.clientWidth / 1.8;
			var h = placacceso.clientHeight / 3;
		    var x = e.pageX - w;
			var y = e.pageY - h;
    		var valor42 = y + num;

			// if (valor42 >= teclado.offsetTop) 
			// {
			// 	baselector.style.top = y + "px";
			// 	// detectar(valor42);
			// }
			// else
			// {
			// 	baselector.style.top = (tecla1.offsetTop - 42) + "px";
			// }

			// vidrio.innerHTML = x;
			if (x > 500) 
	  		{
	  			rotar.className = "bg contenededor_acceso dergira";
	  		}
	  		else
			{
				rotar.className = "bg contenededor_acceso";	
			}

		    if (x < 0) 
		    {
			   	 if (x < -113)
			    {
			    	rotar.className = "bg contenededor_acceso izqgira";
			    }
				else
				{
					rotar.className = "bg contenededor_acceso";	
				}
		   }

			// vidrio.innerHTML = "valor42="+valor42;
			// vidrio1.innerHTML = "primera="+ tecla13.offsetTop + " segunda=" + tecla10.offsetTop;
			// baselector.style.left = x + "px";
		}


		// function detectar(vlr)
		// {			
		// 	if (vlr > tecla1.offsetTop  && vlr < tecla1.offsetTop + 5) 
		// 	{
		// 		tecla1.className = "bg anch frente";
		// 		tecla1.style.color = "green";	
		// 		tecla2.className = "bg anch frente";
		// 		tecla2.style.color = "green";	
		// 		tecla3.className = "bg anch frente";
		// 		tecla3.style.color = "green";				
		// 	}
		// 	else
		// 	{
		// 		tecla1.className = "bg anch";
		// 		tecla1.style.color = "transparent";	
		// 		tecla2.className = "bg anch";
		// 		tecla2.style.color = "transparent";	
		// 		tecla3.className = "bg anch";
		// 		tecla3.style.color = "transparent";				
		// 	}

		// 	if (vlr > tecla4.offsetTop  && vlr < tecla4.offsetTop + 5) 
		// 	{
		// 		tecla4.className = "bg anch frente";
		// 		tecla4.style.color = "green";	
		// 		tecla5.className = "bg anch frente";
		// 		tecla5.style.color = "green";	
		// 		tecla6.className = "bg anch frente";
		// 		tecla6.style.color = "green";				
		// 	}
		// 	else
		// 	{
		// 		tecla4.className = "bg anch";
		// 		tecla4.style.color = "transparent";	
		// 		tecla5.className = "bg anch";
		// 		tecla5.style.color = "transparent";	
		// 		tecla6.className = "bg anch";
		// 		tecla6.style.color = "transparent";				
		// 	}

		// 	if (vlr > tecla7.offsetTop  && vlr < tecla7.offsetTop + 5) 
		// 	{
		// 		tecla7.className = "bg anch frente";
		// 		tecla7.style.color = "green";	
		// 		tecla8.className = "bg anch frente";
		// 		tecla8.style.color = "green";	
		// 		tecla9.className = "bg anch frente";
		// 		tecla9.style.color = "green";				
		// 	}
		// 	else
		// 	{
		// 		tecla7.className = "bg anch";
		// 		tecla7.style.color = "transparent";	
		// 		tecla8.className = "bg anch";
		// 		tecla8.style.color = "transparent";	
		// 		tecla9.className = "bg anch";
		// 		tecla9.style.color = "transparent";				
		// 	}

		// 	if (vlr > tecla10.offsetTop  && vlr < tecla10.offsetTop + 5) 
		// 	{
		// 		tecla10.className = "bg anch frente";
		// 		tecla10.style.color = "green";	
		// 		tecla11.className = "bg anch frente";
		// 		tecla11.style.color = "green";	
		// 		tecla12.className = "bg anch frente";
		// 		tecla12.style.color = "green";				
		// 	}
		// 	else
		// 	{
		// 		tecla10.className = "bg anch";
		// 		tecla10.style.color = "transparent";	
		// 		tecla11.className = "bg anch";
		// 		tecla11.style.color = "transparent";	
		// 		tecla12.className = "bg anch";
		// 		tecla12.style.color = "transparent";				
		// 	}

		// 	if (vlr > tecla13.offsetTop  && vlr < tecla13.offsetTop + 5) 
		// 	{
		// 		tecla13.className = "bg anch frente";
		// 		tecla13.style.color = "green";	
		// 		tecla14.className = "bg anch frente";
		// 		tecla14.style.color = "green";	
		// 		tecla15.className = "bg anch frente";
		// 		tecla15.style.color = "green";				
		// 	}
		// 	else
		// 	{
		// 		tecla13.className = "bg anch";
		// 		tecla13.style.color = "transparent";	
		// 		tecla14.className = "bg anch";
		// 		tecla14.style.color = "transparent";	
		// 		tecla15.className = "bg anch";
		// 		tecla15.style.color = "transparent";				
		// 	}
		// }
		

		// --------------------creamos el evento click de cada boton----------------------------------------                                                                
		for (var v in elem) 
		{
			elem[v].addEventListener("click", valorcadaboton, false);
		}
		
		function valorcadaboton(e)
		{
			if (e.target.innerHTML != "Clear") 
			{
				if (e.target.innerHTML != "Ok") 
				{
					vidrio.innerHTML += e.target.innerHTML;
					e.target.style.backgroundColor = "#59F90A";						
				}	
				else
				{
					if (vidrio.innerHTML == "α6β729Ω8") 
					{
						document.location.target = "_blank";
       					document.location.href = "principalinicio.html";
       					// α6β729Ω8
					}
					else
					{
						alert("Contraseña Incorrecta");
						vidrio.innerHTML = "";
						for (var v in elem) 
						{
							// elem[v].addEventListener("click", valorcadaboton, false);
							elem[v].style.backgroundColor = "#F5F099";			
						}
					}
				}

			}
			else
			{
				vidrio.innerHTML = "";
				for (var v in elem) 
				{
					// elem[v].addEventListener("click", valorcadaboton, false);
					elem[v].style.backgroundColor = "#F5F099";			
				}
			}
			
		}

		
		



