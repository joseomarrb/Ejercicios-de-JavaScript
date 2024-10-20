/**
 * Este programa te ayuda a viajar. El programa pide al usuario si va a 
 * viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus 
 * le recordará que lleve dinero para el billete.
 * 
 * Aclaraciones: El cliente pide ir en tren, aparecerá el mesnaje "lleva dinero para el ticket"
 */

const enQueViajaras = prompt("En qué viajarás? \nCoche \nAutobus \nBicicleta \nTren")

if (enQueViajaras === "tren" || enQueViajaras === "autobus") {
    alert("Lleva dinero para el ticket");
} else {
    alert("Que tengas un buen viaje ☺.");
}