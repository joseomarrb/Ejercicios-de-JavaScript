/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Dado un arreglo no vacío de números enteros, cada elemento aparece dos veces 
 * excepto uno. Encuentre ese único elemento.
 * 
 * Debe implementar una solución con una complejidad de tiempo de ejecución lineal 
 * y usar solo espacio adicional constante.
 */

var singleNumber = function(nums) {
    for (const num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) {
            return num
        }
    }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));