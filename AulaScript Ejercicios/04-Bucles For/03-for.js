/**
 * Se quiere un bucle que genere una lista con todos los números pares 
 * positivos por debajo del número tecleado por el usuario. Los números 
 * se aparecerán en una ventana alert con cambios de linea (carácter '\n').
 * 
 * Aclaraciones: Si tecleo el número el número 9 deberá mostrar cinco lineas 
 * con los números 0 2 4 6 8
 */

const num = parseInt(prompt("Ingresa un numero entero para ver los números pares positivos por debajo del número tecleado:"));
let salida = "Números pares por debajo del número tecleado: \n"

for (let i = num; i > 0; i--) {
    if (i % 2 === 0) {
        salida += `${i} \n`
    }
}

alert(salida);