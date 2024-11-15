/**
 * La página descrita con este código HTML posee dos bloques div cuyos atributos 
 * id son cX, cY. Debes escribir un manejador para el evento de movimiento del 
 * ratón por el documento. Este script deberá anotar en los cuadros cX y cY las 
 * coordenadas donde se encuentra el puntero del ratón mientras se mueve por todo 
 * el documento.               
 * <label>Coordenada X</label>              
 * <input id="cX"> </div>             
 * <label>Coordenada Y</label>            
 * <input id="cY"> </div>            
 * </body>
 * 
 * Aclaraciones: A medida que se mueve el ratón en los cuadros aparecerá la posición x 
 * e y del ratón medidas respeto a la pantalla (screen) del navegador, o sea, cX distancia 
 * horizontal a la esquina superior izquierda y cY distancia vertical a la esquina superio derecha
 */


document.addEventListener('mousemove', actualizarCoordenadas);

const coordX = document.querySelector("#cX");
const coordY = document.querySelector("#cY");

function actualizarCoordenadas(e) {
    coordX.value = e.screenX;
    coordY.value = e.screenY;
}

