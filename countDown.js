let fechaCountdown = new Date("Nov 20, 2022 15:00:00").getTime();

let x = setInterval(function () {
  let hoy = new Date().getTime();

  let distancia = fechaCountdown - hoy;
  let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  let horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "LA TEMPORADA TERMINO";
  }
}, 1000);
