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

  // <script type="text/javascript" src="../portafoliojuan2019_javascript/fondoanimado.js"></script>