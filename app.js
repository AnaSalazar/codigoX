var gato = 4;
var conejo = 2.500;
var perro = 10;
var boton = document.getElementById('boton');
boton.addEventListener("click", cuestionario);

function cuestionario() {
  var nombre = prompt("Hola ¿Cómo te llamas?");
  var peso = parseInt(prompt("Que lindo nombre. ¿Cuál es tu peso?"));
  var animal = prompt("¿Con qué animalito quieres hacer la conversión? \n Selecciona 1-Gato 2-Perro 3-Conejo");

  sacarResultado(nombre, peso, animal);
}

function sacarResultado(nombre, peso, animal) {
  var resultado = peso / gato;
  console.log(nombre + "Tu peso es equivalente a " + resultado);
}
