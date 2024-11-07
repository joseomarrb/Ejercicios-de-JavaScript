/**
 * En la página web modelo ves que tienes un titular Hola Mundo. 
 * Se trata de añadir una función javascript para que al pulsar el botón 
 * cambiar este título se convierta en Hola Mundo con Javascript . 
 * El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() 
 * que aparece en el código de la página.
 * 
 * Aclaraciones: Debe cambiar de Hola Mundo a Hola Mundo Javascript
 */

const boton = document.querySelector("#boton");
const titular = document.querySelector("#titular");

function cambiar() {
    titular.textContent = "Hola Mundo JavaScript";
    titular.style.color = "red";
    titular.style.textAlign = "center";
}