/**
 * En esta página tienes dos bloques div a modo de botones, como ves en este código 
 * HTML de abajo. Debes escribir una única función Javascript (llamada pulsar) 
 * para manejar los eventos click de ambos botones. Cuando pulses con el ratón 
 * en cualquier botón deberá aparecer una ventana alert indicando el id del botón 
 * donde se ha pulsado.
 * 
 * <head>            
 * <style>               
 *.boton{display:block; width:100px;cursor:pointer;margin: 10px;border:1px solid black}              
 * </style>                 
 * </head>               
 * <body>               
 * <div id="boton1" class="boton">Pulsar aquí</div>             
 * <div id="boton2" class="boton">Pulsar aquí</div>             
 * </body>
 * 
 * Aclaraciones: Debes usar el objeto event para este ejercicio. Coloca el script al final de la página.
 */

function pulsar(event) {
    alert(`Has pulsado el BOTON con el ID: ${event.target.id}`);
};
