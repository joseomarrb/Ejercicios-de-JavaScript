/**
 * Este ejercicio dirigirá a los clientes a la barra de bebidas
 * o a la de comidas, para ello el cliente puede pedir vino, cerveza,
 * refresco, agua. Si pide un cerveza o vino se le dirige a la barra
 * y si no pues se le dirige a la tienda.
 * 
 * Aclaraciones: Un cliente ellige vino, aparecerá el mensaje vaya a la barra, 
 * en caso contrarío dirá que vaya a la tienda.
 */

const barra = prompt("Qué desea de tomar? \nagua \nvino \ncerveza \nrefresco");

if (barra === "vino"|| barra === "cerveza") {
    alert("Por favor, vaya a la barra ☺")
} else {
    alert("Por favor, vaya a la barra ☺")
}