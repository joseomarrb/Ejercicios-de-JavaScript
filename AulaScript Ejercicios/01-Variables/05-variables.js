/**
 * Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos
 * por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.

 * Un problema matemático muy simple numero de litros dividido por número de kilómetros.

 * Aclaraciones:
 * El usuario teclea: Num de litros: 20, Num de kilómetros: 80
 * 
 * Has consumido 0.25 l/km  //   20/80
 */

let litrosConsumidos = parseInt(prompt("Inserta el número de litros consumidos por tu coche:"));
let kmRecorridos = parseInt(prompt("Inserta el número de kilometros recorridos por tu coche:"));

alert(`Has consumido: ${litrosConsumidos / kmRecorridos} l/km`);