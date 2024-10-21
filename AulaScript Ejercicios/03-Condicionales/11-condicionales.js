/**
 * El usuario debe introducir dos valores numéricos por teclado y la 
 * aplicación deberá indicar cual es el mayor, el primero o el segundo.

 * La idea es usar las sentencias if reducidas (cond ? ture:false)
 * Aclaraciones: Si el usuario entra 2 y luego 4, debe decir que el 
 * mayor es el segundo número.
 */

const primerNum = parseInt(prompt("Inserta tu primer valor númerico para saber cual es mayor:"));
const segundoNum = parseInt(prompt("Inserta tu segundo valor númerico para saber cual es mayor:"));

primerNum > segundoNum ? alert(`El primer numero es mayor: ${primerNum}`) : alert(`El segundo numero es mayor: ${segundoNum}`);