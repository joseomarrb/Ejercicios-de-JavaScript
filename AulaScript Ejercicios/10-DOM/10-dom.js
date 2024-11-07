/**
 * El primer botón de la barra de botones en la parte superior de la página 
 * tiene el texto abrir/cerrar. Al pulsarlo se deben ocultar o mostrar los 
 * botones restantes, pero el de abrir/cerrrar debe quedar visible.
 * 
 * El valor de la propiedad display de los botones es inline-block. La barra 
 * tiene en el atributo class el valor botones y cada botón tiene como clase boton
 */
const botonAbrirCerrar = document.querySelector('.botones .boton');
const otrosBotones = Array.from(document.querySelectorAll('.botones .boton')).slice(1);

function toggle() {
    botonAbrirCerrar.addEventListener('click', () => {
        otrosBotones.forEach(boton => {
            boton.style.display = boton.style.display === 'none' ? 'inline-block' : 'none';
        });
    });    
}