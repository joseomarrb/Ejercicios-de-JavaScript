/**
 * Diseñar un script que pida un número mayor que cero y 
 * devuelva la suma de todos los números pares desde cero a
 * l número introducido. Mostrará la suma y volverá a pedir
 * otro núero hasta que el usuario teclee un 0.
 * 
 * Aclaraciones: Si tecleo el 10 mostrará 30 la suma de 2+4+6+8+10
 */

let pedirNum = parseInt(prompt("Ingresa un número mayor que 0 para ver la suma de todos sus pares anteriores"));
let suma = 0;

do {
    if ( pedirNum > 0 ) {
        for (let num = 0; num <= pedirNum; num++) {
            if ( num % 2 === 0 ){ 
                suma += num
            };
            if (pedirNum === num) {
                pedirNum = parseInt(prompt(`La suma es ${suma}, ingresa otro número:`))
            }
        }
    }

    if (pedirNum === 0) alert(`Presionaste 0, programa finalizado.`); break;
} while ( pedirNum );
