////main loop este es el bucle principal que nunca se dejara de ejecutar

//namespace (espacio de nombre) estructura de codigo aislada solo puede haber un namespace  y este puede contener funciones o atributos
var buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	//actualizaciones por segundo
	aps: 0,
	//frame por segundo
	//registroTemporal lo obtenemos de la ejecucion de window.requestAnimationFrame ose un evento
	fps: 0,	
	iterar: function(registroTemporal){
		//callback le pasamos un metodo como argumento a otro metodo y este se ejecutara despues que el metodo que lo contiene se ejecute con todas sus lineas de codigo
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);  
		buclePrincipal.actualizar(registroTemporal);
		buclePrincipal.dibujar(registroTemporal);
		
		if (registroTemporal - buclePrincipal.ultimoRegistro > 999) {
			buclePrincipal.ultimoRegistro = registroTemporal;
			console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
			buclePrincipal.aps = 0;
			buclePrincipal.fps = 0;
		}
	},
	detener: function(registroTemporal){

	},
	actualizar: function(registroTemporal){
		buclePrincipal.aps++;
	},
	dibujar: function(registroTemporal){
		buclePrincipal.fps++;
	}
};