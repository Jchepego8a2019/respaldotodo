
var labelingresar = document.getElementById("openIngresar");
labelingresar.addEventListener("click", abrir);

var labelEngresar = document.getElementById("openEgresar"); 
labelEngresar.addEventListener("click", abrir);


function abrir(event)
{
	var contingre1 = document.getElementById("contingre");
	var contEngre1 = document.getElementById("contEngre");
	if (event.srcElement.id == "openIngresar") 
	{
		if (contingre1.className == "contenedorIngresos ingre25") 
		{
			contingre1.className = "contenedorIngresos";
			labelingresar.innerHTML = "open";
		}
		else
		{
			contingre1.className = "contenedorIngresos ingre25";
			labelingresar.innerHTML = "X";
		}
	}

	if (event.srcElement.id == "openEgresar") 
	{
		if (contEngre1.className == "contenedorEgresos ingre15") 
		{
			contEngre1.className = "contenedorEgresos";
			labelEngresar.innerHTML = "open";
		}
		else
		{
			contEngre1.className = "contenedorEgresos ingre15";
			labelEngresar.innerHTML = "X";
		}
	}
}






// ---------------------------------BASE DE DATOS--------------------------------------------------
var base_indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;//paso1
var object = null;
	var dataBase = base_indexedDB.open("myDBlocal", 1); 
	dataBase.onupgradeneeded = function(e) 
	{
	 	var options = { 
	 		keyPath : 'id', 
	 		autoIncrement : true 
	 	};
	 	var active = dataBase.result;    
	 	object = active.createObjectStore('almacen', options); 
    	console.log(object);
	 	object.createIndex('indicetitulo', 'titulo', { unique : false });  
	 	object.createIndex('indiceproducto', 'producto', { unique : false });  
	 	object.createIndex('indicecantidad', 'cantidad', { unique : false }); 
	 	object.createIndex('indicefecha', 'fecha', { unique : false }); 
	 	object.createIndex('indiceobservacion', 'observacion', { unique : false }); 
    };
    dataBase.onsuccess = function(e)
    {
    	console.log("se creo el almacen con su index");
    };
    
    dataBase.onerror = function(e)  
    {
    	console.log("no se cargo base de datos");
    };

 var iraegresos = document.getElementById("iraegresos");
 iraegresos.addEventListener('click', giraizqd);
function giraizqd()
{
	document.getElementById("card").className = 'card girar';
 	loaddata();
}

var iraingresos = document.getElementById("iraingresos");
 iraingresos.addEventListener('click', giraderch);
 function giraderch ()
 {
 	document.getElementById("card").className = 'card regresar';
 	loaddata();
 }

//-------------------------ALMACENAR DATOS--------------------------------------------------
var botoningresar = document.getElementById("enviaringreso");
botoningresar.addEventListener("click", almacenardatosingreso);
function almacenardatosingreso()
{
	if (document.querySelector('#producto').value != "" || document.querySelector('#cantidadingreso').value != "" || document.querySelector('#fechaingreso').value != "" || document.querySelector('#observacioningreso').value != "") 
	{
		var active = dataBase.result;
		var data = active.transaction(["almacen"], "readwrite"); 
		var objetc_instruccion = data.objectStore('almacen'); 
	    var request_ = objetc_instruccion.put({  
	    	titulo : document.querySelector('#h2ingreso').innerHTML,
	    	producto : document.querySelector('#producto').value,
	    	cantidad : document.querySelector('#cantidadingreso').value,
	    	fecha : document.querySelector('#fechaingreso').value,
	    	observacion : document.querySelector('#observacioningreso').value
	    });
	    		
	    request_.onerror = function(e)
	    {
	    	console.log(request_.error.name + '/n/n' + request_.error.massage);
	    };

	    data.oncomplete = function(e)
	    {
	    	document.querySelector('#producto').value = '';
	    	document.querySelector('#cantidadingreso').value = '';
	    	document.querySelector('#fechaingreso').value = '';
	    	document.querySelector('#observacioningreso').value = '';
	    	console.log('se completo todas las instruciones de ingreso');
	    };
	}else{alert("LLene todos los espacios en blanco");}
	
}


