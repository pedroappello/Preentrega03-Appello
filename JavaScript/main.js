
let titulo = document.getElementsByTagName ("h1")
titulo[0].innerText = "Fundacion Pequeños Heroes";

let subtitulo = document.getElementsByTagName ("h3")
subtitulo[0].innerText = "formulario de donaciones";

const fechaInscripcion = new Date()
fechaInscripcion.toLocaleDateString

const formulario = document.getElementById("formulario");


formulario.addEventListener('donar', function(evento){ 
evento.preventDefault();
const nombre = document.getElementsByClassName("nombre")
const apellido = document.getElementsByClassName("apellido")
const monto = document.getElementsByClassName("monto")
  
  const datosFormulario = {
    nombre: nombre,
    apellido: apellido,
    monto: monto,
    };

  localStorage.setItem('informacion del donante', JSON.stringify(datosFormulario));

  formulario.reset();
});

let textoIngresado = document.getElementsByClassName("texto")
let mensaje = document.getElementsByTagName("br")

textoIngresado.addEventListener("input", () => {
    mensaje.innerHTML = 'escribiendo...';
})

