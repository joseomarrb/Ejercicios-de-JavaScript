/**
 * Función que calcule si un número es múltiplo de otro. 
 * La función recibirá dos argumentos, el primero será el 
 * supuesto mutiplo del segundo argumento.
 * 
 * Aclaraciones: Si ejecuto o llamo a la función con esMultiplo(40,4) 
 * debe devolver true porque 40 es divisible por 4. Si ejecutas esMultiplo(23,4) dará false.
 */

function esMultiplo(num1, num2) {
    return num1 % num2 === 0 ? true : false
}

console.log(esMultiplo(40, 4))
console.log(esMultiplo(23, 4))