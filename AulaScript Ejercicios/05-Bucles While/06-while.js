/**
 * En este script se pedirá al usuario que teclee un número cada vez. 
 * El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la 
 * suma de todos los números tecleados.
 * 
 * Aclaraciones: El usuario teclea primero el 4 luego el 5 depsués 6 y 
 * finalmente , 0. El programa se para y muestra "La suma de todos los número es 15"
 */

let tecleaNum = parseInt(prompt("Teclea un número aquí:"));
let suma = 0;

while (tecleaNum >= 0) {
    suma += tecleaNum;
    tecleaNum = parseInt(prompt("Inserta otro número un número aquí: \nPara salir inserta 0."))
    if (tecleaNum === 0) {
        alert(`"La suma de todos los número es ${suma}`);
        break;
    }
}