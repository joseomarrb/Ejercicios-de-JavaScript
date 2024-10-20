/**
 * Se trata de escribir un script que diga si un número es par o es impar.
 * Recordemos que un número es par si al dividirlo por 2 da como resto 0.  

 * Aclaraciones: Si el número es 17, el programa debe decir que es impar.
 */

const insertarNumero = parseInt(prompt("Inserta el número que quieres saber si es par o impar:"));

if (insertarNumero % 2 === 0) {
    alert(`El número ${insertarNumero} es PAR.`)
} else {
    alert(`El número ${insertarNumero} es IMPAR.`)
}