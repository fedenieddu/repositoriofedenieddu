const descripcionmercedes = document.getElementById("descmerc");
const descripcionferrari = document.getElementById("descferrari");
const descripcionredbull = document.getElementById("descrb");
const descripcionfotom = document.getElementById("descripcion_foto_mercedes");
const descripcionfotof = document.getElementById("descripcion_foto_ferrari");
const descripcionfotor= document.getElementById("descripcion_foto_rb");

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
  threshold: 0.2,
});
observador.observe(descripcionmercedes);
observador.observe(descripcionferrari);
observador.observe(descripcionredbull);
observador.observe(descripcionfotom);
observador.observe(descripcionfotof);
observador.observe(descripcionfotor);