var botonegresar = document.getElementById("enviaregreso");
botonegresar.addEventListener("click", descargardatos);
function descargardatos()
{
	if (document.querySelector('#productocomprado').value != "" || document.querySelector('#cantidadegreso').value != "" || document.querySelector('#fechaengreso').value != "" || document.querySelector('#observacionengreso').value != "") 
	{
		var active = dataBase.result;
		var data = active.transaction(["almacen"], "readwrite"); 
		var objetc_instruccion = data.objectStore('almacen'); 
	    var request_ = objetc_instruccion.put({  
	    	titulo : document.querySelector('#h2egreso').innerHTML,
	    	producto : document.querySelector('#productocomprado').value,
	    	cantidad : document.querySelector('#cantidadegreso').value,
	    	fecha : document.querySelector('#fechaengreso').value,
	    	observacion : document.querySelector('#observacionengreso').value
	    });
	    		
	    request_.onerror = function(e)
	    {
	    	console.log(request_.error.name + '/n/n' + request_.error.massage);
	    };

	    data.oncomplete = function(e)
	    {
	    	document.querySelector('#productocomprado').value = '';
	    	document.querySelector('#cantidadegreso').value = '';
	    	document.querySelector('#fechaengreso').value = '';
	    	document.querySelector('#observacionengreso').value = '';
	    	console.log('se completo todas las instruciones de egreso');
	    };
	}else{alert("LLene todos los espacios en blanco");}
}


//-------------------RECUPERAMOS LOS DATOS DE LA BASE DE DATOS------------------------------------------------------
function loaddata()
{
	var active = dataBase.result;
	var data = active.transaction(['almacen'], 'readonly');
	var object = data.objectStore('almacen');
	var elements = [];
	var subindice = object.index('indicefecha');
	//ejecutamos un metodo de indexedDB y abre el almacen peaple y coloca el puntero en la posicion inicial que es 0
	subindice.openCursor().onsuccess = function(e)
	{
		//asignamos el puntero
		var result = e.target.result;
		//si cuando result es null 
		if (result === null) 
		{
			return;
		}
		elements.push(result.value);
		result.continue();
	};

	data.oncomplete = function()
	{
		document.getElementById("contenidoingreso").innerHTML = "";
		document.getElementById("contenidoegreso").innerHTML = "";
		var subtotalingresos = 0;
		var subtotalegresos = 0;
		var num = 0, num2 = 0; 
		for (var key in elements)
		{
			console.log(elements[key].titulo);
			if (elements[key].titulo == "Ingresos") 
			{
				document.getElementById("contenidoingreso").innerHTML += "<table border=1><th>fecha</th><th>producto</th><th>cantidad</th><tr><td>"+elements[key].fecha+"</td><td>"+elements[key].producto+"</td><td>"+elements[key].cantidad+"</td><tr><th colspan=3>observacion</th></tr><tr><td colspan=3>"+elements[key].observacion+"</td></tr></table><br>";
				num += parseFloat(elements[key].cantidad);
				console.log(num);
				subtotalingresos = num.toFixed(2);
			}
			else if (elements[key].titulo == "Compras")
			{
				document.getElementById("contenidoegreso").innerHTML += "<table border=1><th>fecha</th><th>producto</th><th>cantidad</th><tr><td>"+elements[key].fecha+"</td><td>"+elements[key].producto+"</td><td>"+elements[key].cantidad+"</td><tr><th colspan=3>observacion</th></tr><tr><td colspan=3>"+elements[key].observacion+"</td></tr></table><br>";
				num2 += parseFloat(elements[key].cantidad);
				console.log(num2);
				subtotalegresos = num2.toFixed(2);
			}
		}
		document.getElementById("subtotalingresos").innerHTML = "El total de todos los ingresos es $" + subtotalingresos;
		document.getElementById("subtotalegresos").innerHTML = "El total de todos los egresos es $" + subtotalegresos;
	}
}

// ---------------------BORRAR EL ALMACEN---------------------------------------
var borra = document.getElementById("borraalmacenes");
borra.addEventListener("click", eliminartodo);
function eliminartodo()
{
	var active = dataBase.result;
	var data = active.transaction(['almacen'], 'readwrite');
	var object = data.objectStore('almacen');
	document.getElementById("contenidoingreso").innerHTML = "";
	document.getElementById("contenidoegreso").innerHTML = "";


	var mensaje;
    var opcion = confirm("Realmente quieres borrar todos los datos");
    if (opcion == true) 
    {
		object.clear();
	} 
}
