/**
 * En una página web vas a colocar un elemento tipo div con un argumento onclick() 
 * para que al pulsar sobre el bloque se abra una ventana alert con el mensaje 
 * "Pulsaste sobre el botón". El bloque div deberá tener como texto "Pulsa aquí".
 * 
 * Aclaraciones: Al pulsar sobre el ratón sobre el bloque saltará la ventana alert.
 * El bloque div puede ser un bloque simple, o puedes aplicarle estilos css para que 
 * quede como un botón.
 */

const btn = document.querySelector("#btn");

function eventoBtn() {
    alert("Pulsaste sobre el botón");
}
