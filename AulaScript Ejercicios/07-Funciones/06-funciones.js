/**
 * Diseña una función que calcule el factorial de un número, usa 
 * una función recursiva (que se llama a si misma). Recuerda que 
 * el factorial de un número es el resultado de multiplicar cada 
 * número por el anterior hasta llegar a 1. Y el factorail de 0 
 * es por definición 1
 * 
 * Aclaraciones: Si escribo factorial(3) obtendré 3*2*1 /= 6,
 */

function factorial(num) {
    return num === 0 ? 1 : num *= factorial(num - 1)
}

console.log(factorial(10));