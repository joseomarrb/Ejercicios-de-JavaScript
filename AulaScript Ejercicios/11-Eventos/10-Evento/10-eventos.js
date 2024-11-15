/**
 * En este input no se deben aceptar valores que sean numéricos. 
 * Todo lo que esté entre 0 y 9 no se deben aceptar. Diseña un manejador 
 * de eventos para evitar que en el control se anoten números.
 * 
 * <form>        
 * <label>No se aceptan dígitos</label>           
 * <input type="text" id="letras">           
 * </form>
 * 
 * Aclaraciones: Al pulsar una tecla numérica debe interrumpirse el flujo normal 
 * predefinido del input para no admitir la tecla pulsada.
 */

const letras = document.querySelector("#letras");

letras.addEventListener('keypress', (event) => {
    if (event.key >= "0" && event.key <= "9") {
        event.preventDefault();
    }
});