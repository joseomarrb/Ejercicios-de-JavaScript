/**
 * Escribe un script de nombre creaDiv() que crea un nuevo bloque div 
 * en la página modelo. El bloque se creará al pulsar el botón con texto Crear, 
 * sus colores serán texto blanco con fondo rojo y el texto quedará centrado. 
 * Este texto consiste en la cadena Javascript permite crear páginas dinámicas.
 * 
 * Aclaraciones: El botón ya existe solo es necesario escribir la función, 
 * procurando usar los métodos de document para crear nodos.
 */

const header = document.querySelector(".header");

function crearDiv() {
    const div = document.createElement("DIV");
    div.textContent = "Este texto consiste en la cadena Javascript permite crear páginas dinámicas."
    div.style.color = "white";
    div.style.backgroundColor = "red";
    div.style.textAlign = "center";
    header.appendChild(div);
}