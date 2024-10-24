/**
 * Escribir un script que pida al usuario una contraseña. 
 * Si coincide con la clave definida en el script le devolverá 
 * el mensaje "Acceso concedido" y si no coincide le devolverá 
 * el mensaje "Acceso Denegado" . 
 * Si falla tres veces se emitirá el mensaje "Alerta, intruso"
 * 
 * Aclaraciones: La contrasñe es por ejemplo pasar. 
 * Tecleo tres veces otra distinta: Acceso Intruso.
 */

let password = prompt("Ingresa tú contraseña CORRECTAMENTE aquí:");
let numVeces = 0;
let comprobarPassword = password;

while ( password ) {
    if (numVeces < 1) {
        password = prompt("Ingrese su contraseña nuevamente");
    }
    numVeces++;
    if (numVeces === 3) {
        alert("Alerta, intruso.") 
        break
    }

    if (password === comprobarPassword) {
        alert("Acceso concedido");
        break;
    } else {
        prompt("Acceso Denegado, intente nuevamente");
    }
}