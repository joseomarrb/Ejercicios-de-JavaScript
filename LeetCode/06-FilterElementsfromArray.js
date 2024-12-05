/**
 * 
 * @param {*} arr 
 * @param {*} fn 
 * @returns 
 */

/**
 * Dado un arreglo entero arr y una función de filtrado fn,
 *  devuelve un arreglo filtrado filteredArr.
 * 
 * La función fn toma uno o dos argumentos:
 * 
 * arr[i] - número del arr
 * i - índice de arr[i]
 * filteredArr solo debe contener los elementos del arr para los cuales 
 * la expresión fn(arr[i], i) evalúa un valor verdadero. Un valor verdadero es 
 * un valor donde Boolean(value) devuelve verdadero.
 * 
 * Resuélvalo sin el método Array.filter incorporado. 
 */

var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
};