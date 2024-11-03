/**
 * En este ejempo debes crear una función que reciba como argumento una letra y 
 * devuelva verdadero o falso (true o false) dependiendo de si es una vocal o no. 
 * Debe funcionar igual con mayúsculas y con minúsculas y por supuesto usando arrays.
 * 
 * Solo se aceptan letras internacionales (sin acentos)
 * 
 * Aclaraciones: Por ejemplo esVocal('A') dirá true, mientras que esVocal("z") dirá false.
 */

const array = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
const esVocal = letra => array.includes(letra);

console.log(esVocal("x"));