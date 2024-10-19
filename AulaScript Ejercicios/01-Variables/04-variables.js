/**
 * En este ejercicio vas a pedir al usuario que teclee tres números enteros
 * y el script mostrará como resultado el valor medio de los tres.

 * Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

 * Aclaraciones:
 * Si el usuario teclea: 3, 2, 4
 * 
 * La media de los números es 3.
 */

let primerNum = parseInt(prompt("Inserta el primer numero:"));
let segundoNum = parseInt(prompt("Inserta el segundo numero:"));
let tercerNum = parseInt(prompt("Inserta el tercer numero:"));

let media = (primerNum + segundoNum + tercerNum) / 3;
alert(`La media de tus números es ${media}`);