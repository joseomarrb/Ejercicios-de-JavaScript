/**
 * Este script el usuario deberá teclear una letra y un número, 
 * y el programa mostrará una cadena formada por la letra repetida 
 * el número que haya tecleado.
 * 
 * Aclaraciones: Si el usuario teclea x y 5 el script mostrará xxxxx. 
 * O sea una cadena de 5 letras x
 */

const letra = prompt("Ingresa una letra aquí: ☺");
const numero = parseInt(prompt("Ingresa una numero aquí: ☺"));

let output = "";

for (let i = 1; i <= numero; i++) {
    output += letra;
}

alert("El resultado es: " + output);