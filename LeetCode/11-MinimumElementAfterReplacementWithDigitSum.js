/**
 * 
 * @param {*} nums 
 */

/**
 * Se le proporciona una matriz de números enteros nums.
 * 
 * Reemplaza cada elemento de nums con la suma de sus dígitos.
 * 
 * Devuelve el elemento mínimo de nums después de todos los reemplazos. 
 * */

var minElement = function(nums) {
    let returnedResult = []
    nums.forEach( num => {
        let numToString = num.toString().split('');
        let numToNumber = numToString.map( numb => parseInt(numb));
        let numPushed = numToNumber.reduce( (total, number) => total + number, 0);
        returnedResult.push(numPushed);
    });
    return Math.min(...returnedResult);
};

console.log(minElement([10,12,13,14]))
