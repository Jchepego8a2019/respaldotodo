var dimenciones = {
	ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	ladoTiles: 100, //tile son los cuadraditos que forman un mapa
	escala: 1,
	iniciar: function(){
		window.addEventListener("resize", function(evento){
		dimenciones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		dimenciones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		console.log("ancho: " + dimenciones.ancho + "| alto: " + dimenciones.alto);
		inicio.recargarTiles();
		});
	},
	obtenerTilesHorizontales: function(){
		var ladoFinal = dimenciones.ladoTiles * dimenciones.escala;
		return Math.ceil((dimenciones.ancho - ladoFinal) / ladoFinal)
	},
	obtenerTilesVerticales: function(){
		var ladoFinal = dimenciones.ladoTiles * dimenciones.escala;
		return Math.ceil((dimenciones.alto - ladoFinal) / ladoFinal)
	},
	obtenerTotalTiles: function(){
		return dimenciones.obtenerTilesHorizontales() * dimenciones.obtenerTilesVerticales();
	}

};

