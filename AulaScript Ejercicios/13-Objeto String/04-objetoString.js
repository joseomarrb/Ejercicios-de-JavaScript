/**
 * Escribe una función recursiva que cuente el número de veces que un carácter 
 * dado aparece en una cadena. La función recibe como argumentos la cadena y 
 * el carácter buscado.
 * 
 * Aclaraciones: Por ejemplo contarLetra("Hoy es martes" , 'e') devolverá 2 porque 
 * hay dos letras e en la cadena.
 */

let num = 0;
function contarLetra(string , letra) {
    for (let i = 0; i < string.length; i++) {
        if (letra === string[i]) {
            num += 1;
        }
    }
    return num;
};

console.log(contarLetra("Hoy es martes" , 'e'));