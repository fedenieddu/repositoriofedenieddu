const imagenlewis = document.getElementById("lh");
const imagenseb = document.getElementById("sv");
const imagenfalo= document.getElementById("fa");
const imagenmax= document.getElementById("mv");

const cargarImagen = (entradas,observador)=>{
    entradas.forEach((entrada)=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible")
        }
    })
}
const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin:'0px 0px 0px 0px',
    threshold: 0.7
});
observador.observe(imagenlewis)
observador.observe(imagenseb)
observador.observe(imagenfalo)
observador.observe(imagenmax)