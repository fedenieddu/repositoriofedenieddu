const descripcionmercedes = document.getElementById("descmerc");
const descripcionferrari = document.getElementById("descferrari");
const descripcionredbull = document.getElementById("descrb");

const cargarImagen = (entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
};
const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.7,
});
observador.observe(descripcionmercedes);
observador.observe(descripcionferrari);
observador.observe(descripcionredbull);
