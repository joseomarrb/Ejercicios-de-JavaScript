/**
 * Escribe el código de una función nuevoBloque() que deberá crear un nuevo 
 * elemento div, con una class de nombre destacar. El bloque contendrá, en negrita, 
 * el texto Página Modelo. Este bloque debe aparecer justo antes del bloque subtitulo 
 * es decir justo después del titular de la página. Se activará con el botón superior 
 * que contiene el texto Subtitulo
 * 
 * Aclaraciones: La función se llamara intercalar()
 */

const body = document.body;
const subtitulo = document.querySelector("#subtitulo");

function intercalar() {
    const div = document.createElement("DIV");
    div.classList.add("destacar");
    div.textContent = "Página Modelo";
    body.insertBefore(div, subtitulo)
}