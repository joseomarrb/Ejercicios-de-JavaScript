/**
 * Necesitas una página web con dos bloques div. El primer bloque contiene el texto 
 * "Pasa por aqui" y el segundo "Efectos del movimiento" con un argumento id = "efecto" . 
 * Cuando el ratón pase por el primer bloque se llamará a la función color que cambia 
 * el fondo del segundo bloque a color verde (backgroundColo:  green");
 * 
 * Aclaraciones: Recuerda que los nodos se pueden seleccionar con getElementById(). 
 * Usa estilos en linea (style)
 */

const divEfecto = document.getElementById("efecto");
const divPasar = document.getElementById("pasar");

divPasar.addEventListener('mouseenter', () => {
    divEfecto.style.backgroundColor = 'green'
});