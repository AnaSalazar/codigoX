var gato = 4;
var conejo = 2.500;
var perro = 10;
var boton = document.getElementById('boton');
boton.addEventListener("click", cuestionario);

function cuestionario() {
  var nombre = prompt("Hola ¿Cómo te llamas?");
  var peso = parseInt(prompt("Que lindo nombre. ¿Cuál es tu peso?"));
  var eleccion = parseInt(prompt("¿Con qué animalito quieres hacer la conversión? \n Selecciona 1-Gato 2-Perro 3-Conejo"));

  sacarResultado(nombre, peso, eleccion);
}

function sacarResultado(nombre, peso, eleccion) {
  var resultado = 0;
  var respuesta = "";

  switch (eleccion) {
    case 1:
      resultado = peso / gato;
      respuesta = nombre + " tu peso equivale a " + resultado + " gatos."
      break;
    case 2:
      resultado = peso / perro;
      respuesta = nombre + " tu peso equivale a " + resultado + " perros."
      break;
    case 3:
      resultado = peso / conejo;
      respuesta = nombre + " tu peso equivale a " + resultado + " conejos."
      break;
  default:
    resultado = 0;
    respuesta = "Metiste datos incorrectos, intenta de nuevo";
  }

  var respuestaHtml = document.getElementById("resultado");
  respuestaHtml.innerHTML = respuesta;
};
