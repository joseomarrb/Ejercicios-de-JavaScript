/**
 * Escribe un script que responda al evento scroll y que muestre un boton 
 * o bloque div en el fondo de la pantalla cuando deje de verse la linea 
 * superior del documento.
 * 
 * 
 * <head>            
 * <style>             
 * #boton{ position: absolute; display:none}           
 * body{height: 200vh}            
 *  </style>            
 * </head>            
 *  <body>            
 * Primera linea o cabecera           
 * <div id="boton">Boton</div>                          
 * </body>
 * 
 * Aclaraciones: El botón se queda quieto en el fondo de la pantalla. 
 * Recuerda que el alto de la ventana del navegador viene dado por window.innerHeight 
 * mientras que el desplazamiento vertical de la ventana está en window.scrollY
 */

const btn = document.querySelector('#boton');

document.addEventListener('scroll', () => {
    const coordY = window.scrollY;

    if (coordY > window.innerHeight ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});