/**
 * Escribe una función que reciba como argumento un array y que devuelva 
 * una cadena de caracteres formada por los elementos del array separados por un guión
 * 
 * Aclaraciones: Si llamamos a la función como listar(["rojo", "verde", "azul"]) 
 * deberá devolver "rojo-verde-azul"
 */

const listar = array => array.join("-");
console.log(listar(["rojo", "verde", "azul"]));