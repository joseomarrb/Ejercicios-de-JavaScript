/**
 * En esta págian web debes agregar un script para asignar un manejador de eventos 
 * al botón button. Este script deberá escribir en el campo total el valor de 
 * multiplicar los otros dos campos.
 * 
 * <form>
 * <input id="precio" type="number">
 * <input id="cantidad" type="number">
 * <input type="button" id="enviar" value="Calcular">
 * <input id="total" readonly>
 * </form>
 * 
 * Aclaraciones: La página mostrará el formulario, si se escribe 5 y 8 al pulsar sobre el
 *  botón de calcular  aparecerá 40 en el campo total. Coloca el script al final del body.
 */

const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const btnEnviar = document.querySelector("#enviar");
const total = document.querySelector("#total");

btnEnviar.addEventListener('click', () => {
    if (!inputCantidad.value || !inputPrecio.value) {
        alert("Debes llenar ambos campos :/");
        return;
    }
    const cantidad = inputCantidad.value;
    const precio = inputPrecio.value;
    const resultado = cantidad * precio
    total.value = resultado;
})