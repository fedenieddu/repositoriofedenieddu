var fechaCountdown = new Date("Nov 20, 2022 15:00:00").getTime();

var x = setInterval(function () {
  var hoy = new Date().getTime();

  var distancia = fechaCountdown - hoy;
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "LA TEMPORADA TERMINO";
  }
}, 1000);
