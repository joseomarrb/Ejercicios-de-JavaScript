/**
 * Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

 * Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.
 * Aclaraciones: Si tecleo el 3 el script me responderá que estamos en Primavera
 */

const estaciones = parseInt(prompt("Ingresa un numero del 1 al 12 para saber a qué estacion del año pertenece."));

switch (estaciones) {
    case 12:
    case 1:
    case 2:
        alert("Estamos en Invierno")
        break;
    case 3:
    case 4:
    case 5:
        alert("Estamos en Primavera")
        break;
    case 6:
    case 7:
    case 8:
        alert("Estamos en Verano")
        break;
    case 9:
    case 10:
    case 11:
        alert("Estamos en Otoño")
        break;
    default:
        alert("Ingresa un número valido.")
        break;
}