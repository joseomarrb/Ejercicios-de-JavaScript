/**
 * El usuario debe entrar un número y su cuadrado. 
 * Si es correcto el script enviará un mensja ede acierto 
 * en caso contrario dirá que se produjo un error.

 * Se trata de usar el if resumido (cond?true:false)
 * Aclaraciones: Por ejemplo si teclea 3 y 9 el resutlado es Correcto. 
 * Si tecleo 3 8, el resultado será Error
 */

const num = parseInt(prompt("Inserta un numero entero:"));
const cuadrado = parseInt(prompt("Inserta el cuadrado del numero que insertaste:"));

let resultado = Math.pow(num, 2);

cuadrado === resultado ? 
alert(`Has acertado el cuadrado de ${num} es ${resultado}`) : 
alert(`Has fallado el cuadrado de ${num} es ${resultado}`);