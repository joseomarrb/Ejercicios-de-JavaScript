/**
 * Dado un array entero nums, una función reductora fn y un valor inicial init, 
 * devuelve el resultado final obtenido al ejecutar la función fn en cada elemento 
 * del array, secuencialmente, pasando el valor de retorno del cálculo en el elemento anterior.
 * 
 * Este resultado se logra mediante las siguientes operaciones: 
 * val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...
 *  hasta que se haya procesado cada elemento del array. Luego se devuelve el valor final de val.
 * 
 * Si la longitud del array es 0, la función debe devolver init. ☺
 * 
 * Resuélvalo sin utilizar el método integrado Array.reduce. ☺
 */

const reduce = function(nums, fn, init) {
    let returnResult = 0;
    if (!nums.length) { return init; }
    for (let i = 0; i < nums.length; i++) {
        if (!i) {
            returnResult = fn(init, nums[i])
        } else {
            returnResult = fn(returnResult, nums[i])
        }
    }
    return returnResult;
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)) // 130