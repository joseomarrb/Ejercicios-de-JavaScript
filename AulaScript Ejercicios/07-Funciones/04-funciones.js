/**
 * Definir una función que cree una cadena de letras repetidas 
 * tantas veces como le digamos. La función recibe dos argumentos: 
 * la letra y el número de repeticiones.
 * 
 * Aclaraciones: Al ejecutar repetir('a', 5) deberá devover la cadena  aaaaa.
 */

const repetir = (letra, repeticiones) => {
    let contador = letra;
    for (let i = 1; i < repeticiones; i++) {
        letra += contador;
    }
    return letra
}

console.log(repetir("XO", 3))