/**
 * Tienes la página web modelo que debe cambiar el color del titular del 
 * negro actual a rojo y además debe quedar centrado. El único cambio será 
 * en el bloque cambiar y el código de función cambiar()
 * 
 * Aclaraciones: El bloque cambiar acepta el click, el color del titular 
 * cambia a rojo y queda centrado
 */

const boton = document.querySelector(".boton");
const titular = document.querySelector("#titular");

function cambiar() {
    titular.style.color = "red";
    titular.style.textAlign = "center";
}

