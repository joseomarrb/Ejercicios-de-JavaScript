/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

/**
 * Dado un arreglo arr y una función fn, devuelve un arreglo ordenado sortedArr. 
 * Puedes suponer que fn solo devuelve números y que esos números determinan el 
 * orden de clasificación de sortedArr. sortedArr debe ordenarse en orden ascendente 
 * según la salida de fn.
 * 
 * Puedes suponer que fn nunca duplicará números para un arreglo determinado.
 */

var sortBy = function(arr, fn) {
    return arr.sort( (a,b) => fn(a) - fn(b));
};

console.log(sortBy([5,4,1,2,3], (x) => x));
