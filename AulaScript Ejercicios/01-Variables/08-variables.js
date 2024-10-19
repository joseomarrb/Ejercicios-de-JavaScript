/**
 * Una tortilla de patatas lleva 200 gramos de patatas por persona. 
 * Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
 * Escribe un script que dado el número de comensales calcule las cantidades
 * de ingredientes necesarias.
 * 
 * Aclaraciones:
 * 
 * .5 comensales,
 * Se necesitará: 1 kg de papas, 5 huevos, 300 gr de cebolla
 */

let comensales = parseInt(prompt("Número de comensales:"));

let papas = comensales * 200;
papas = papas / 1000;

let huevos = papas * 5;
let cebolla = papas * 300;

let resultado = prompt(`Patatas: ${papas} kilos \nHuevos: ${huevos} \nCebolla: ${cebolla} gramos`);
