/**
 * 
 * @param {*} arr 
 * @param {*} fn 
 * @returns 
 */

/**
 * Dado un arreglo de números enteros arr y una función de mapeo fn, 
 * devuelva un nuevo arreglo con una transformación aplicada a cada elemento.
 * 
 * El arreglo devuelto debe crearse de manera que returnedArray[i] = fn(arr[i], i).
 * 
 * Resuélvalo sin el método Array.map incorporado. 
 */

var map = function(arr, fn) {
    const returnedArray = []
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    }
    return returnedArray;
};