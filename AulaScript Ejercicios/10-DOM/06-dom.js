/**
 * En este script debes leer todos los elementos tipo imagen de la 
 * página y mostrar sus urls en un bloque tipo div cuyo id es fuentes 
 * y que ya existe en la página modelo usada para estos ejercicios. 
 * El script se ejecutará al pulsar el botón con el texto fuentes
 * 
 * Aclaraciones: El bloque ya está creado solo tienes que crear la función 
 * denominada fuentesImg() asociada al botón fuentes
 */

const fuentes = document.querySelector("#fuentes");

function fuentesImg() {
    fuentes.style.textAlign = "center";
    const imagenes = document.querySelectorAll("img");
    imagenes.forEach( img => {
        fuentes.textContent += `${img.src}`
    })
}