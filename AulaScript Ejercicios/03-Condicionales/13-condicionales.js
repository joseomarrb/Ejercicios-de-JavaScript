/**
 * En este caso, también usando el operador ternario o if reducido, 
 * un visitante a la página deberá teclear su edad, si es igual o 
 * mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá 
 * decirle los años que tiene que estperar para entrar

 * Aclaraciones: Si le digo que tengo 19 años me dirá "Puedes entrar", 
 * si le digo que tengo 14 años me dirá "Espera 4 años"
 */

const edad = parseInt(prompt("Ingresa tu edad aquí:"));
let operacion = 18 - edad;

edad >= 18 ? alert("Puedes entrar ☺") : alert(`No puedes entrar, espera ${operacion} años.`);