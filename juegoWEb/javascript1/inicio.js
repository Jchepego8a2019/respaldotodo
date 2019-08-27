//ctrl + F5 recargar limpiando la cache

document.addEventListener("DOMContentLoaded", function(){
	inicio.iniciarJuago();

}, false);

var inicio = {
	iniciarJuago: function(){
		console.log("juego iniciado ok");
		dimenciones.iniciar();
		inicio.recargarTiles();
		buclePrincipal.iterar();
	},
	recargarTiles: function(){
		document.getElementById("juego").innerHTML = "";
		for (var Y = 0; Y < dimenciones.obtenerTilesVerticales(); y++) {
			for (var x = 0; x < dimenciones.obtenerTilesHorizontales(); x++) {
				console.log(y+"|||||"+x)
				var r = new Rectangulo(x * dimenciones.ladoTiles, y * dimenciones.ladoTiles, dimenciones.ladoTiles, dimenciones.ladoTiles);
			}
		}
	}		
};