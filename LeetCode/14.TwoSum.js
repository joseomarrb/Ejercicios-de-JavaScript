/**
 * 
 * @param {*} nums 
 * @param {*} target 
 */

/**
 * Dado un arreglo de números enteros y un objetivo entero, devuelve los 
 * índices de los dos números de manera que sumen el objetivo.
 *
 * Puedes suponer que cada entrada tendría exactamente una solución y no 
 * puedes usar el mismo elemento dos veces.
 *
 * Puedes devolver la respuesta en cualquier orden. 
 */

var twoSum = function(nums, target) {
    let indexArr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if ( j > i ) {
                if ( nums[i] + nums[j] === target) {
                    indexArr.push(i, j)
                    break;
                };
            }
        }
    }
    return indexArr;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3,2,3], 6));